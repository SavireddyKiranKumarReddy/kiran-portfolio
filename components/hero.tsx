"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer | Red Teamer | B.Tech - Cybersecurity"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container-custom z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
            <span className="gradient-text">KIRAN KUMAR REDDY SAVIREDDY</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 h-8 animate-slide-up animation-delay-200">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mb-8 text-lg animate-slide-up animation-delay-300">
            Building real-world tools for threat detection and productivity automation. Passionate about securing
            digital ecosystems and simplifying complex workflows using AI-powered systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up animation-delay-400">
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-white"
              size="lg"
              asChild
            >
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
              asChild
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="flex space-x-6 animate-slide-up animation-delay-500">
            <Link
              href="https://github.com/SavireddyKiranKumarReddy"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Github className="h-6 w-6" />
              <span className="text-sm">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/kiran-kumar-reddy-savireddy/"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Linkedin className="h-6 w-6" />
              <span className="text-sm">LinkedIn</span>
            </Link>
            <Link
              href="mailto:kiransavireddy@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Mail className="h-6 w-6" />
              <span className="text-sm">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
