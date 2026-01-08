import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Clients } from "@/components/clients"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Work />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
