'use client'

import { useEffect } from 'react'
import { Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GameTimerProps {
  timeRemaining: number
  onTick: () => void
  onTimeUp: () => void
  isActive: boolean
}

export function GameTimer({ timeRemaining, onTick, onTimeUp, isActive }: GameTimerProps) {
  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      onTick()
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive, onTick])

  useEffect(() => {
    if (timeRemaining === 0 && isActive) {
      onTimeUp()
    }
  }, [timeRemaining, isActive, onTimeUp])

  const minutes = Math.floor(timeRemaining / 60)
  const seconds = timeRemaining % 60
  const isLowTime = timeRemaining <= 10

  return (
    <div 
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full font-mono text-lg font-semibold transition-colors",
        isLowTime 
          ? "bg-destructive/10 text-destructive animate-pulse" 
          : "bg-primary/10 text-primary"
      )}
    >
      <Clock className="w-5 h-5" />
      <span>
        {minutes}:{seconds.toString().padStart(2, '0')}
      </span>
    </div>
  )
}
