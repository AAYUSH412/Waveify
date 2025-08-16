"use client"

import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { 
  GeneratorType, 
  GeneratorConfig, 
  WaveConfig, 
  TypingConfig, 
  BadgeConfig, 
  LoaderConfig,
  TerminalConfig,
  getDefaultConfig,
  debounce,
  validateConfig
} from './types'
import { api } from '../../../lib/api'

// Enhanced hook for managing generator configuration with undo/redo
export function useGeneratorConfig<T extends GeneratorConfig>(
  type: GeneratorType,
  initialConfig?: Partial<T>
) {
  const [config, setConfig] = useState<T>(() => ({
    ...getDefaultConfig(type),
    ...initialConfig
  } as T))

  const [history, setHistory] = useState<T[]>([config])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  // Update configuration with history tracking and validation
  const updateConfig = useCallback((updates: Partial<T>) => {
    setConfig(prev => {
      const newConfig = { ...prev, ...updates }
      
      // Validate the new configuration
      const errors = validateConfig(type, newConfig)
      setValidationErrors(errors)
      
      // Add to history only if valid
      if (errors.length === 0) {
        setHistory(prevHistory => {
          const newHistory = prevHistory.slice(0, historyIndex + 1)
          newHistory.push(newConfig)
          return newHistory.slice(-50) // Keep last 50 states
        })
        setHistoryIndex(prev => Math.min(prev + 1, 49))
        setHasUnsavedChanges(true)
      }
      
      return newConfig
    })
  }, [historyIndex, type])

  // Batch update multiple properties
  const batchUpdate = useCallback((updates: Partial<T>) => {
    updateConfig(updates)
  }, [updateConfig])

  // Undo functionality
  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      setConfig(history[newIndex])
      setHasUnsavedChanges(true)
    }
  }, [history, historyIndex])

  // Redo functionality
  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      setConfig(history[newIndex])
      setHasUnsavedChanges(true)
    }
  }, [history, historyIndex])

  // Reset to default
  const reset = useCallback(() => {
    const defaultConfig = getDefaultConfig(type) as T
    setConfig(defaultConfig)
    setHistory([defaultConfig])
    setHistoryIndex(0)
    setHasUnsavedChanges(false)
    setValidationErrors([])
  }, [type])

  // Apply preset configuration
  const applyPreset = useCallback((presetConfig: Partial<T>) => {
    const newConfig = { ...getDefaultConfig(type), ...presetConfig } as T
    setConfig(newConfig)
    setHistory(prev => [...prev.slice(0, historyIndex + 1), newConfig])
    setHistoryIndex(prev => prev + 1)
    setHasUnsavedChanges(true)
  }, [type, historyIndex])

  // Save current state (mark as saved)
  const saveConfig = useCallback(() => {
    setHasUnsavedChanges(false)
  }, [])

  // Check if can undo/redo
  const canUndo = historyIndex > 0
  const canRedo = historyIndex < history.length - 1
  const isValid = validationErrors.length === 0

  return {
    config,
    updateConfig,
    batchUpdate,
    reset,
    undo,
    redo,
    applyPreset,
    saveConfig,
    canUndo,
    canRedo,
    hasUnsavedChanges,
    isValid,
    validationErrors,
    history: history.slice(0, historyIndex + 1)
  }
}

// Enhanced hook for generating URLs with caching and debouncing
export function useGeneratorURL(
  type: GeneratorType,
  config: GeneratorConfig,
  subtype?: string,
  delay: number = 300
) {
  const [url, setUrl] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const urlCache = useRef<Map<string, string>>(new Map())
  const abortController = useRef<AbortController | null>(null)

  // Generate URL helper function
  const generateUrlString = useCallback((
    baseURL: string,
    generatorType: GeneratorType,
    configuration: GeneratorConfig,
    generatorSubtype?: string
  ): string => {
    const params = new URLSearchParams()
    
    // Add configuration parameters based on type
    Object.entries(configuration).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.append(key, String(value))
      }
    })

    // Build URL
    let endpoint = ''
    switch (generatorType) {
      case 'wave':
        endpoint = generatorSubtype ? `/wave/${generatorSubtype}` : '/wave'
        break
      case 'typing':
        endpoint = generatorSubtype ? `/typing/${generatorSubtype}` : '/typing'
        break
      case 'badge':
        endpoint = '/badge'
        break
      case 'terminal':
        endpoint = generatorSubtype ? `/terminal/${generatorSubtype}` : '/terminal'
        break
      case 'loader':
        endpoint = generatorSubtype ? `/loader/${generatorSubtype}` : '/loader'
        break
      default:
        endpoint = `/${generatorType}`
    }

    return `${baseURL}${endpoint}?${params.toString()}`
  }, [])

  // Debounced URL generation with caching
  const generateURL = useMemo(
    () => debounce(async (currentConfig: GeneratorConfig) => {
      setIsGenerating(true)
      setError(null)
      
      try {
        // Create cache key
        const cacheKey = JSON.stringify({ type, subtype, config: currentConfig })
        
        // Check cache first
        if (urlCache.current.has(cacheKey)) {
          setUrl(urlCache.current.get(cacheKey)!)
          setIsGenerating(false)
          return
        }

        // Cancel previous request
        if (abortController.current) {
          abortController.current.abort()
        }
        abortController.current = new AbortController()

        // Generate new URL
        const baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://waveify.onrender.com'
        const newUrl = generateUrlString(baseURL, type, currentConfig, subtype)
        
        // Cache the result
        urlCache.current.set(cacheKey, newUrl)
        
        // Clean cache if it gets too large
        if (urlCache.current.size > 100) {
          const keys = Array.from(urlCache.current.keys())
          keys.slice(0, 50).forEach(key => urlCache.current.delete(key))
        }
        
        setUrl(newUrl)
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setIsGenerating(false)
      }
    }, delay),
    [type, subtype, delay, generateUrlString]
  )

  // Update URL when config changes
  useEffect(() => {
    if (config) {
      generateURL(config)
    }
  }, [config, generateURL])

  // Clear cache when component unmounts
  useEffect(() => {
    return () => {
      if (abortController.current) {
        abortController.current.abort()
      }
    }
  }, [])

  return { url, isGenerating, error, clearCache: () => urlCache.current.clear() }
}

