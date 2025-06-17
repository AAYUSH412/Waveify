"use client"

import { useState, useEffect, useCallback, useMemo } from 'react'
import { 
  GeneratorType, 
  GeneratorConfig, 
  WaveConfig, 
  TypingConfig, 
  BadgeConfig, 
  getDefaultConfig,
  debounce
} from './types'
import { api } from '../../../lib/api'

// Hook for managing generator configuration
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

  // Update configuration with history tracking
  const updateConfig = useCallback((updates: Partial<T>) => {
    setConfig(prev => {
      const newConfig = { ...prev, ...updates }
      
      // Add to history
      setHistory(prevHistory => {
        const newHistory = prevHistory.slice(0, historyIndex + 1)
        newHistory.push(newConfig)
        return newHistory.slice(-20) // Keep last 20 states
      })
      setHistoryIndex(prev => Math.min(prev + 1, 19))
      
      return newConfig
    })
  }, [historyIndex])

  // Undo functionality
  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(prev => prev - 1)
      setConfig(history[historyIndex - 1])
    }
  }, [history, historyIndex])

  // Redo functionality
  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(prev => prev + 1)
      setConfig(history[historyIndex + 1])
    }
  }, [history, historyIndex])

  // Reset to default
  const reset = useCallback(() => {
    const defaultConfig = getDefaultConfig(type) as T
    setConfig(defaultConfig)
    setHistory([defaultConfig])
    setHistoryIndex(0)
  }, [type])

  // Check if can undo/redo
  const canUndo = historyIndex > 0
  const canRedo = historyIndex < history.length - 1

  return {
    config,
    updateConfig,
    reset,
    undo,
    redo,
    canUndo,
    canRedo,
    history: history.slice(0, historyIndex + 1)
  }
}

// Hook for generating URLs with debouncing
export function useGeneratorURL(
  type: GeneratorType,
  config: GeneratorConfig,
  subtype?: string,
  delay: number = 300
) {
  const [url, setUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  // Debounced URL generation
  const generateURL = useMemo(
    () => debounce((currentConfig: GeneratorConfig) => {
      setIsLoading(true)
      
      try {
        let generatedUrl = ''
        
        switch (type) {
          case 'wave':
            generatedUrl = subtype 
              ? api.generateWave(currentConfig as WaveConfig, subtype)
              : api.generateWave(currentConfig as WaveConfig)
            break
          case 'typing':
            generatedUrl = subtype 
              ? api.generateTyping(currentConfig as TypingConfig, subtype)
              : api.generateTyping(currentConfig as TypingConfig)
            break
          case 'badge':
            generatedUrl = api.generateBadge(currentConfig as BadgeConfig)
            break
          case 'terminal':
            generatedUrl = api.generateTerminal(currentConfig as any, subtype)
            break
          case 'loader':
            generatedUrl = api.generateLoader(currentConfig as any, subtype)
            break
        }
        
        setUrl(generatedUrl)
      } catch (error) {
        console.error('Error generating URL:', error)
      } finally {
        setIsLoading(false)
      }
    }, delay),
    [type, subtype, delay]
  )

  // Update URL when config changes
  useEffect(() => {
    generateURL(config)
  }, [config, generateURL])

  return { url, isLoading }
}

// Hook for copying to clipboard
export function useClipboard() {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const copy = useCallback(async (text: string) => {
    try {
      await api.copyToClipboard(text)
      setCopied(true)
      setError(null)
      
      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to copy')
      setCopied(false)
    }
  }, [])

  return { copy, copied, error }
}

// Hook for local storage persistence
export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return defaultValue
    
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return defaultValue
    }
  })

  const setStoredValue = useCallback((newValue: T | ((val: T) => T)) => {
    try {
      const valueToStore = newValue instanceof Function ? newValue(value) : newValue
      setValue(valueToStore)
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, value])

  return [value, setStoredValue] as const
}

// Hook for managing favorites
export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<string[]>('waveify-favorites', [])

  const addFavorite = useCallback((id: string) => {
    setFavorites(prev => prev.includes(id) ? prev : [...prev, id])
  }, [setFavorites])

  const removeFavorite = useCallback((id: string) => {
    setFavorites(prev => prev.filter(fav => fav !== id))
  }, [setFavorites])

  const isFavorite = useCallback((id: string) => {
    return favorites.includes(id)
  }, [favorites])

  const toggleFavorite = useCallback((id: string) => {
    if (isFavorite(id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }, [isFavorite, addFavorite, removeFavorite])

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite
  }
}

// Hook for managing recent configurations
export function useRecentConfigs(maxRecent: number = 10) {
  const [recentConfigs, setRecentConfigs] = useLocalStorage<Array<{
    id: string
    type: GeneratorType
    config: GeneratorConfig
    timestamp: number
    name?: string
  }>>('waveify-recent-configs', [])

  const addRecentConfig = useCallback((
    type: GeneratorType,
    config: GeneratorConfig,
    name?: string
  ) => {
    const newConfig = {
      id: `${type}-${Date.now()}`,
      type,
      config,
      timestamp: Date.now(),
      name
    }

    setRecentConfigs(prev => {
      const filtered = prev.filter(item => 
        !(item.type === type && JSON.stringify(item.config) === JSON.stringify(config))
      )
      return [newConfig, ...filtered].slice(0, maxRecent)
    })
  }, [setRecentConfigs, maxRecent])

  const removeRecentConfig = useCallback((id: string) => {
    setRecentConfigs(prev => prev.filter(item => item.id !== id))
  }, [setRecentConfigs])

  const clearRecentConfigs = useCallback(() => {
    setRecentConfigs([])
  }, [setRecentConfigs])

  return {
    recentConfigs,
    addRecentConfig,
    removeRecentConfig,
    clearRecentConfigs
  }
}

// Hook for managing generator state
export function useGenerator(type: GeneratorType, initialConfig?: GeneratorConfig) {
  const {
    config,
    updateConfig,
    reset,
    undo,
    redo,
    canUndo,
    canRedo
  } = useGeneratorConfig(type, initialConfig)

  const [subtype, setSubtype] = useState<string>()
  const [outputFormat, setOutputFormat] = useState<'markdown' | 'html' | 'url'>('markdown')
  
  const { url, isLoading } = useGeneratorURL(type, config, subtype)
  const { copy, copied } = useClipboard()
  const { addRecentConfig } = useRecentConfigs()

  // Generate output code based on format
  const outputCode = useMemo(() => {
    switch (outputFormat) {
      case 'markdown':
        return api.generateMarkdown(type, url)
      case 'html':
        return api.generateHTML(url)
      case 'url':
        return url
      default:
        return url
    }
  }, [outputFormat, type, url])

  // Copy current configuration
  const copyConfiguration = useCallback(() => {
    copy(outputCode)
    addRecentConfig(type, config)
  }, [copy, outputCode, addRecentConfig, type, config])

  return {
    // Configuration
    config,
    updateConfig,
    reset,
    
    // History
    undo,
    redo,
    canUndo,
    canRedo,
    
    // Generator options
    subtype,
    setSubtype,
    outputFormat,
    setOutputFormat,
    
    // Generated output
    url,
    outputCode,
    isLoading,
    
    // Actions
    copy: copyConfiguration,
    copied
  }
}
