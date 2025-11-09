import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogPostPage } from "@/components/blog-post"

export default function IntroducingToneDaw() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <BlogPostPage />
      <Footer />
    </div>
  )
}

