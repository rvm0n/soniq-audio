import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoniqAudio - open source apps for music producers",
  description:
    "Open source audio production tools built by creators, for creators. Professional-grade software free forever. Building Tone, a web-based DAW for music producers.",
  keywords: [
    "audio production",
    "music production",
    "DAW",
    "digital audio workstation",
    "open source",
    "web audio",
    "music software",
    "Tone DAW",
    "browser DAW",
    "music creation",
  ],
  authors: [{ name: "SoniqAudio" }],
  creator: "SoniqAudio",
  openGraph: {
    title: "SoniqAudio - open source apps for music producers",
    description:
      "Open source audio production tools built by creators, for creators. Professional-grade software free forever.",
    type: "website",
    siteName: "SoniqAudio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SoniqAudio - Open source apps for music producers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoniqAudio - open source apps for music producers",
    description:
      "Open source audio production tools built by creators, for creators. Professional-grade software free forever.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/soniqaudio-logo.jpg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
