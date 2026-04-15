'use client'

import { Mail, Star, Reply, Forward, MoreVertical, Archive, Trash2, Clock } from 'lucide-react'
import type { Email } from '@/lib/game-store'

interface EmailViewerProps {
  email: Email
}

export function EmailViewer({ email }: EmailViewerProps) {
  return (
    <div className="bg-card rounded-lg border border-border shadow-lg overflow-hidden">
      {/* Email header toolbar */}
      <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-muted/30">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
            <Archive className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
            <Clock className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Email content */}
      <div className="p-6">
        {/* Subject */}
        <h2 className="text-xl font-semibold text-foreground mb-4">{email.subject}</h2>
        
        {/* Sender info */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
              <span className="text-sm font-medium text-destructive">
                {email.from.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground text-sm">{email.from.split('@')[0].replace('.', ' ')}</span>
                <span className="text-xs text-muted-foreground">&lt;{email.from}&gt;</span>
              </div>
              <div className="text-xs text-muted-foreground">
                to {email.to}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">10:42 AM</span>
            <button className="p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
              <Star className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
              <Reply className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
              <Forward className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Email body */}
        <div className="text-foreground text-sm whitespace-pre-line leading-relaxed bg-muted/30 rounded-lg p-4 border border-border/50">
          {email.body}
        </div>

        {/* Context badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-accent/20 rounded-full">
          <span className="text-xs font-medium text-accent-foreground">Context: {email.context}</span>
        </div>
      </div>
    </div>
  )
}
