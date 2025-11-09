"use client"

import Link from "next/link"
import { Home, Search, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@/components/ui/empty"

export function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <Empty className="max-w-md w-full">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Search className="size-12 text-muted-foreground" />
            </EmptyMedia>
            <EmptyTitle className="text-4xl font-bold">404</EmptyTitle>
            <EmptyDescription className="text-lg">
              Page not found
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <p className="text-muted-foreground text-sm">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full mt-4 justify-center">
              <Button asChild className="group bg-foreground text-background hover:bg-foreground/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
                <Link href="/">
                  <Home className="mr-2 size-4 group-hover:scale-110 transition-transform" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-foreground/20 bg-background hover:bg-foreground hover:text-background dark:border-border dark:bg-input/30 dark:hover:bg-input/50 dark:hover:text-foreground">
                <Link href="/#projects">
                  <ArrowLeft className="mr-2 size-4" />
                  Back to Projects
                </Link>
              </Button>
            </div>
          </EmptyContent>
        </Empty>
      </div>
    </div>
  )
}

