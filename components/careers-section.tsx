'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './animated-section'

const roles = [
  { title: 'Senior Full-Stack Developer', team: 'Engineering', location: 'Remote · Global', type: 'Full-time' },
  { title: 'Senior Copywriter', team: 'Brand', location: 'Lisbon · Hybrid', type: 'Full-time' },
  { title: 'Creative Designer', team: 'Brand', location: 'Remote · Europe', type: 'Full-time' },
  { title: 'Video Editor', team: 'Studio', location: 'Remote · Global', type: 'Full-time' },
  { title: 'Short-Form Editor', team: 'Studio', location: 'Remote · Global', type: 'Contract' },
  { title: 'Client Support Representative', team: 'Members', location: 'Remote · EU/US', type: 'Full-time' },
  { title: 'Client Success Manager', team: 'Members', location: 'Miami · Hybrid', type: 'Full-time' },
]

export function CareersSection() {
  return (
    <section id="careers" className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-16">
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-px bg-accent/70" />
                <span className="eyebrow">Open Positions</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Build the institute<br />
                <span className="italic text-muted-foreground">from the inside.</span>
              </h2>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <AnimatedSection delay={0.15}>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                We hire deliberately and rarely. Every member of the team works directly on the
                product, the brand and the rooms our clients trust. If your standards are higher
                than the market is willing to pay you for, you may be a fit.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="border-t border-border">
          {roles.map((role, i) => (
            <AnimatedSection key={role.title} delay={i * 0.05}>
              <motion.a
                href="mailto:careers@colloqate.com"
                whileHover="hover"
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-7 md:py-8 border-b border-border"
              >
                <div className="flex-1">
                  <motion.h3
                    className="font-serif text-2xl md:text-3xl tracking-tight"
                    variants={{ hover: { x: 6 } }}
                    transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    {role.title}
                  </motion.h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {role.team}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
                  <span>{role.location}</span>
                  <span className="opacity-40">/</span>
                  <span>{role.type}</span>
                  <motion.span
                    className="inline-block text-foreground/60 group-hover:text-accent transition-colors ml-2"
                    variants={{ hover: { x: 6 } }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-muted-foreground max-w-md leading-relaxed text-sm">
              Don&apos;t see your discipline? We keep a private bench. The strongest applicants
              find their way to us through people we already trust.
            </p>
            <a
              href="mailto:careers@colloqate.com"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-border hover:border-foreground transition-colors text-sm whitespace-nowrap"
            >
              careers@colloqate.com
              <span aria-hidden>→</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
