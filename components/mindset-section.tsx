'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './animated-section'

const principles = [
  {
    n: '01',
    title: 'We don&apos;t teach.',
    body: 'We compress. Time is the lever. Frameworks are the byproduct.',
  },
  {
    n: '02',
    title: 'We don&apos;t scale.',
    body: 'Every cohort is curated. The room is the product.',
  },
  {
    n: '03',
    title: 'We don&apos;t advertise.',
    body: 'We are reached, not announced. Membership is signal.',
  },
]

export function MindsetSection() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-px bg-accent/70" />
              <span className="eyebrow">Operating Principles</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Three lines that<br />
              <span className="italic text-muted-foreground">decide everything.</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {principles.map((p, i) => (
            <AnimatedSection key={p.n} delay={i * 0.1}>
              <motion.div
                whileHover={{ backgroundColor: 'var(--card)' }}
                className="h-full bg-background p-10 lg:p-12 flex flex-col gap-8"
              >
                <span className="eyebrow">{p.n}</span>
                <h3
                  className="font-serif text-3xl md:text-4xl tracking-tight"
                  dangerouslySetInnerHTML={{ __html: p.title }}
                />
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
