"use client"

import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function BlogPostPage() {
  const post = {
    title: "Building Tone: a web based open source DAW for music producers",
    date: "2025-11-09",
    readTime: "5 min read",
    category: "Announcements",
  }

  return (
    <article className="relative min-h-[90vh] py-24 md:py-32">
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
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Button
              variant="ghost"
              asChild
              className="group/btn p-0 h-auto font-normal text-muted-foreground hover:text-foreground"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 size-4 group-hover/btn:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article card */}
          <div className="group relative border-y border-border bg-[radial-gradient(35%_80%_at_25%_0%,hsl(var(--foreground)/.08),transparent)] hover:bg-accent/80 hover:border-border transition-all duration-300">
            {/* Corner plus icons */}
            <Plus
              size={24}
              strokeWidth={1}
              className="absolute -top-[12.5px] -left-[11.5px] z-10 text-foreground/30"
            />
            <Plus
              size={24}
              strokeWidth={1}
              className="absolute -top-[12.5px] -right-[11.5px] z-10 text-foreground/30"
            />
            <Plus
              size={24}
              strokeWidth={1}
              className="absolute -bottom-[12.5px] -left-[11.5px] z-10 text-foreground/30"
            />
            <Plus
              size={24}
              strokeWidth={1}
              className="absolute -bottom-[12.5px] -right-[11.5px] z-10 text-foreground/30"
            />

            {/* Side border lines */}
            <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l border-border" />
            <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r border-border" />

            <div className="p-8 md:p-12">
              <div className="flex flex-col gap-6">
                {/* Category badge */}
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-primary/20 bg-primary/5 w-fit">
                  <span className="font-mono text-xs font-semibold text-primary tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{post.title}</h1>

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

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Article content */}
                <div className="prose prose-invert max-w-none">
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      We're excited to announce Tone, our new browser-based digital audio workstation that brings professional music production tools to your web browser. Built with modern web technologies, Tone represents a new approach to music production software.
                    </p>

                    <p>
                      Tone is a powerful web-based digital audio workstation inspired by industry leaders like FL Studio and Ableton. Create, produce, and mix music entirely in your browser with professional-grade tools. No installation required, no platform restrictions—just open your browser and start creating.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Web-Based?</h2>

                    <p>
                      The web platform offers unprecedented accessibility and collaboration opportunities. With Tone, you can work on your projects from any device, anywhere in the world. Share your projects instantly, collaborate in real-time, and never worry about compatibility issues.
                    </p>

                    <p>
                      Built on the Web Audio API, Tone leverages the full power of modern browsers to deliver low-latency audio processing and real-time effects. Our canvas-based interface provides a smooth, responsive experience that rivals native applications.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Open Source Philosophy</h2>

                    <p>
                      Tone is completely open source, built by creators for creators. We believe that music production tools should be accessible to everyone, regardless of their financial situation. By making Tone open source, we're empowering the next generation of audio creators.
                    </p>

                    <p>
                      The project is built with Next.js, TypeScript, and the Canvas API, making it easy for developers to contribute and extend. We welcome contributions from the community and are excited to see how developers will enhance and customize Tone for their needs.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What's Next?</h2>

                    <p>
                      We're just getting started. Tone is currently in active development, with new features and improvements being added regularly. We're working on advanced MIDI support, more effects and instruments, and enhanced collaboration features.
                    </p>

                    <p>
                      Join us on this journey as we build the future of music production software. Try Tone today at{" "}
                      <Link href="https://tonedaw.com" target="_blank" className="text-primary hover:underline">
                        tonedaw.com
                      </Link>
                      {" "}and let us know what you think. Your feedback helps shape the direction of the project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

