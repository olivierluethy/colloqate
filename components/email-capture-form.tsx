'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trackAccessRequest, trackButtonClick } from '@/lib/analytics'

interface EmailCaptureFormProps {
  location: string
  buttonLabel?: string
  placeholder?: string
  align?: 'left' | 'center'
  variant?: 'light' | 'dark'
}

export function EmailCaptureForm({
  location,
  buttonLabel = 'Request Access',
  placeholder = 'your@email.com',
  align = 'left',
  variant = 'dark',
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.')
      return
    }
    setError('')
    setSubmitted(true)
    trackAccessRequest(location)
    trackButtonClick(`request_access_${location}`)
  }

  const containerBg =
    variant === 'light'
      ? 'bg-background/60 border-border'
      : 'bg-card/60 border-border'

  return (
    <div className={align === 'center' ? 'mx-auto' : ''}>
      <AnimatePresence mode="wait" initial={false}>
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className={`relative flex flex-col sm:flex-row gap-3 p-2 rounded-full border backdrop-blur-md ${containerBg}`}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              aria-label="Email address"
              className="flex-1 bg-transparent px-5 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {buttonLabel}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`px-6 py-5 rounded-2xl border border-accent/40 bg-accent/5 ${
              align === 'center' ? 'text-center' : ''
            }`}
          >
            <p className="font-serif text-xl text-foreground mb-1">Received.</p>
            <p className="text-sm text-muted-foreground">
              Your name has been placed on the private list. Expect a quiet email within ten days.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {error && (
        <p className={`mt-3 text-xs text-destructive ${align === 'center' ? 'text-center' : ''}`}>
          {error}
        </p>
      )}
    </div>
  )
}
