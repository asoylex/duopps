"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Paintbrush, Code, Rocket } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useI18n()

  const steps = [
    {
      icon: Search,
      title: t("process.discover"),
      description: t("process.discover.desc"),
      deliverables: [t("process.research"), t("process.competitive"), t("process.roadmap")],
    },
    {
      icon: Paintbrush,
      title: t("process.design"),
      description: t("process.design.desc"),
      deliverables: [t("process.wireframes"), t("process.mockups"), t("process.prototype")],
    },
    {
      icon: Code,
      title: t("process.build"),
      description: t("process.build.desc"),
      deliverables: [t("process.responsive"), t("process.cms"), t("process.qa")],
    },
    {
      icon: Rocket,
      title: t("process.launch"),
      description: t("process.launch.desc"),
      deliverables: [t("process.deployment"), t("process.analytics"), t("process.support")],
    },
  ]

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
    <section id="process" ref={sectionRef} className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t("process.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("process.subtitle")}</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="reveal relative" style={{ transitionDelay: `${index * 150}ms` }}>
                {/* Step Number */}
                <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-accent items-center justify-center text-accent font-bold z-10">
                  {index + 1}
                </div>

                <Card className="md:mt-16 border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <step.icon className="w-6 h-6 text-muted-foreground" />
                    </div>

                    <div className="hidden md:block mb-4">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{step.description}</p>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {t("process.deliverables")}
                      </p>
                      <ul className="space-y-1">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="text-sm flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
