"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useI18n()

  const services = [
    { id: "website", label: t("contact.service.website") },
    { id: "webapp", label: t("contact.service.webapp") },
    { id: "ecommerce", label: t("contact.service.ecommerce") },
    { id: "automation", label: t("contact.service.automation") },
    { id: "branding", label: t("contact.service.branding") },
    { id: "ads", label: t("contact.service.ads") },
  ]

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert(t("contact.thankYou"))
  }

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
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="reveal lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.name")} *</Label>
                    <Input id="name" placeholder={t("contact.namePlaceholder")} required className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.email")} *</Label>
                    <Input id="email" type="email" placeholder="you@company.com" required className="rounded-xl" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">{t("contact.company")}</Label>
                    <Input id="company" placeholder={t("contact.companyPlaceholder")} className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">{t("contact.budget")}</Label>
                    <Select>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder={t("contact.selectBudget")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1k-5k">{t("contact.budget1")}</SelectItem>
                        <SelectItem value="5k-10k">{t("contact.budget2")}</SelectItem>
                        <SelectItem value="10k-25k">{t("contact.budget3")}</SelectItem>
                        <SelectItem value="25k+">{t("contact.budget4")}</SelectItem>
                        <SelectItem value="monthly">{t("contact.budgetMonthly")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>{t("contact.servicesInterested")}</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={service.id}
                          checked={selectedServices.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                        />
                        <Label htmlFor={service.id} className="text-sm cursor-pointer">
                          {service.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.message")} *</Label>
                  <Textarea
                    id="message"
                    placeholder={t("contact.messagePlaceholder")}
                    rows={4}
                    required
                    className="rounded-xl resize-none"
                  />
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="text-xs text-muted-foreground">{t("contact.recaptcha")}</div>

                <Button type="submit" size="lg" className="w-full sm:w-auto rounded-full px-8" disabled={isSubmitting}>
                  {isSubmitting ? (
                    t("contact.sending")
                  ) : (
                    <>
                      {t("contact.send")}
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="reveal space-y-6" style={{ transitionDelay: "200ms" }}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.responseTime")}</p>
                    <p className="text-sm text-muted-foreground">{t("contact.within24")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+502 0000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">hello@duopps.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{t("contact.location")}</p>
                    <p className="text-sm text-muted-foreground">Guatemala</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
