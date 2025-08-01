"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Search, BotIcon as Robot, Database } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

const Projects = () => {
  const projects = [
    {
      title: "Assistive Workmate - AI powered Automation Software",
      description:
        "Designed and developed an AI assistant capable of executing system-level tasks like opening apps, managing files, sending messages, and troubleshooting. Enabled hands-free productivity through support for both voice and text commands. Open-source and cross-platform (PC, mobile, tablet), offering a cost-effective, scalable automation solution.",
      role: "Solo Developer & Idea Owner",
      icon: <Robot className="h-8 w-8" />,
      tags: ["AI", "Automation", "Python", "Selenium", "Gemini API", "MVP"],
      link: "https://eloquent-praline-111df7.netlify.app/",
      github: "https://github.com/SavireddyKiranKumarReddy/P2-AssistiveWorkmate",
      client: "Open Source",
    },
    {
      title: "Social Media Scraping Tool (ASTRA)",
      description:
        "Collaborated in a national-level hackathon to build ASTRA, a social media scraping solution for the NIA. Designed to identify and flag suspicious accounts including scammers, threat actors, and cybercriminals across platforms. Utilized automation tools for real-time data extraction and report generation. Delivered a user-friendly interface requiring minimal technical knowledge.",
      role: "Testing & Troubleshooting - Implemented accuracy level by 70%",
      icon: <Search className="h-8 w-8" />,
      tags: ["Automation", "Data Extraction", "Threat Detection", "Smart India Hackathon"],
      link: "#",
      github: "https://github.com/DeezSec/Astra",
      client: "National Investigation Agency (NIA)",
    },
    {
      title: "Quick Scrape – One Step solution to latest Updates",
      description:
        "Developed a web application that curates domain-specific updates for students, researchers, and tech professionals. Solves the problem of information overload by automatically fetching and organizing high-quality, relevant content from various online sources. Built with a scalable architecture, offering category-wise filtering and personalized news aggregation.",
      role: "Team Lead & Full-stack Implementation",
      icon: <Database className="h-8 w-8" />,
      tags: ["Web Application", "Content Curation", "Information Management", "MVP"],
      link: "https://sparkly-gecko-4d0e80.netlify.app/",
      github: "https://github.com/SavireddyKiranKumarReddy/P1-QuickScrape",
      client: "Self-initiated",
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <AnimatedSection animation="slide-up">
          <h2 className="section-title">My Projects</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 150} className="h-full flex flex-col">
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden group transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 h-full flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <CardHeader className="relative">
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-gray-700/70 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors duration-300 pr-12">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">Client: {project.client}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <p className="text-gray-300">{project.description}</p>
                    </div>

                    <div className="mt-auto">
                      <p className="text-gray-400 mb-4">
                        <span className="font-semibold text-purple-400">My Role:</span> {project.role}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="bg-gray-700/50 text-gray-300 border-gray-600 hover:bg-purple-500/20 hover:text-purple-300 transition-colors duration-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between border-t border-gray-700/50 pt-4 mt-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-purple-400 hover:bg-gray-700/50"
                    asChild
                  >
                    <Link href={project.github} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-purple-400 hover:bg-gray-700/50"
                    asChild
                  >
                    <Link href={project.link} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
