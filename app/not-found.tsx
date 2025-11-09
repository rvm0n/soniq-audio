import { NotFoundPage } from "@/components/ui/not-found-page"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <NotFoundPage />
      <Footer />
    </div>
  )
}

