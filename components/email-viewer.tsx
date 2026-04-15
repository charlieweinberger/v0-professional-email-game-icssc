'use client'

import { Mail, Star, Reply, Forward, MoreHorizontal, Archive, Trash2, Clock } from 'lucide-react'
import type { Email } from '@/lib/game-store'

interface EmailViewerProps {
  email: Email
}

export function EmailViewer({ email }: EmailViewerProps) {
  return (
    <div className="bg-card rounded-lg border border-border shadow-2xl overflow-hidden flex flex-col h-full">
      {/* Email header toolbar */}
      <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-muted/50">
        <div className="flex items-center gap-1">
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
        <div className="flex items-center gap-1">
          <button className="p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Email metadata fields */}
      <div className="divide-y divide-border border-b border-border">
        <div className="px-4 py-2 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">From</span>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
              <span className="text-xs font-medium text-destructive">
                {email.from.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="text-sm text-foreground">{email.from}</span>
          </div>
        </div>
        <div className="px-4 py-2 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">To</span>
          <span className="text-sm text-foreground">{email.to}</span>
        </div>
        <div className="px-4 py-2 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Subject</span>
          <span className="text-sm text-foreground font-medium">{email.subject}</span>
        </div>
      </div>

      {/* Email body */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="text-foreground text-sm whitespace-pre-line leading-relaxed">
          {email.body}
        </div>
        
        {/* Context badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-accent/20 rounded-full">
          <span className="text-xs font-medium text-accent-foreground">Context: {email.context}</span>
        </div>
      </div>

      {/* Footer toolbar */}
      <div className="px-3 py-2 border-t border-border flex items-center gap-1">
        <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
          <Reply className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
          <Forward className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
          <Star className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
