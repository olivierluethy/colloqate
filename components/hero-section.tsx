'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './animated-section'
import { EmailCaptureForm } from './email-capture-form'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden grain">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(ellipse at 25% 30%, rgba(80,65,40,0.45) 0%, transparent 55%)',
              'radial-gradient(ellipse at 75% 70%, rgba(80,65,40,0.45) 0%, transparent 55%)',
              'radial-gradient(ellipse at 30% 80%, rgba(80,65,40,0.45) 0%, transparent 55%)',
              'radial-gradient(ellipse at 70% 25%, rgba(80,65,40,0.45) 0%, transparent 55%)',
              'radial-gradient(ellipse at 25% 30%, rgba(80,65,40,0.45) 0%, transparent 55%)',
            ],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              'radial-gradient(circle at center, rgba(180,150,90,0.35), transparent 60%)',
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.35, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-4xl">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-10 h-px bg-accent/70" />
              <span className="eyebrow">By Invitation · Est. 2019</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.98] tracking-tight text-balance">
              Access what most<br />
              people will <span className="italic text-muted-foreground">never</span> see.
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p className="mt-10 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              You don&apos;t need more information.
              <br className="hidden sm:block" />
              You need the right direction.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-12 max-w-xl">
              <EmailCaptureForm location="hero" buttonLabel="Request Access" />
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground/80">
                Trusted by 6,000+ individuals worldwide · No public roster
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6}>
          <div className="mt-24 lg:mt-32 hairline" />
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-[11px] tracking-[0.28em] uppercase text-muted-foreground/80">
            <span>Featured admits from</span>
            <span>Sequoia</span>
            <span>McKinsey</span>
            <span>Goldman Sachs</span>
            <span>YC</span>
            <span>Bain</span>
            <span>Founders Fund</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
