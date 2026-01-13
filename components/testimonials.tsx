"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"

const testimonials = [
	{
		name: "Dr. Ale Moscosofrol",
		role: { en: "Dental Clinic Owner", es: "Propietaria de Clínica Dental" },
		company: "Clínica Dental Modent",
		title: {
			en: "Excellent service and attention.",
			es: "Excelente servicio y atención.",
		},
		content: {
			en: "Duopps developed a custom system adapted to my dental clinic. The attention was excellent and now the appointment process is much more agile.",
			es: "Duopps desarrolló un sistema a la medida adaptado a mi clínica dental. La atención fue excelente y ahora el proceso de citas es mucho más ágil.",
		},
		rating: 5,
	},
	{
		name: "Alberto",
		role: { en: "Business Owner", es: "Propietario de Negocio" },
		company: "Servibandas",
		title: {
			en: "Excellent experience and constant improvements.",
			es: "Excelente experiencia y mejoras constantes.",
		},
		content: {
			en: "I use Duopps' quotation system and they are always improving the program to make it easier to use. Now everything is faster and accessible from any device.",
			es: "Utilizo el sistema de cotizaciones de Duopps y siempre están mejorando el programa para hacerlo más fácil de usar. Ahora todo es más rápido y accesible desde cualquier dispositivo.",
		},
		rating: 5,
	},
	{
		name: "Saul",
		role: { en: "Operations Manager", es: "Gerente de Operaciones" },
		company: "TSG",
		title: {
			en: "Functional and easy-to-use platform.",
			es: "Plataforma funcional y fácil de usar.",
		},
		content: {
			en: "We used to manage everything on paper sheets, but after switching to Duopps' quotations system, we achieved a fast deployment and now our records are much more organized.",
			es: "Antes llevábamos el control en hojas, pero al migrar al sistema de cotizaciones de Duopps logramos un despliegue rápido y ahora tenemos mucho más orden en nuestros registros.",
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
							className="reveal border-border/50 bg-card/50 backdrop-blur-sm h-full"
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<CardContent className="p-6 h-full flex flex-col">
								<div className="flex-grow">
									<p className="text-foreground font-bold mb-2">"{testimonial.title[locale]}"</p>
									<p className="text-muted-foreground leading-relaxed">{testimonial.content[locale]}</p>
								</div>
								<div className="mt-6 pt-4 border-t border-border/20">
									<p className="font-semibold">{testimonial.name}</p>
									<p className="text-sm text-muted-foreground">{testimonial.company}</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
