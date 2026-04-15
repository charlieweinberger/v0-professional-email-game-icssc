'use client'

import { useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useGameStore } from '@/lib/game-store'
import { EmailViewer } from '@/components/email-viewer'
import { EmailComposer } from '@/components/email-composer'
import { GameTimer } from '@/components/game-timer'


export default function PlayPage() {
  const router = useRouter()
  const { 
    currentEmail, 
    userResponse, 
    setUserResponse, 
    timeRemaining,
    decrementTime,
    startGame,
    endGame,
    gameStarted
  } = useGameStore()

  useEffect(() => {
    startGame()
  }, [startGame])

  const handleTimeUp = useCallback(() => {
    endGame()
    router.push('/results')
  }, [endGame, router])

  const handleSend = useCallback(() => {
    endGame()
    router.push('/results')
  }, [endGame, router])

  if (!currentEmail) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading your cringe email...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Gmail-style header */}
      <header className="border-b border-border bg-card px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">S!</span>
              </div>
              <span className="font-semibold text-foreground hidden sm:block">Synergize!</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <GameTimer 
              timeRemaining={timeRemaining}
              onTick={decrementTime}
              onTimeUp={handleTimeUp}
              isActive={gameStarted}
            />
          </div>
        </div>
      </header>

      <div className="min-h-[calc(100vh-64px)]">
        {/* Main content */}
        <div className="p-4 lg:p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Instructions banner */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-lg">✍️</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Rewrite this email with maximum corporate jargon!</p>
                <p className="text-xs text-muted-foreground">Make it professional, make it corporate, make it synergistic.</p>
              </div>
            </div>

            {/* Email display */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Original email */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-destructive bg-destructive/10 px-2 py-1 rounded">ORIGINAL</span>
                  <span className="text-xs text-muted-foreground">The cringe version</span>
                </div>
                <EmailViewer email={currentEmail} />
              </div>

              {/* Reply composer */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">YOUR VERSION</span>
                  <span className="text-xs text-muted-foreground">Make it corporate</span>
                </div>
                <EmailComposer
                  to={currentEmail.from}
                  subject={currentEmail.subject}
                  value={userResponse}
                  onChange={setUserResponse}
                  onSend={handleSend}
                  disabled={!gameStarted}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
