"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Work() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useI18n()

  const caseStudies = [
    {
      title: t("work.inventory"),
      industry: t("work.retail"),
      metric: "+ Control",
      image: "/work/system.png",
      featured: true,
    },
    {
      title: t("work.quote"),
      industry: t("work.retail"),
      metric: "+32% leads",
      image: "/work/system2.png",
    },
    {
      title: t("work.dental"),
      industry: t("work.retail"),
      metric: "2x Optimization",
      image: "/work/system3.png",
    },
  
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      const bg = sectionRef.current.querySelector(".parallax-bg") as HTMLElement
      if (bg) {
        bg.style.transform = `translateY(${scrollProgress * 50}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-ring/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t("work.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("work.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Case Study */}
          <Card className="reveal md:col-span-2 lg:row-span-2 group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-ring/50 transition-all duration-300 !p-0 !gap-0">
            <div className="relative h-64 md:h-full min-h-[400px] overflow-hidden w-full">
              <Image
                src={caseStudies[0].image || "/placeholder.svg"}
                alt={caseStudies[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <Badge variant="secondary" className="mb-3 rounded-full">
                  {caseStudies[0].industry}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{caseStudies[0].title}</h3>
                <p className="text-accent text-lg font-semibold">{caseStudies[0].metric}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </Card>

          {/* Other Case Studies */}
          {caseStudies.slice(1).map((study, index) => (
            <Card
              key={index}
              className="reveal group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-ring/50 transition-all duration-300 !p-0 !gap-0"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden w-full">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <Badge variant="secondary" className="mb-2 rounded-full text-xs">
                    {study.industry}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-1">{study.title}</h3>
                  <p className="text-accent text-sm font-medium">{study.metric}</p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
