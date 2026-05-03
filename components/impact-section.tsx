'use client'

import { AnimatedSection } from './animated-section'

const ledger = [
  {
    cost: '1,800 hours',
    label: 'Self-directed research',
    detail: 'Reading the same conclusions packaged a hundred different ways.',
  },
  {
    cost: '$24,000',
    label: 'Coaches & courses',
    detail: 'Frameworks rented from people who have not done what you intend to do.',
  },
  {
    cost: '4 — 7 years',
    label: 'Compounded delay',
    detail: 'The years between knowing and acting. The years no résumé can recover.',
  },
]

export function ImpactSection() {
  return (
    <section className="relative py-32 md:py-40 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-px bg-accent/70" />
                <span className="eyebrow">The Real Cost</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Time is the only<br />asset you can&apos;t<br /><span className="italic text-muted-foreground">earn back.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">
                Most ambition dies quietly — not from a lack of effort, but from
                years of well-intentioned waste. The hidden ledger looks like this.
              </p>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-border">
              {ledger.map((item, i) => (
                <AnimatedSection key={item.label} delay={0.1 + i * 0.1}>
                  <div className="grid grid-cols-12 gap-6 py-8 border-b border-border group">
                    <div className="col-span-12 md:col-span-4">
                      <p className="font-serif text-3xl md:text-4xl tracking-tight group-hover:text-accent transition-colors">
                        {item.cost}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                      <p className="text-base font-medium mb-2">{item.label}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.5}>
              <p className="mt-10 font-serif text-xl md:text-2xl text-foreground leading-snug max-w-xl">
                Colloqate exists so the people who matter never spend that ledger again.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
