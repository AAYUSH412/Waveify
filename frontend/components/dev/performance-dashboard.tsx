/**
 * Performance monitoring dashboard for development
 * Shows Core Web Vitals and component performance metrics
 */

'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getPerformanceSummary, monitorMemoryUsage } from '@/lib/performance'
import { Gauge, Trash2, RefreshCw } from 'lucide-react'

interface PerformanceMetric {
  value: number
  timestamp: number
  url: string
}

interface PerformanceData {
  [key: string]: PerformanceMetric
}

export function PerformanceDashboard() {
  const [metrics, setMetrics] = useState<PerformanceData>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true)
      loadMetrics()
      
      // Set up memory monitoring
      const interval = setInterval(() => {
        monitorMemoryUsage()
        loadMetrics()
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [])

  const loadMetrics = () => {
    const summary = getPerformanceSummary()
    setMetrics(summary)
  }

  const clearMetrics = () => {
    localStorage.removeItem('waveify_performance')
    setMetrics({})
  }

  const formatValue = (metricName: string, value: number): string => {
    if (metricName.includes('memory')) {
      return `${(value / 1024 / 1024).toFixed(1)}MB`
    }
    if (metricName.includes('size')) {
      return `${(value / 1024).toFixed(1)}KB`
    }
    return `${value.toFixed(2)}ms`
  }

  const getStatusColor = (metricName: string, value: number): string => {
    const thresholds: { [key: string]: { good: number; poor: number } } = {
      largest_contentful_paint: { good: 2500, poor: 4000 },
      first_contentful_paint: { good: 1800, poor: 3000 },
      cumulative_layout_shift: { good: 0.1, poor: 0.25 },
      first_input_delay: { good: 100, poor: 300 },
      time_to_first_byte: { good: 800, poor: 1800 },
    }

    const threshold = thresholds[metricName]
    if (!threshold) return 'secondary'

    if (value <= threshold.good) return 'success'
    if (value <= threshold.poor) return 'warning'
    return 'destructive'
  }

  const getStatusVariant = (color: string) => {
    switch (color) {
      case 'success': return 'default'
      case 'warning': return 'secondary'
      case 'destructive': return 'destructive'
      default: return 'outline'
    }
  }

  if (!isVisible || Object.keys(metrics).length === 0) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md">
      <Card className="bg-background/95 backdrop-blur-sm shadow-lg border">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm flex items-center gap-2">
              <Gauge className="w-4 h-4" />
              Performance Metrics
            </CardTitle>
            <div className="flex gap-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={loadMetrics}
                className="h-6 w-6 p-0"
              >
                <RefreshCw className="w-3 h-3" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={clearMetrics}
                className="h-6 w-6 p-0"
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {Object.entries(metrics).map(([key, metric]) => (
              <div key={key} className="flex items-center justify-between text-xs">
                <span className="font-medium truncate flex-1">
                  {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
                <Badge 
                  variant={getStatusVariant(getStatusColor(key, metric.value))}
                  className="text-xs ml-2"
                >
                  {formatValue(key, metric.value)}
                </Badge>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-2 border-t text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
