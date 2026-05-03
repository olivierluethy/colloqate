'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './animated-section'

const testimonials = [
  {
    quote:
      'I had spent four years collecting frameworks. Colloqate gave me one room, one quarter, and the only people whose answers I actually trusted.',
    name: 'Marcus R.',
    role: 'Former Strategy Partner · Now Founder, Series A',
  },
  {
    quote:
      'The honest truth: the dispatch alone has been worth more than every coach I have ever paid. The events are a different category entirely.',
    name: 'Elena K.',
    role: 'Founder · Cape Town · Class of 2024',
  },
]

const proof = [
  { stat: '6,000+', label: 'Operators advanced' },
  { stat: '92%', label: 'Apply for a second program' },
  { stat: '47', label: 'Countries represented' },
  { stat: '$1.4B+', label: 'Capital raised by alumni' },
]

export function TestimonialSection() {
  return (
    <section className="relative py-32 md:py-40 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="w-10 h-px bg-accent/70" />
            <span className="eyebrow">Members · Alumni · Witnesses</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-20 max-w-4xl text-balance">
            They stopped paying for advice.<br />
            <span className="italic text-muted-foreground">They started receiving it.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.figure
                whileHover={{ borderColor: 'var(--accent)' }}
                className="h-full p-10 lg:p-12 rounded-2xl border border-border bg-background/40 backdrop-blur-sm flex flex-col"
              >
                <span className="font-serif text-5xl text-accent/80 leading-none mb-6">&ldquo;</span>
                <blockquote className="font-serif text-xl md:text-2xl leading-snug text-foreground flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-10 pt-6 border-t border-border">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1">
                    {t.role}
                  </p>
                </figcaption>
              </motion.figure>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border">
            {proof.map((p, i) => (
              <div
                key={p.label}
                className={`py-10 ${i !== 0 ? 'md:border-l border-border' : ''} ${
                  i % 2 !== 0 ? 'border-l border-border md:border-l' : ''
                }`}
              >
                <p className="font-serif text-3xl md:text-5xl tracking-tight">{p.stat}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
