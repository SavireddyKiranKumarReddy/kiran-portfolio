"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { type ReactNode, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-in" | "slide-up" | "slide-right" | "slide-left"
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  rootMargin = "-50px",
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold, rootMargin })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isIntersecting, hasAnimated])

  const getAnimationClass = () => {
    if (!hasAnimated) {
      switch (animation) {
        case "fade-in":
          return "opacity-0"
        case "slide-up":
          return "opacity-0 translate-y-10"
        case "slide-right":
          return "opacity-0 -translate-x-10"
        case "slide-left":
          return "opacity-0 translate-x-10"
        default:
          return "opacity-0"
      }
    }
    return "opacity-100 translate-y-0 translate-x-0"
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(className, getAnimationClass(), "transition-all duration-1000", hasAnimated ? "" : "transform")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
