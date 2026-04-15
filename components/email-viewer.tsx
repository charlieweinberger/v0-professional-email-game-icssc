'use client'

import { MoreHorizontal } from 'lucide-react'
import type { Email } from '@/lib/game-store'

interface EmailViewerProps {
  email: Email
}

export function EmailViewer({ email }: EmailViewerProps) {
  return (
    <div className="bg-card rounded-lg border border-border shadow-lg">
      {/* Header */}
      <div className="bg-muted/50 px-4 py-3 flex items-center justify-between border-b border-border">
        <h3 className="font-medium text-sm text-foreground">Original Email</h3>
        <button className="p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Email fields */}
      <div className="divide-y divide-border text-sm">
        <div className="px-4 py-2.5 flex items-center gap-3">
          <span className="text-muted-foreground w-14 shrink-0">From</span>
          <span className="text-foreground">{email.from}</span>
        </div>
        <div className="px-4 py-2.5 flex items-center gap-3">
          <span className="text-muted-foreground w-14 shrink-0">To</span>
          <span className="text-foreground">{email.to}</span>
        </div>
        <div className="px-4 py-2.5 flex items-center gap-3">
          <span className="text-muted-foreground w-14 shrink-0">Subject</span>
          <span className="text-foreground">{email.subject}</span>
        </div>
      </div>

      {/* Email body */}
      <div className="p-4 border-t border-border">
        <div className="text-foreground text-sm whitespace-pre-line leading-relaxed">
          {email.body}
        </div>
      </div>

      {/* Context badge */}
      <div className="px-4 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
          <span className="text-xs text-muted-foreground">Context: {email.context}</span>
        </div>
      </div>
    </div>
  )
}
