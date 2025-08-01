"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Calendar, GraduationCap, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <AnimatedSection animation="slide-up">
          <h2 className="section-title">About Me</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedSection animation="slide-right" delay={100}>
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden card-hover h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Professional Summary</h3>
                <p className="text-gray-300 leading-relaxed">
                  Aspiring Cybersecurity professional with hands-on experience in ethical hacking, automation, and web
                  development. Skilled in building real-world tools for threat detection and productivity automation.
                  Passionate about securing digital ecosystems and simplifying complex workflows using AI-powered
                  systems. Seeking to contribute my technical skills and creative mindset to impactful security
                  projects.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={200}>
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden card-hover h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Contact Information</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-gray-300">+91 76720 10211</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-gray-300">kiransavireddy@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-gray-300">
                        Gangudupalli(V), Dornakambala(P), Chandragiri(M), Tirupati(dist), Andhrapradesh(state), India -
                        517102
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Github className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                    <div>
                      <Link
                        href="https://github.com/SavireddyKiranKumarReddy"
                        target="_blank"
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                      >
                        GitHub
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Linkedin className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                    <div>
                      <Link
                        href="https://www.linkedin.com/in/kiran-kumar-reddy-savireddy/"
                        target="_blank"
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                      >
                        LinkedIn
                      </Link>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="slide-up" delay={300}>
          <h3 className="text-2xl font-bold mt-12 mb-6 text-center text-purple-400">Education</h3>
        </AnimatedSection>

        <div className="space-y-6 max-w-3xl mx-auto">
          <AnimatedSection animation="slide-up" delay={400}>
            <EducationItem
              degree="Bachelor of Technology (B. Tech) in Cybersecurity"
              institution="Madanapalle Institute of Technology and Science"
              location="Madanapalle"
              year="2027"
            />
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={500}>
            <EducationItem
              degree="Intermediate (MPC)"
              institution="SR Junior College"
              location="Tirupati"
              year="9/10"
            />
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={600}>
            <EducationItem
              degree="Primary Education"
              institution="Rami Reddy Rayalaseema High School"
              location="Tirupati"
              year="10/10"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

interface EducationItemProps {
  degree: string
  institution: string
  location: string
  year: string
}

const EducationItem = ({ degree, institution, location, year }: EducationItemProps) => {
  return (
    <Card className="bg-gray-800/50 border-gray-700 overflow-hidden transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-purple-500/10">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start">
            <GraduationCap className="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-semibold text-white">{degree}</h4>
              <p className="text-gray-300">
                {institution} | {location}
              </p>
            </div>
          </div>
          <div className="flex items-center md:ml-4">
            <Calendar className="h-5 w-5 text-purple-500 mr-2" />
            <span className="text-gray-300">{year}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default About
