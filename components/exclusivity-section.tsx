'use client'

import { motion } from 'framer-motion'
import { Lock, KeyRound, EyeOff } from 'lucide-react'
import { AnimatedSection } from './animated-section'

const pillars = [
  {
    icon: EyeOff,
    title: 'Not publicly available',
    body: 'Our pathways are never advertised, indexed or sold. Members find us through people we already trust.',
  },
  {
    icon: KeyRound,
    title: 'Limited access',
    body: 'A small number of seats are released each cohort. Most applicants are quietly declined within fourteen days.',
  },
  {
    icon: Lock,
    title: 'Private pathways only',
    body: 'There is no consumer product. There is no scaled course. There is one room, one decision, one direction.',
  },
]

export function ExclusivitySection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-px bg-accent/70" />
              <span className="eyebrow">Membership</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
              A door that opens<br />
              <span className="italic text-muted-foreground">for very few.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-xl">
              Colloqate is engineered around scarcity. Not as a marketing posture — as the only way
              the rooms, the relationships and the results stay this rare.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ backgroundColor: 'var(--card)' }}
                className="h-full bg-background p-10 lg:p-12 flex flex-col gap-6"
              >
                <p.icon className="w-5 h-5 text-accent" strokeWidth={1.25} />
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">{p.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
