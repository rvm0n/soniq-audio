import { Button } from "@/components/ui/button"
import { Plus, ArrowUpRight, Star } from "lucide-react"
import Link from "next/link"

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/30 mb-6">
            <div className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs tracking-wider text-muted-foreground">PROJECTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Open source audio tools</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional-grade software built by creators, for creators
          </p>
        </div>

        {/* Project card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Card content */}
            <div className="relative border-y border-border bg-[radial-gradient(35%_80%_at_25%_0%,hsl(var(--foreground)/.08),transparent)] hover:bg-accent/80 hover:border-border transition-all duration-300">
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

              {/* Dashed center line */}
              <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed border-border/50" />

              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    {/* Project badge */}
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-primary/20 bg-primary/5 mb-4">
                      <span className="font-mono text-xs font-semibold text-primary tracking-wider">DAW</span>
                    </div>

                    {/* Project name */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">
                      Tone
                    </h3>

                    {/* Project subtitle */}
                    <Link href="https://tonedaw.com" target="_blank" className="font-mono text-sm text-muted-foreground mb-4 tracking-wide hover:text-foreground transition-colors cursor-pointer inline-block">
                      tonedaw.com
                    </Link>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      A powerful web-based digital audio workstation inspired by industry leaders like FL Studio and
                      Ableton. Create, produce, and mix music entirely in your browser with professional-grade tools.
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {["Web Audio API", "Next.js", "TypeScript", "Canvas API"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono border border-border rounded-full bg-muted/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <Button className="group bg-foreground text-background hover:bg-foreground/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
                        Open Tone
                        <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Button>
                      <Link href="https://github.com/soniqaudio/tonedaw" target="_blank">
                        <Button variant="outline" className="border-border bg-background hover:bg-accent hover:text-accent-foreground">
                          <Star className="mr-2 size-4" />
                          Star on GitHub
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
