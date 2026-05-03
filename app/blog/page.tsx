import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { BlogCard } from '@/components/blog-card'
import { AnimatedSection } from '@/components/animated-section'
import { ScrollTracker } from '@/components/scroll-tracker'

export const metadata: Metadata = {
  title: 'Dispatches — Colloqate',
  description:
    'Private dispatches on direction, time, and the cost of standing still. Read by partners, founders and operators.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollTracker />
      <Nav />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-40 pb-32">
        <AnimatedSection>
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors mb-12 inline-block"
          >
            ← Return
          </Link>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-px bg-accent/70" />
            <span className="eyebrow">Dispatches</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-8 text-balance">
            Notes from inside<br />
            <span className="italic text-muted-foreground">a private institute.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Short, deliberate writing on direction, time and the quiet difference between
            knowing and doing. We do not publish often — only when there is something worth saying.
          </p>
        </AnimatedSection>

        <div className="mt-20 border-t border-border">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <BlogCard post={post} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
