'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BlogPost } from '@/lib/blog'
import { trackBlogClick } from '@/lib/analytics'

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      onClick={() => trackBlogClick(post.slug, post.title)}
      className="group block"
    >
      <motion.article
        whileHover="hover"
        className="grid grid-cols-12 gap-6 py-10 border-b border-border"
      >
        <div className="col-span-12 md:col-span-1">
          <span className="eyebrow">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="col-span-12 md:col-span-7">
          <motion.h2
            className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1] text-balance"
            variants={{ hover: { x: 6 } }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {post.title}
          </motion.h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
            {post.excerpt}
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right md:pl-6">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </p>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-2">
            {post.readTime}
          </p>
          <motion.span
            className="inline-block mt-6 text-foreground/60 group-hover:text-accent transition-colors"
            variants={{ hover: { x: 6 } }}
          >
            Read dispatch →
          </motion.span>
        </div>
      </motion.article>
    </Link>
  )
}
