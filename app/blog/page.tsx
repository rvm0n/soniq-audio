import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogPage } from "@/components/blog"

export default function Blog() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <BlogPage />
      <Footer />
    </div>
  )
}

