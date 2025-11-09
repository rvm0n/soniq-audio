"use client"

import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@/components/ui/empty"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "introducing-tone-daw",
    title: "Building Tone: a web based open source DAW for music producers",
    excerpt: "We're excited to announce Tone, our new browser-based digital audio workstation that brings professional music production tools to your web browser.",
    date: "2025-11-09",
    readTime: "5 min read",
    category: "Announcements",
  },
]

export function BlogPage() {
  return (
    <section className="relative min-h-[90vh] py-24 md:py-32">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--color-border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, oklch(0.5 0.08 240) 0%, transparent 70%)",
            opacity: 0.05,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/30 mb-6">
            <div className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs tracking-wider text-muted-foreground">BLOG</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Latest Updates</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Blog posts and updates on audio, music, development and AI. 
          </p>
        </div>

        {/* Blog posts */}
        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group relative border-y border-border bg-[radial-gradient(35%_80%_at_25%_0%,hsl(var(--foreground)/.08),transparent)] hover:bg-accent/80 hover:border-border transition-all duration-300"
            >
              {/* Corner plus icons */}
              <div className="absolute -top-[12.5px] -left-[11.5px] w-6 h-6 flex items-center justify-center text-foreground/30">
                <div className="w-px h-6 bg-border/30" />
                <div className="w-6 h-px bg-border/30 absolute" />
              </div>
              <div className="absolute -top-[12.5px] -right-[11.5px] w-6 h-6 flex items-center justify-center text-foreground/30">
                <div className="w-px h-6 bg-border/30" />
                <div className="w-6 h-px bg-border/30 absolute" />
              </div>
              <div className="absolute -bottom-[12.5px] -left-[11.5px] w-6 h-6 flex items-center justify-center text-foreground/30">
                <div className="w-px h-6 bg-border/30" />
                <div className="w-6 h-px bg-border/30 absolute" />
              </div>
              <div className="absolute -bottom-[12.5px] -right-[11.5px] w-6 h-6 flex items-center justify-center text-foreground/30">
                <div className="w-px h-6 bg-border/30" />
                <div className="w-6 h-px bg-border/30 absolute" />
              </div>

              {/* Side border lines */}
              <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l border-border" />
              <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r border-border" />

              <div className="p-8 md:p-12">
                <div className="flex flex-col gap-4">
                  {/* Category badge */}
                  <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-primary/20 bg-primary/5 w-fit">
                    <span className="font-mono text-xs font-semibold text-primary tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                  {/* Read more link */}
                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      asChild
                      className="group/btn p-0 h-auto font-normal text-muted-foreground hover:text-foreground"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read more
                        <ArrowRight className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state for when there are no posts */}
        {blogPosts.length === 0 && (
          <div className="flex items-center justify-center min-h-[400px]">
            <Empty className="max-w-md">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Calendar className="size-12 text-muted-foreground" />
                </EmptyMedia>
                <EmptyTitle>No posts yet</EmptyTitle>
                <EmptyDescription>
                  Check back soon for updates and announcements from the SoniqAudio team.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        )}
      </div>
    </section>
  )
}