// Hook for copying text to clipboard with feedback
export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      await navigator.clipboard.writeText(text)
      setCopied(true)
      setError(null)
      
      // Reset after 2 seconds
      timeoutRef.current = setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to copy')
      setCopied(false)
    }
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return { copied, error, copyToClipboard }
}

// Hook for managing local storage with TypeScript support
export function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : defaultValue
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
    }
    return defaultValue
  })

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, storedValue])

  const removeValue = useCallback(() => {
    try {
      setStoredValue(defaultValue)
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error)
    }
  }, [key, defaultValue])

  return [storedValue, setValue, removeValue]
}

// Hook for managing user preferences
export function useUserPreferences() {
  const [preferences, setPreferences, clearPreferences] = useLocalStorage('waveify-preferences', {
    theme: 'system' as 'light' | 'dark' | 'system',
    reducedMotion: false,
    autoSave: true,
    showPreview: true,
    defaultGenerator: 'wave' as GeneratorType,
    recentColors: [] as string[],
    favoritePresets: [] as string[]
  })

  const updatePreference = useCallback(<K extends keyof typeof preferences>(
    key: K,
    value: typeof preferences[K]
  ) => {
    setPreferences(prev => ({ ...prev, [key]: value }))
  }, [setPreferences])

  const addRecentColor = useCallback((color: string) => {
    setPreferences(prev => ({
      ...prev,
      recentColors: [color, ...prev.recentColors.filter(c => c !== color)].slice(0, 10)
    }))
  }, [setPreferences])

  const toggleFavoritePreset = useCallback((presetId: string) => {
    setPreferences(prev => ({
      ...prev,
      favoritePresets: prev.favoritePresets.includes(presetId)
        ? prev.favoritePresets.filter(id => id !== presetId)
        : [...prev.favoritePresets, presetId]
    }))
  }, [setPreferences])

  return {
    preferences,
    updatePreference,
    addRecentColor,
    toggleFavoritePreset,
    clearPreferences
  }
}

// Hook for managing animation state
export function useAnimationState() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const animationRef = useRef<number>(0)
  const startTime = useRef<number>(0)

  const play = useCallback(() => {
    setIsPlaying(true)
    startTime.current = performance.now() - currentTime
  }, [currentTime])

  const pause = useCallback(() => {
    setIsPlaying(false)
  }, [])

  const reset = useCallback(() => {
    setCurrentTime(0)
    startTime.current = performance.now()
  }, [])

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }, [isPlaying, pause, play])

  // Animation loop
  useEffect(() => {
    if (isPlaying) {
      const animate = (timestamp: number) => {
        if (startTime.current === undefined) {
          startTime.current = timestamp
        }
        
        setCurrentTime((timestamp - startTime.current) * speed)
        animationRef.current = requestAnimationFrame(animate)
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, speed])

  return {
    isPlaying,
    speed,
    currentTime,
    play,
    pause,
    reset,
    toggle,
    setSpeed
  }
}

// Hook for handling responsive breakpoints
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg')

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width < 640) setBreakpoint('sm')
      else if (width < 768) setBreakpoint('md')
      else if (width < 1024) setBreakpoint('lg')
      else setBreakpoint('xl')
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return {
    breakpoint,
    isMobile: breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: breakpoint === 'lg' || breakpoint === 'xl'
  }
}

// Hook for debounced values
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// Hook for managing form state with validation
export function useFormState<T extends Record<string, any>>(
  initialState: T,
  validationRules?: Partial<Record<keyof T, (value: any) => string | null>>
) {
  const [state, setState] = useState<T>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})

  const updateField = useCallback(<K extends keyof T>(
    field: K,
    value: T[K]
  ) => {
    setState(prev => ({ ...prev, [field]: value }))
    
    // Mark field as touched
    setTouched(prev => ({ ...prev, [field]: true }))
    
    // Validate field if rules exist
    if (validationRules?.[field]) {
      const error = validationRules[field]!(value)
      setErrors(prev => ({ ...prev, [field]: error || undefined }))
    }
  }, [validationRules])

  const validateAll = useCallback(() => {
    if (!validationRules) return true
    
    const newErrors: Partial<Record<keyof T, string>> = {}
    let hasErrors = false
    
    Object.keys(validationRules).forEach(field => {
      const key = field as keyof T
      const error = validationRules[key]!(state[key])
      if (error) {
        newErrors[key] = error
        hasErrors = true
      }
    })
    
    setErrors(newErrors)
    setTouched(Object.keys(state).reduce((acc, key) => ({ ...acc, [key]: true }), {}))
    
    return !hasErrors
  }, [state, validationRules])

  const reset = useCallback(() => {
    setState(initialState)
    setErrors({})
    setTouched({})
  }, [initialState])

  const isValid = Object.keys(errors).length === 0
  const hasBeenTouched = Object.values(touched).some(Boolean)

  return {
    state,
    errors,
    touched,
    updateField,
    validateAll,
    reset,
    isValid,
    hasBeenTouched
  }
}
