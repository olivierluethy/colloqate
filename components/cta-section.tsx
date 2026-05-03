'use client'

import { AnimatedSection } from './animated-section'
import { EmailCaptureForm } from './email-capture-form'

export function CTASection() {
  return (
    <section className="relative py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(120,90,40,0.22) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-10 h-px bg-accent/70" />
            <span className="eyebrow">Final Note</span>
            <span className="w-10 h-px bg-accent/70" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] tracking-tight text-balance">
            If you&apos;re still exploring,<br />
            <span className="italic text-muted-foreground">you&apos;re already behind.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <p className="mt-12 max-w-xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            One application. One conversation. One decision that compresses the next decade.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-14 max-w-xl mx-auto">
            <EmailCaptureForm location="final_cta" buttonLabel="Request Access" align="center" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
