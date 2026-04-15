'use client'

import { useRef, useEffect } from 'react'
import { Bold, Italic, Underline, Link2, List, ListOrdered, Paperclip, Image, MoreHorizontal, Trash2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface EmailComposerProps {
  from: string
  to: string
  subject: string
  onSubjectChange: (subject: string) => void
  value: string
  onChange: (value: string) => void
  onSend: () => void
  disabled?: boolean
}

export function EmailComposer({ from, to, subject, onSubjectChange, value, onChange, onSend, disabled }: EmailComposerProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [])

  return (
    <div className="bg-card rounded-lg border border-border shadow-lg">
      {/* Header */}
      <div className="bg-muted/50 px-4 py-3 flex items-center justify-between border-b border-border">
        <h3 className="font-medium text-sm text-foreground">Your Rewrite</h3>
        <button className="p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Email fields */}
      <div className="divide-y divide-border text-sm">
        <div className="px-4 py-2.5 flex items-center gap-3">
          <span className="text-muted-foreground w-14 shrink-0">From</span>
          <span className="text-foreground">{from}</span>
        </div>
        <div className="px-4 py-2.5 flex items-center gap-3">
          <span className="text-muted-foreground w-14 shrink-0">To</span>
          <span className="text-foreground">{to}</span>
        </div>
        <div className="px-4 py-2.5 flex items-center gap-3">
          <span className="text-muted-foreground w-14 shrink-0">Subject</span>
          <input
            type="text"
            value={subject}
            onChange={(e) => onSubjectChange(e.target.value)}
            disabled={disabled}
            placeholder="Enter a professional subject line..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>

      {/* Compose area */}
      <div className="p-4 border-t border-border">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder="Rewrite the email body with maximum corporate jargon..."
          className="w-full min-h-[200px] resize-none bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm leading-relaxed"
        />
      </div>

      {/* Toolbar */}
      <div className="px-3 py-2 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button 
            onClick={onSend} 
            disabled={disabled || !value.trim()}
            className="rounded-full px-6 font-medium"
          >
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
          
          <div className="flex items-center ml-2 border-l border-border pl-2">
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors opacity-50 cursor-not-allowed">
              <Bold className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors opacity-50 cursor-not-allowed">
              <Italic className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors opacity-50 cursor-not-allowed">
              <Underline className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors opacity-50 cursor-not-allowed">
              <Link2 className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center border-l border-border pl-2">
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors opacity-50 cursor-not-allowed">
              <List className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors opacity-50 cursor-not-allowed">
              <ListOrdered className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors opacity-50 cursor-not-allowed">
            <Paperclip className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors opacity-50 cursor-not-allowed">
            <Image className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors opacity-50 cursor-not-allowed">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
