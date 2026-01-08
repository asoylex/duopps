"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Smartphone, ShoppingCart, Cog, Palette, Megaphone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useI18n()

  const services = [
    {
      icon: Globe,
      title: t("services.website.title"),
      description: t("services.website.desc"),
      href: "#contact",
    },
    {
      icon: Smartphone,
      title: t("services.webapp.title"),
      description: t("services.webapp.desc"),
      href: "#contact",
    },
    {
      icon: ShoppingCart,
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.desc"),
      href: "#contact",
    },
    {
      icon: Cog,
      title: t("services.automation.title"),
      description: t("services.automation.desc"),
      href: "#contact",
    },
    {
      icon: Palette,
      title: t("services.branding.title"),
      description: t("services.branding.desc"),
      href: "#contact",
    },
    {
      icon: Megaphone,
      title: t("services.ads.title"),
      description: t("services.ads.desc"),
      href: "#contact",
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
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t("services.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="reveal group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-ring/50 transition-all duration-300 glow-effect"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors group/link"
                >
                  {t("services.learnMore")}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
