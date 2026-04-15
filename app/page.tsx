'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Mail, Clock, Trophy, Sparkles } from 'lucide-react'

export default function StartPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo/Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent/30 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">The Corporate Jargon Game</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            <span className="text-pretty">SYNERGIZE!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto text-pretty leading-relaxed">
            Transform cringe-worthy emails into corporate masterpieces. 
            Can you speak the language of business?
          </p>
        </div>

        {/* How to play */}
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
          <h2 className="text-lg font-semibold mb-6 text-foreground">How to Play</h2>
          
          <div className="grid gap-4 text-left">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Read the Bad Email</h3>
                <p className="text-sm text-muted-foreground">{"You'll"} receive a poorly written, unprofessional work email</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Beat the Clock</h3>
                <p className="text-sm text-muted-foreground">You have 60 seconds to rewrite it with maximum corporate jargon</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Get Corporate</h3>
                <p className="text-sm text-muted-foreground">{"\"Circle back\", \"synergize\", \"leverage\" — unleash your inner middle manager"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Button 
          size="lg" 
          className="px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          onClick={() => router.push('/play')}
        >
          Start Game
        </Button>
        
        <p className="text-xs text-muted-foreground">
          No synergies were harmed in the making of this game
        </p>
      </div>
    </main>
  )
}
