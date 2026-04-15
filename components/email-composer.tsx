'use client'

import { useRef, useEffect } from 'react'
import { Bold, Italic, Underline, Link2, List, ListOrdered, AlignLeft, Paperclip, Image, MoreHorizontal, Trash2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface EmailComposerProps {
  to: string
  subject: string
  value: string
  onChange: (value: string) => void
  onSend: () => void
  disabled?: boolean
}

export function EmailComposer({ to, subject, value, onChange, onSend, disabled }: EmailComposerProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [])

  return (
    <div className="bg-card rounded-t-lg border border-border shadow-2xl overflow-hidden flex flex-col h-full max-h-[500px]">
      {/* Header */}
      <div className="bg-muted/50 px-4 py-3 flex items-center justify-between border-b border-border">
        <h3 className="font-medium text-sm text-foreground">New Message</h3>
        <div className="flex items-center gap-1">
          <button className="p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Email fields */}
      <div className="divide-y divide-border border-b border-border">
        <div className="px-4 py-2 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">To</span>
          <span className="text-sm text-foreground">{to}</span>
        </div>
        <div className="px-4 py-2 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Subject</span>
          <span className="text-sm text-foreground">Re: {subject}</span>
        </div>
      </div>

      {/* Compose area */}
      <div className="flex-1 p-4 overflow-hidden">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder="Compose your professionally-worded response here..."
          className="w-full h-full min-h-[200px] resize-none bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm leading-relaxed"
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
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors" disabled>
              <Bold className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors" disabled>
              <Italic className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors" disabled>
              <Underline className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors" disabled>
              <Link2 className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center border-l border-border pl-2">
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors" disabled>
              <List className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors" disabled>
              <ListOrdered className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors" disabled>
              <AlignLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors" disabled>
            <Paperclip className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors" disabled>
            <Image className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors" disabled>
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
