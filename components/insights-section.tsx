'use client'

import { AnimatedSection } from './animated-section'
import { EmailCaptureForm } from './email-capture-form'

const proof = [
  'Private dispatches twice monthly',
  'Read by partners, founders & operators',
  'Never indexed. Never published. Never resold.',
]

export function InsightsSection() {
  return (
    <section id="insights" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 grain">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(80,65,40,0.32) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-10 h-px bg-accent/70" />
            <span className="eyebrow">The Inner Circle</span>
            <span className="w-10 h-px bg-accent/70" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance">
            Get exclusive insights<br />
            <span className="italic text-muted-foreground">no one else has.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Twice a month our partners publish a private dispatch — frameworks, deals, lessons,
            and the unfiltered context behind them. It is not a newsletter. It is not for sale.
            It is the closest most people will come to sitting in our boardroom.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-14 max-w-xl mx-auto">
            <EmailCaptureForm
              location="insights"
              buttonLabel="Join the Inner Circle"
              align="center"
            />
            <ul className="mt-10 grid sm:grid-cols-3 gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {proof.map((p) => (
                <li key={p} className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
