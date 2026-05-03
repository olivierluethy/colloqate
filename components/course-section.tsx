'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './animated-section'

const tracks = [
  {
    index: '01',
    name: 'Fast-Track Learner',
    duration: '12 weeks',
    cohort: 'Jan · May · Sep',
    summary:
      'For operators who must compress years of skill acquisition into a single quarter — without losing depth. Daily intensity, private mentorship, weekly peer review.',
    seats: 18,
  },
  {
    index: '02',
    name: 'Smart-Track Learner',
    duration: '6 months',
    cohort: 'Bi-annual',
    summary:
      'A composed, deliberate path for those building durable expertise. Strategy, positioning and execution refined under direct guidance from operators who have done the work.',
    seats: 24,
  },
  {
    index: '03',
    name: 'Quick-Step Integrator',
    duration: '4 weeks',
    cohort: 'Monthly',
    summary:
      'For the already-capable. A precision residency to integrate, decide and ship — engineered to remove the last 20% of friction between you and your next chapter.',
    seats: 12,
  },
]

export function CourseSection() {
  return (
    <section id="programs" className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-px bg-accent/70" />
                <span className="eyebrow">The Pathways</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Three private routes.<br />
                <span className="italic text-muted-foreground">One outcome.</span>
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Over <span className="text-foreground">6,000 alumni</span> have moved through these
              pathways since 2019 — founders, operators, partners, and the quietly relentless.
              Every cohort is curated. Every seat is earned.
            </p>
          </AnimatedSection>
        </div>

        <div className="border-t border-border">
          {tracks.map((track, i) => (
            <AnimatedSection key={track.name} delay={i * 0.08}>
              <motion.a
                href="#insights"
                whileHover="hover"
                className="group block border-b border-border py-10 md:py-14 cursor-pointer"
              >
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-2 md:col-span-1">
                    <span className="eyebrow">{track.index}</span>
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <motion.h3
                      className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight"
                      variants={{ hover: { x: 8 } }}
                      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      {track.name}
                    </motion.h3>
                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      <span>{track.duration}</span>
                      <span className="opacity-40">/</span>
                      <span>{track.cohort}</span>
                      <span className="opacity-40">/</span>
                      <span>{track.seats} seats</span>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <p className="text-muted-foreground leading-relaxed">{track.summary}</p>
                  </div>
                  <div className="col-span-12 md:col-span-1 md:text-right">
                    <motion.span
                      className="inline-block text-foreground/60 group-hover:text-accent transition-colors"
                      variants={{ hover: { x: 6 } }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 max-w-xl">
              <p className="font-serif text-2xl md:text-3xl leading-snug">
                Admissions are private.<br />
                <span className="text-muted-foreground">Decisions are final within 14 days.</span>
              </p>
            </div>
            <div className="flex md:justify-end items-center">
              <a
                href="#insights"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-border hover:border-foreground transition-colors text-sm"
              >
                Begin application
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
