"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useI18n()

  const oneTimePlans = [
    {
      name: t("pricing.starter.name"),
      price: t("pricing.starter.price"),
      description: t("pricing.starter.desc"),
      timeline: t("pricing.starter.timeline"),
      features: [
        t("pricing.feature.pages5"),
        t("pricing.feature.responsive"),
        t("pricing.feature.contactForm"),
        t("pricing.feature.basicSeo"),
        t("pricing.feature.support1"),
      ],
    },
    {
      name: t("pricing.growth.name"),
      price: t("pricing.growth.price"),
      description: t("pricing.growth.desc"),
      timeline: t("pricing.growth.timeline"),
      features: [
        t("pricing.feature.pages15"),
        t("pricing.feature.animations"),
        t("pricing.feature.cmsIntegration"),
        t("pricing.feature.advancedSeo"),
        t("pricing.feature.analyticsDashboard"),
        t("pricing.feature.support3"),
      ],
      popular: true,
    },
    {
      name: t("pricing.webapp.name"),
      price: t("pricing.webapp.price"),
      description: t("pricing.webapp.desc"),
      timeline: t("pricing.webapp.timeline"),
      features: [
        t("pricing.feature.customFunctionality"),
        t("pricing.feature.userAuth"),
        t("pricing.feature.dbIntegration"),
        t("pricing.feature.apiDev"),
        t("pricing.feature.adminDashboard"),
        t("pricing.feature.support6"),
      ],
    },
  ]

  const monthlyPlans = [
    {
      name: t("pricing.starterMonthly.name"),
      price: t("pricing.starterMonthly.price"),
      description: t("pricing.starterMonthly.desc"),
      timeline: t("pricing.ongoing"),
      features: [
        t("pricing.feature.monthlyUpdates"),
        t("pricing.feature.perfMonitoring"),
        t("pricing.feature.securityPatches"),
        t("pricing.feature.contentUpdates"),
        t("pricing.feature.prioritySupport"),
      ],
    },
    {
      name: t("pricing.growthMonthly.name"),
      price: t("pricing.growthMonthly.price"),
      description: t("pricing.growthMonthly.desc"),
      timeline: t("pricing.ongoing"),
      features: [
        t("pricing.feature.everythingStarter"),
        t("pricing.feature.abTesting"),
        t("pricing.feature.conversionOpt"),
        t("pricing.feature.monthlyReporting"),
        t("pricing.feature.strategyCalls"),
        t("pricing.feature.adManagement"),
      ],
      popular: true,
    },
    {
      name: t("pricing.enterprise.name"),
      price: t("pricing.enterprise.price"),
      description: t("pricing.enterprise.desc"),
      timeline: t("pricing.ongoing"),
      features: [
        t("pricing.feature.everythingGrowth"),
        t("pricing.feature.dedicatedTeam"),
        t("pricing.feature.support247"),
        t("pricing.feature.customIntegrations"),
        t("pricing.feature.slaGuarantee"),
        t("pricing.feature.onsiteWorkshops"),
      ],
    },
  ]

  const plans = isMonthly ? monthlyPlans : oneTimePlans

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
    <section id="pricing" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t("pricing.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{t("pricing.subtitle")}</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isMonthly ? "text-foreground font-medium" : "text-muted-foreground"}`}>
              {t("pricing.oneTime")}
            </span>
            <Switch checked={isMonthly} onCheckedChange={setIsMonthly} />
            <span className={`text-sm ${isMonthly ? "text-foreground font-medium" : "text-muted-foreground"}`}>
              {t("pricing.monthly")}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`reveal relative border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 ${
                plan.popular ? "border-accent ring-1 ring-accent" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent text-accent-foreground">
                  {t("pricing.mostPopular")}
                </Badge>
              )}

              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {t("pricing.timeline")}: {plan.timeline}
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className={`w-full rounded-full ${plan.popular ? "" : "variant-outline"}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="#contact">
                    {t("pricing.getStarted")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Custom CTA */}
        <div className="mt-12 text-center reveal" style={{ transitionDelay: "400ms" }}>
          <p className="text-muted-foreground mb-4">{t("pricing.customCta")}</p>
          <Button asChild variant="outline" className="rounded-full bg-transparent">
            <Link href="#contact">{t("pricing.customCtaButton")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
