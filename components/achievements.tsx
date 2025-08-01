"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Target } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const Achievements = () => {
  const achievements = [
    {
      title: "Competition Winner",
      description: "Winner in multiple Paper Presentations and Project Expo events, both in and outside college.",
      icon: <Trophy className="h-6 w-6" />,
    },
    {
      title: "Hackathon Participant",
      description: "Active participant in Hackathons and CTFs, with strong focus on cybersecurity.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Security Challenges",
      description:
        "Completed TryHackMe challenges, enhancing offensive security skills and networking expertise for Red Team simulations.",
      icon: <Target className="h-6 w-6" />,
    },
  ]

  return (
    <section id="achievements" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <AnimatedSection animation="slide-up">
          <h2 className="section-title">Achievements</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={100 * index}>
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden card-hover h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="p-3 rounded-full bg-purple-500/20 text-purple-400 w-fit mb-4">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{achievement.title}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
