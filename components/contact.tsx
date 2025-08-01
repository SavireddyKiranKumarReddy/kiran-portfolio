"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)

      // Open email client with pre-filled data
      window.open(`mailto:kiransavireddy@gmail.com?subject=${subject}&body=${body}`, "_blank")

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <AnimatedSection animation="slide-up">
          <h2 className="section-title">Get In Touch</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedSection animation="slide-right" delay={100}>
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden card-hover h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-purple-500/20 text-purple-400 mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Phone</h4>
                      <p className="text-gray-300">7672010211</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-purple-500/20 text-purple-400 mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <p className="text-gray-300">kiransavireddy@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-purple-500/20 text-purple-400 mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Location</h4>
                      <p className="text-gray-300">
                        Gangudupalli(V), Dornakambala(P), Chandragiri(M), Tirupati(dist), Andhrapradesh(state), India -
                        517102
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4 text-purple-400">Social Profiles</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/SavireddyKiranKumarReddy"
                    target="_blank"
                    className="p-3 rounded-full bg-gray-700 text-gray-300 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/kiran-kumar-reddy-savireddy/"
                    target="_blank"
                    className="p-3 rounded-full bg-gray-700 text-gray-300 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:kiransavireddy@gmail.com"
                    className="p-3 rounded-full bg-gray-700 text-gray-300 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={200}>
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden card-hover">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Send Me a Message</h3>

                {submitted ? (
                  <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-md mb-4">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-700/50 border-gray-600 focus:border-purple-500 focus:ring-purple-500 text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-700/50 border-gray-600 focus:border-purple-500 focus:ring-purple-500 text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-gray-700/50 border-gray-600 focus:border-purple-500 focus:ring-purple-500 text-white"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-gray-700/50 border-gray-600 focus:border-purple-500 focus:ring-purple-500 text-white min-h-[120px]"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default Contact
