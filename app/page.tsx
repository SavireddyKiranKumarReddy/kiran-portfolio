import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Achievements from "@/components/achievements"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection animation="fade-in" delay={800}>
          <div className="flex justify-center my-8">
            <Link href="#about" className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-purple-500" />
            </Link>
          </div>
        </AnimatedSection>
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
