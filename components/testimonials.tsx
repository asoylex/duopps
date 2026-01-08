"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const testimonials = [
  {
    name: "Maria Garcia",
    role: "CEO",
    company: "TechStartup Inc.",
    content: {
      en: "Duopps transformed our online presence. Our conversions increased by 45% within the first month of launch.",
      es: "Duopps transformó nuestra presencia en línea. Nuestras conversiones aumentaron un 45% en el primer mes del lanzamiento.",
    },
    rating: 5,
  },
  {
    name: "Carlos Rodriguez",
    role: { en: "Marketing Director", es: "Director de Marketing" },
    company: "Growth Co.",
    content: {
      en: "The team's attention to detail and understanding of user experience is exceptional. Highly recommend!",
      es: "La atención al detalle y comprensión de la experiencia del usuario del equipo es excepcional. ¡Muy recomendado!",
    },
    rating: 5,
  },
  {
    name: "Ana Martinez",
    role: { en: "Founder", es: "Fundadora" },
    company: "E-commerce Brand",
    content: {
      en: "They delivered ahead of schedule and the results exceeded our expectations. Our sales doubled.",
      es: "Entregaron antes de lo previsto y los resultados superaron nuestras expectativas. Nuestras ventas se duplicaron.",
    },
    rating: 5,
  },
  {
    name: "Diego Lopez",
    role: { en: "Operations Manager", es: "Gerente de Operaciones" },
    company: "Enterprise Solutions",
    content: {
      en: "The internal system they built saved us 20 hours per week. Best investment we've made.",
      es: "El sistema interno que construyeron nos ahorra 20 horas por semana. La mejor inversión que hemos hecho.",
    },
    rating: 5,
  },
  {
    name: "Sofia Hernandez",
    role: { en: "Creative Director", es: "Directora Creativa" },
    company: "Design Agency",
    content: {
      en: "Beautiful work, fast delivery, and excellent communication throughout the project.",
      es: "Trabajo hermoso, entrega rápida y excelente comunicación durante todo el proyecto.",
    },
    rating: 5,
  },
  {
    name: "Miguel Torres",
    role: { en: "E-commerce Manager", es: "Gerente de E-commerce" },
    company: "Retail Brand",
    content: {
      en: "Our ad campaigns finally started performing after working with Duopps. ROI increased by 3x.",
      es: "Nuestras campañas publicitarias finalmente comenzaron a rendir después de trabajar con Duopps. El ROI aumentó 3x.",
    },
    rating: 5,
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t, locale } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      const bg = sectionRef.current.querySelector(".parallax-bg") as HTMLElement
      if (bg) {
        bg.style.transform = `translateY(${scrollProgress * 30}px)`
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
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-ring/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t("testimonials.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="reveal border-border/50 bg-card/50 backdrop-blur-sm"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content[locale]}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {typeof testimonial.role === "string" ? testimonial.role : testimonial.role[locale]},{" "}
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
