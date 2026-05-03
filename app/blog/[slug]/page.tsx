import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogSlugs, blogPosts } from '@/lib/blog'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'
import { ScrollTracker } from '@/components/scroll-tracker'
import { EmailCaptureForm } from '@/components/email-capture-form'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return { title: 'Dispatch Not Found — Colloqate' }
  }

  return {
    title: `${post.title} — Colloqate`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) notFound()

  const next = blogPosts.find((p) => p.slug !== post.slug)

  return (
    <main className="min-h-screen bg-background">
      <ScrollTracker />
      <Nav />

      <article className="max-w-3xl mx-auto px-6 lg:px-10 pt-40 pb-24">
        <AnimatedSection>
          <Link
            href="/blog"
            className="text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors mb-12 inline-block"
          >
            ← All dispatches
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-px bg-accent/70" />
            <span className="eyebrow">Dispatch</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-10 text-balance">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-12">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="opacity-40">/</span>
            <span>{post.readTime}</span>
          </div>

          <p className="text-xl md:text-2xl text-foreground font-serif leading-snug mb-12 text-balance">
            {post.excerpt}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="hairline mb-12" />
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-20 p-8 lg:p-10 rounded-2xl border border-border bg-card">
            <p className="eyebrow mb-4">Continue reading</p>
            <p className="font-serif text-2xl md:text-3xl mb-6 leading-tight">
              Want dispatches like this in your inbox?
            </p>
            <EmailCaptureForm location="blog_post" buttonLabel="Get Exclusive Insights" />
          </div>
        </AnimatedSection>

        {next && (
          <AnimatedSection delay={0.4}>
            <Link
              href={`/blog/${next.slug}`}
              className="group mt-12 flex items-center justify-between gap-6 py-6 border-t border-border"
            >
              <div>
                <p className="eyebrow mb-2">Next dispatch</p>
                <p className="font-serif text-xl md:text-2xl leading-tight">{next.title}</p>
              </div>
              <span className="text-foreground/60 group-hover:text-accent transition-colors text-2xl">→</span>
            </Link>
          </AnimatedSection>
        )}
      </article>

      <Footer />
    </main>
  )
}
