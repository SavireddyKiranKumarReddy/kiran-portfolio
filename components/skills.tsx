"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, MessageSquare, Award, Shield, Terminal, GitBranch, Globe } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

const Skills = () => {
  const [activeTab, setActiveTab] = useState<"technical" | "soft" | "certifications">("technical")

  const technicalSkills = [
    {
      category: "Programming & Scripting",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "C", "C++", "JavaScript", "Bash"],
    },
    {
      category: "Web Technologies",
      icon: <Terminal className="h-5 w-5" />,
      skills: ["HTML", "CSS", "Django", "React", "Node.js", "Tailwind"],
    },
    {
      category: "Cybersecurity",
      icon: <Shield className="h-5 w-5" />,
      skills: ["Red Teaming Fundamentals", "OSINT", "Privilege Escalation", "Automation Scripting"],
    },
    {
      category: "Tools & Frameworks",
      icon: <GitBranch className="h-5 w-5" />,
      skills: ["Git", "Nmap", "Burp Suite", "Selenium", "PyAutoGUI", "Supabase", "Gemini API"],
    },
  ]

  const softSkills = [
    "Effective Communication",
    "Leadership",
    "Critical Thinking",
    "Adaptability",
    "Presentation",
    "Quick Grasping",
    "Team Management",
  ]

  const languages = [
    { name: "English", proficiency: "Proficient" },
    { name: "Telugu", proficiency: "Proficient" },
  ]

  const certifications = [
    {
      name: "CompTIA Security+ (SY0-701)",
      status: "Verified",
      link: "https://www.linkedin.com/posts/kiran-kumar-reddy-savireddy_check-out-this-certificate-i-got-for-comptia-activity-7184165540964311041-0Z0P?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZRRl0BvbXddDNmrIZ4a_gNMAsJcDmLlPQ",
    },
    {
      name: "Google Cloud Cybersecurity Certificate",
      status: "Verified",
      link: "https://www.linkedin.com/posts/kiran-kumar-reddy-savireddy_google-cloud-cybersecurity-certificate-was-activity-7227311315382386688-l6Xj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZRRl0BvbXddDNmrIZ4a_gNMAsJcDmLlPQ",
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      status: "In Progress",
      link: "https://www.linkedin.com/posts/kiran-kumar-reddy-savireddy_nxtgensec-cybersecurity-ethicalhacking-activity-7293211986857705473-vR9c?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZRRl0BvbXddDNmrIZ4a_gNMAsJcDmLlPQ",
    },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <AnimatedSection animation="slide-up">
          <h2 className="section-title">My Skills</h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={100}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab("technical")}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === "technical" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                } transition-colors duration-300`}
              >
                Technical Skills
              </button>
              <button
                onClick={() => setActiveTab("soft")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "soft" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                } transition-colors duration-300`}
              >
                Soft Skills
              </button>
              <button
                onClick={() => setActiveTab("certifications")}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  activeTab === "certifications"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                } transition-colors duration-300`}
              >
                Certifications
              </button>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-8">
          {activeTab === "technical" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={100 + index * 100}>
                  <Card className="bg-gray-800/50 border-gray-700 overflow-hidden card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-purple-500/20 text-purple-400 mr-3">{skillGroup.icon}</div>
                        <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, idx) => (
                          <Badge key={idx} className="bg-gray-700 hover:bg-purple-600 transition-colors duration-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}

          {activeTab === "soft" && (
            <div className="space-y-6">
              <AnimatedSection animation="fade-in">
                <Card className="bg-gray-800/50 border-gray-700 overflow-hidden card-hover max-w-2xl mx-auto">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="p-2 rounded-full bg-purple-500/20 text-purple-400 mr-3">
                        <Brain className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">Soft Skills</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {softSkills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-3 rounded-lg bg-gray-700/50 hover:bg-purple-600/20 transition-colors duration-300"
                        >
                          <MessageSquare className="h-5 w-5 text-purple-400 mr-3" />
                          <span className="text-gray-200">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={200}>
                <Card className="bg-gray-800/50 border-gray-700 overflow-hidden card-hover max-w-2xl mx-auto">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="p-2 rounded-full bg-purple-500/20 text-purple-400 mr-3">
                        <Globe className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">Languages</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {languages.map((language, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-3 rounded-lg bg-gray-700/50 hover:bg-purple-600/20 transition-colors duration-300"
                        >
                          <Globe className="h-5 w-5 text-purple-400 mr-3" />
                          <span className="text-gray-200">
                            {language.name} - {language.proficiency}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          )}

          {activeTab === "certifications" && (
            <AnimatedSection animation="fade-in">
              <div className="max-w-2xl mx-auto">
                <Card className="bg-gray-800/50 border-gray-700 overflow-hidden card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="p-2 rounded-full bg-purple-500/20 text-purple-400 mr-3">
                        <Award className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">Certifications</h3>
                    </div>
                    <div className="space-y-4">
                      {certifications.map((cert, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-lg bg-gray-700/50 hover:bg-purple-600/20 transition-colors duration-300"
                        >
                          <div className="flex justify-between items-center">
                            <h4 className="text-lg font-medium text-white">{cert.name}</h4>
                            <Link href={cert.link} target="_blank">
                              <Badge
                                className={
                                  cert.status === "Verified"
                                    ? "bg-green-600 hover:bg-green-700 cursor-pointer"
                                    : "bg-yellow-600 hover:bg-yellow-700 cursor-pointer"
                                }
                              >
                                {cert.status}
                              </Badge>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills
