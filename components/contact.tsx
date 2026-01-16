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
import { Turnstile } from "@/components/turnstile"

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useI18n()
  const [captchaToken, setCaptchaToken] = useState<string>("")

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setAlert(null)
    if (!captchaToken) {
      setAlert({ type: "error", message: t("contact.captchaRequired") || "Please complete the captcha." })
      return
    }
    setIsSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      budget: formData.get("budget"),
      services: selectedServices,
      message: formData.get("message"),
      turnstileToken: captchaToken,
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setAlert({ type: "success", message: t("contact.thankYou") })
        form.reset()
        setSelectedServices([])
        setCaptchaToken("")
      } else {
        setAlert({ type: "error", message: t("contact.error") })
      }
    } catch {
      setAlert({ type: "error", message: t("contact.error") })
    }
    setIsSubmitting(false)
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
                    <Input id="name" name="name" placeholder={t("contact.namePlaceholder")} required className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("contact.email")} *</Label>
                    <Input id="email" name="email" type="email" placeholder="you@company.com" required className="rounded-xl" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">{t("contact.company")}</Label>
                    <Input id="company" name="company" placeholder={t("contact.companyPlaceholder")} className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">{t("contact.budget")}</Label>
                    <Select name="budget" onValueChange={value => {
                      const input = document.createElement('input')
                      input.type = 'hidden'
                      input.name = 'budget'
                      input.value = value
                      const form = document.querySelector('form')
                      const old = form?.querySelector('input[name=budget]')
                      if (old) old.remove()
                      form?.appendChild(input)
                    }}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder={t("contact.selectBudget")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1k-5k">{t("contact.budget1")}</SelectItem>
                        <SelectItem value="5k-10k">{t("contact.budget2")}</SelectItem>
                        <SelectItem value="10k-25k">{t("contact.budget3")}</SelectItem>
                        <SelectItem value="25k+">{t("contact.budget4")}</SelectItem>
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
                    name="message"
                    placeholder={t("contact.messagePlaceholder")}
                    rows={4}
                    required
                    className="rounded-xl resize-none"
                  />
                </div>
                {alert && (
                  <div
                    className={`rounded-lg p-4 mb-2 text-sm font-medium border ${alert.type === "success"
                        ? "bg-green-50 text-green-800 border-green-200"
                        : "bg-red-50 text-red-800 border-red-200"
                      }`}
                    role="alert"
                  >
                    {alert.message}
                  </div>
                )}
                {/* Cloudflare Turnstile Captcha */}
                <Turnstile siteKey="0x4AAAAAACMB_hwQ_Ue6W1vs" onVerify={setCaptchaToken} />
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
                    <a 
                      href="https://wa.me/50254088243?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20desarrollo%20web%20y%20aplicaciones."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer underline-offset-4 hover:underline"
                    >
                      +502 5408 - 8243
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">hola@duopps.com</p>
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
