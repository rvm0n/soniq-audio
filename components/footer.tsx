import Link from "next/link"
import { Github } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border mt-auto">
      <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-border/30" />
      <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-border/30" />

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative size-14">
              <Image
                src="/soniqaudio-logo-white.png"
                alt="SoniqAudio"
                width={56}
                height={56}
                className="rounded-lg block dark:hidden"
              />
              <Image
                src="/soniqaudio-logo.jpg"
                alt="SoniqAudio"
                width={56}
                height={56}
                className="rounded-lg hidden dark:block"
              />
            </div>
            <div className="h-4 w-px bg-border" />
            <p className="text-xs text-muted-foreground font-mono">© {currentYear} · SONIQAUDIO</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              BLOG
            </Link>
            <div className="h-4 w-px bg-border" />
            <Link
              href="https://github.com/soniqaudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </Link>
            <div className="h-4 w-px bg-border" />
            <Link
              href="https://discord.gg/Y62FaSMP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Discord"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </Link>
            <div className="h-4 w-px bg-border" />
            <Link
              href="https://x.com/soniqaudio_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6 opacity-40">
          <div className="h-px w-16 bg-foreground" />
          <div className="h-8 w-px border-l border-dashed border-foreground" />
          <div className="h-px w-16 bg-foreground" />
        </div>

        <div className="text-center mt-4">
          <p className="text-xs text-muted-foreground font-mono">
            built by{" "}
            <Link
              href="https://x.com/rvm0n_"
              target="_blank"
              className="text-foreground hover:text-primary transition-colors"
            >
              @rvm0n_
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
