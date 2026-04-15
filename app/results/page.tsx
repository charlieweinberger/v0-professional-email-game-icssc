'use client'

import { useRouter } from 'next/navigation'
import { useGameStore } from '@/lib/game-store'
import { Button } from '@/components/ui/button'
import { Trophy, RotateCcw, Home, Sparkles, Clock, FileText } from 'lucide-react'
import { useEffect, useState } from 'react'

const corporateBuzzwords = [
  'synergy', 'leverage', 'circle back', 'moving forward', 'touch base', 
  'bandwidth', 'deep dive', 'low-hanging fruit', 'paradigm shift', 'stakeholder',
  'actionable', 'scalable', 'proactive', 'streamline', 'optimize',
  'best practices', 'core competencies', 'value-add', 'win-win', 'ecosystem',
  'align', 'vertical', 'horizontal', 'holistic', 'robust',
  'agile', 'pivot', 'disrupt', 'innovative', 'strategic',
  'deliverables', 'milestones', 'roadmap', 'pipeline', 'initiative',
  'empower', 'facilitate', 'incentivize', 'onboard', 'offshore',
  'per my last email', 'as per our discussion', 'going forward', 'at the end of the day',
  'take offline', 'drill down', 'game-changer', 'thought leader', 'bleeding edge',
  'move the needle', 'boil the ocean', 'run it up the flagpole', 'get our ducks in a row'
]

function countBuzzwords(text: string): { count: number; found: string[] } {
  const lowerText = text.toLowerCase()
  const found: string[] = []
  
  corporateBuzzwords.forEach(buzzword => {
    if (lowerText.includes(buzzword.toLowerCase())) {
      found.push(buzzword)
    }
  })
  
  return { count: found.length, found }
}

function getTitle(score: number): { title: string; description: string } {
  if (score >= 15) return { title: "Chief Synergy Officer", description: "You've achieved peak corporate enlightenment. HR would like a word." }
  if (score >= 10) return { title: "Senior Vice President of Jargon", description: "Your emails make CEOs weep with joy." }
  if (score >= 7) return { title: "Director of Buzzword Strategy", description: "You're fluent in corporate speak. Meetings fear you." }
  if (score >= 4) return { title: "Associate Manager", description: "You're getting there. A few more synergies and you'll be golden." }
  if (score >= 2) return { title: "Junior Coordinator", description: "A promising start. Remember: always circle back." }
  return { title: "Intern", description: "We need to schedule a meeting to discuss your professional development path." }
}

export default function ResultsPage() {
  const router = useRouter()
  const { currentEmail, userResponse, timeRemaining, resetGame } = useGameStore()
  const [results, setResults] = useState<{ count: number; found: string[] } | null>(null)
  const [titleInfo, setTitleInfo] = useState<{ title: string; description: string } | null>(null)

  useEffect(() => {
    if (userResponse) {
      const buzzwordResults = countBuzzwords(userResponse)
      setResults(buzzwordResults)
      setTitleInfo(getTitle(buzzwordResults.count))
    }
  }, [userResponse])

  const handlePlayAgain = () => {
    resetGame()
    router.push('/play')
  }

  const handleHome = () => {
    resetGame()
    router.push('/')
  }

  const timeUsed = 60 - timeRemaining
  const wordCount = userResponse ? userResponse.split(/\s+/).filter(w => w.length > 0).length : 0

  if (!currentEmail || !results || !titleInfo) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">No game data found</p>
          <Button onClick={handleHome}>Return Home</Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Trophy className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">{titleInfo.title}</h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">{titleInfo.description}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">{results.count}</div>
            <div className="text-sm text-muted-foreground">Buzzwords Used</div>
          </div>
          
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">{timeUsed}s</div>
            <div className="text-sm text-muted-foreground">Time Used</div>
          </div>
          
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">{wordCount}</div>
            <div className="text-sm text-muted-foreground">Words Written</div>
          </div>
        </div>

        {/* Buzzwords found */}
        {results.found.length > 0 && (
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Corporate Speak Detected
            </h3>
            <div className="flex flex-wrap gap-2">
              {results.found.map((word, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Your response */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Your Corporate Masterpiece</h3>
          <div className="bg-muted/30 rounded-lg p-4 text-sm text-foreground whitespace-pre-line leading-relaxed max-h-48 overflow-y-auto">
            {userResponse || "No response submitted"}
          </div>
        </div>

        {/* Original email for reference */}
        <details className="bg-card rounded-xl border border-border overflow-hidden">
          <summary className="p-6 cursor-pointer font-semibold text-foreground hover:bg-muted/30 transition-colors">
            Original Email (click to expand)
          </summary>
          <div className="px-6 pb-6">
            <div className="bg-muted/30 rounded-lg p-4 text-sm text-foreground whitespace-pre-line leading-relaxed">
              <p className="text-xs text-muted-foreground mb-2">From: {currentEmail.from}</p>
              <p className="text-xs text-muted-foreground mb-4">Subject: {currentEmail.subject}</p>
              {currentEmail.body}
            </div>
          </div>
        </details>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={handlePlayAgain}
            className="px-8 rounded-full font-semibold"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Play Again
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={handleHome}
            className="px-8 rounded-full font-semibold"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Remember: In corporate, {"it's"} not about saying something — {"it's"} about sounding like you said something.
        </p>
      </div>
    </main>
  )
}
