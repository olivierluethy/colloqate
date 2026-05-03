'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from './animated-section'
import { trackButtonClick } from '@/lib/analytics'

const events = [
  {
    city: 'Miami',
    country: 'United States',
    date: 'May 22 — 25, 2026',
    title: 'The Capital Summit',
    description:
      'Three days behind closed doors with operators, family offices and category-defining founders. Held at a private estate on Star Island.',
    seats: '60 invited',
  },
  {
    city: 'Hawaii',
    country: 'Big Island',
    date: 'August 14 — 19, 2026',
    title: 'The Pacific Residency',
    description:
      'A six-day decompressed intensive at a private oceanfront compound. Strategy by morning, ocean by afternoon, fireside dialogue by night.',
    seats: '40 invited',
  },
  {
    city: 'Cape Town',
    country: 'South Africa',
    date: 'November 7 — 11, 2026',
    title: 'The Atlantic Council',
    description:
      'Five days of high-trust roundtables on the Cape. Curated cohorts, off-record sessions and access to founders building from the global south.',
    seats: '50 invited',
  },
]

export function EventsSection() {
  return (
    <section id="events" className="relative py-32 md:py-40 bg-card overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-px bg-accent/70" />
                <span className="eyebrow">Global Gatherings · 2026</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Three rooms.<br />
                <span className="italic text-muted-foreground">Three continents.</span><br />
                One community.
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Our gatherings are not conferences. There are no stages, no sponsors, no recordings.
              Attendance is reserved for members and a small number of invited applicants —
              the rooms most of our alumni cite as the most consequential of their year.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, i) => (
            <AnimatedSection key={event.city} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6, borderColor: 'var(--accent)' }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="relative h-full p-8 lg:p-10 rounded-2xl border border-border bg-background/60 backdrop-blur-sm flex flex-col"
              >
                <div className="flex items-start justify-between mb-12">
                  <div>
                    <p className="font-serif text-3xl md:text-4xl tracking-tight">{event.city}</p>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-2">
                      {event.country}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-accent border border-accent/40 rounded-full px-3 py-1">
                    {event.seats}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">
                    {event.date}
                  </p>
                  <h3 className="font-serif text-xl mb-4">{event.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>

                <div className="mt-10 pt-6 border-t border-border flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">By application</span>
                  <span className="text-foreground/70 group-hover:text-accent">→</span>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 lg:p-10 rounded-2xl border border-border bg-background/40">
            <div>
              <p className="font-serif text-xl md:text-2xl">
                Reserve your name on the next gathering list.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Applications close 90 days before each event. Members receive priority.
              </p>
            </div>
            <motion.a
              href="#insights"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => trackButtonClick('events_request_invitation')}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Request your invitation
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
