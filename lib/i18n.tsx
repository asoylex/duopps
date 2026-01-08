"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Locale = "en" | "es"

type Translations = {
  [key: string]: {
    en: string
    es: string
  }
}

export const translations: Translations = {
  // Navbar
  "nav.services": { en: "Services", es: "Servicios" },
  "nav.work": { en: "Work", es: "Proyectos" },
  "nav.process": { en: "Process", es: "Proceso" },
  "nav.pricing": { en: "Pricing", es: "Precios" },
  "nav.testimonials": { en: "Testimonials", es: "Testimonios" },
  "nav.faq": { en: "FAQ", es: "Preguntas" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  "nav.getQuote": { en: "Get a quote", es: "Cotizar" },

  // Clients
  "clients.trusted": { en: "Trusted by industry leaders", es: "Empresas que confían en nosotros" },
  "clients.headline": { en: "Partnering with ambitious brands", es: "Colaborando con marcas ambiciosas" },
  "clients.projects": { en: "Projects delivered", es: "Proyectos entregados" },
  "clients.satisfaction": { en: "Client satisfaction", es: "Satisfacción del cliente" },
  "clients.years": { en: "Years of experience", es: "Años de experiencia" },
  "clients.cta": {
    en: "Join our growing list of satisfied clients",
    es: "Únete a nuestra creciente lista de clientes satisfechos",
  },

  // Hero
  "hero.phrase1": { en: "Websites that convert", es: "Sitios que convierten" },
  "hero.phrase2": { en: "Systems that scale", es: "Sistemas que escalan" },
  "hero.phrase3": { en: "Ads that perform", es: "Anuncios que funcionan" },
  "hero.phrase4": { en: "Design that feels premium", es: "Diseño premium" },
  "hero.weBuild": { en: "We build ", es: "Creamos " },
  "hero.badgeFast": { en: "Fast delivery", es: "Entrega rápida" },
  "hero.badgeConversion": { en: "Conversion-first", es: "Enfoque en conversión" },
  "hero.badgeSupport": { en: "Support & iteration", es: "Soporte continuo" },
  "hero.subheadline": {
    en: "Your digital partner for growth. We craft premium websites, powerful systems, and high-performing ads that turn visitors into customers.",
    es: "Tu aliado digital para crecer. Creamos sitios web premium, sistemas potentes y anuncios de alto rendimiento que convierten visitantes en clientes.",
  },
  "hero.bookCall": { en: "Book a call", es: "Agendar llamada" },
  "hero.seeWork": { en: "See work", es: "Ver proyectos" },

  // Services
  "services.title": { en: "What we do", es: "Lo que hacemos" },
  "services.subtitle": {
    en: "End-to-end digital solutions to help your business grow online",
    es: "Soluciones digitales integrales para hacer crecer tu negocio en línea",
  },
  "services.learnMore": { en: "Learn more", es: "Saber más" },
  "services.website.title": { en: "Website Development", es: "Desarrollo Web" },
  "services.website.desc": {
    en: "Custom, responsive websites built for performance and conversions. From landing pages to complex multi-page sites.",
    es: "Sitios web personalizados y responsive, optimizados para rendimiento y conversiones. Desde landing pages hasta sitios complejos.",
  },
  "services.webapp.title": { en: "Web Apps / Internal Systems", es: "Apps Web / Sistemas Internos" },
  "services.webapp.desc": {
    en: "Scalable web applications and internal tools that streamline your operations and boost productivity.",
    es: "Aplicaciones web escalables y herramientas internas que optimizan tus operaciones y aumentan la productividad.",
  },
  "services.ecommerce.title": { en: "E-commerce", es: "E-commerce" },
  "services.ecommerce.desc": {
    en: "Online stores that sell. Beautiful product showcases with seamless checkout experiences.",
    es: "Tiendas en línea que venden. Hermosas vitrinas de productos con experiencias de compra fluidas.",
  },
  "services.automation.title": { en: "Automation & Integrations", es: "Automatización e Integraciones" },
  "services.automation.desc": {
    en: "Connect your tools and automate repetitive tasks. Save time and reduce human error.",
    es: "Conecta tus herramientas y automatiza tareas repetitivas. Ahorra tiempo y reduce errores.",
  },
  "services.branding.title": { en: "Branding & Creative", es: "Branding y Creatividad" },
  "services.branding.desc": {
    en: "Visual identities that stand out. Logos, brand guidelines, and creative assets that tell your story.",
    es: "Identidades visuales que destacan. Logos, guías de marca y activos creativos que cuentan tu historia.",
  },
  "services.ads.title": { en: "Paid Ads", es: "Publicidad Pagada" },
  "services.ads.desc": {
    en: "Performance marketing on Meta, Google, and TikTok. Data-driven campaigns that deliver ROI.",
    es: "Marketing de rendimiento en Meta, Google y TikTok. Campañas basadas en datos que generan ROI.",
  },

  // Work
  "work.title": { en: "Selected work", es: "Proyectos destacados" },
  "work.subtitle": {
    en: "Real results from real projects. Here's what we've built for our clients.",
    es: "Resultados reales de proyectos reales. Esto es lo que hemos construido para nuestros clientes.",
  },
  "work.ecommerce": { en: "E-commerce Platform", es: "Plataforma E-commerce" },
  "work.saas": { en: "SaaS Dashboard", es: "Dashboard SaaS" },
  "work.restaurant": { en: "Restaurant Booking", es: "Reservaciones de Restaurante" },
  "work.realestate": { en: "Real Estate Portal", es: "Portal Inmobiliario" },
  "work.fitness": { en: "Fitness App", es: "App de Fitness" },
  "work.retail": { en: "Retail", es: "Retail" },
  "work.technology": { en: "Technology", es: "Tecnología" },
  "work.hospitality": { en: "Hospitality", es: "Hospitalidad" },
  "work.realestateIndustry": { en: "Real Estate", es: "Bienes Raíces" },
  "work.healthWellness": { en: "Health & Wellness", es: "Salud y Bienestar" },

  // Process
  "process.title": { en: "How we work", es: "Cómo trabajamos" },
  "process.subtitle": {
    en: "A proven process that delivers results, on time and on budget",
    es: "Un proceso probado que entrega resultados, a tiempo y dentro del presupuesto",
  },
  "process.discover": { en: "Discover", es: "Descubrir" },
  "process.discover.desc": {
    en: "We dive deep into your business, audience, and goals to craft the perfect strategy.",
    es: "Nos sumergimos en tu negocio, audiencia y objetivos para crear la estrategia perfecta.",
  },
  "process.design": { en: "Design", es: "Diseñar" },
  "process.design.desc": {
    en: "Creating stunning, conversion-focused designs that align with your brand identity.",
    es: "Creando diseños impresionantes enfocados en conversión que se alinean con tu identidad de marca.",
  },
  "process.build": { en: "Build", es: "Construir" },
  "process.build.desc": {
    en: "Turning designs into reality with clean, performant code and rigorous testing.",
    es: "Convirtiendo diseños en realidad con código limpio, de alto rendimiento y pruebas rigurosas.",
  },
  "process.launch": { en: "Launch & Optimize", es: "Lanzar y Optimizar" },
  "process.launch.desc": {
    en: "Going live and continuously improving based on real data and user feedback.",
    es: "Lanzamiento y mejora continua basada en datos reales y feedback de usuarios.",
  },
  "process.deliverables": { en: "Deliverables", es: "Entregables" },
  "process.research": { en: "Research report", es: "Informe de investigación" },
  "process.competitive": { en: "Competitive analysis", es: "Análisis competitivo" },
  "process.roadmap": { en: "Project roadmap", es: "Hoja de ruta" },
  "process.wireframes": { en: "Wireframes", es: "Wireframes" },
  "process.mockups": { en: "UI mockups", es: "Mockups UI" },
  "process.prototype": { en: "Interactive prototype", es: "Prototipo interactivo" },
  "process.responsive": { en: "Responsive development", es: "Desarrollo responsive" },
  "process.cms": { en: "CMS integration", es: "Integración CMS" },
  "process.qa": { en: "QA testing", es: "Pruebas QA" },
  "process.deployment": { en: "Deployment", es: "Despliegue" },
  "process.analytics": { en: "Analytics setup", es: "Configuración de analytics" },
  "process.support": { en: "Ongoing support", es: "Soporte continuo" },

  // Pricing
  "pricing.title": { en: "Transparent pricing", es: "Precios transparentes" },
  "pricing.subtitle": {
    en: "Choose the engagement model that works best for your business",
    es: "Elige el modelo de colaboración que mejor funcione para tu negocio",
  },
  "pricing.oneTime": { en: "One-time", es: "Único" },
  "pricing.monthly": { en: "Monthly partnership", es: "Asociación mensual" },
  "pricing.mostPopular": { en: "Most popular", es: "Más popular" },
  "pricing.timeline": { en: "Timeline", es: "Tiempo" },
  "pricing.getStarted": { en: "Get started", es: "Empezar" },
  "pricing.customCta": {
    en: "Need something different? We love custom projects.",
    es: "¿Necesitas algo diferente? Nos encantan los proyectos personalizados.",
  },
  "pricing.customCtaButton": { en: "Let's talk about your project", es: "Hablemos de tu proyecto" },
  // One-time plans
  "pricing.starter.name": { en: "Starter Website", es: "Sitio Web Inicial" },
  "pricing.starter.price": { en: "From $1,500", es: "Desde $1,500" },
  "pricing.starter.desc": {
    en: "Perfect for small businesses and personal brands getting online.",
    es: "Perfecto para pequeñas empresas y marcas personales que se lanzan en línea.",
  },
  "pricing.starter.timeline": { en: "2-3 weeks", es: "2-3 semanas" },
  "pricing.growth.name": { en: "Growth Website", es: "Sitio Web Crecimiento" },
  "pricing.growth.price": { en: "From $4,000", es: "Desde $4,000" },
  "pricing.growth.desc": {
    en: "For businesses ready to scale with advanced features.",
    es: "Para empresas listas para escalar con funcionalidades avanzadas.",
  },
  "pricing.growth.timeline": { en: "4-6 weeks", es: "4-6 semanas" },
  "pricing.webapp.name": { en: "Web App / System", es: "App Web / Sistema" },
  "pricing.webapp.price": { en: "From $10,000", es: "Desde $10,000" },
  "pricing.webapp.desc": {
    en: "Custom web applications and internal business systems.",
    es: "Aplicaciones web personalizadas y sistemas empresariales internos.",
  },
  "pricing.webapp.timeline": { en: "8-12 weeks", es: "8-12 semanas" },
  // Monthly plans
  "pricing.starterMonthly.name": { en: "Starter Partnership", es: "Asociación Inicial" },
  "pricing.starterMonthly.price": { en: "From $500/mo", es: "Desde $500/mes" },
  "pricing.starterMonthly.desc": {
    en: "Ongoing support and continuous improvements for your website.",
    es: "Soporte continuo y mejoras constantes para tu sitio web.",
  },
  "pricing.growthMonthly.name": { en: "Growth Partnership", es: "Asociación Crecimiento" },
  "pricing.growthMonthly.price": { en: "From $1,500/mo", es: "Desde $1,500/mes" },
  "pricing.growthMonthly.desc": {
    en: "Full-service digital partnership for growing businesses.",
    es: "Asociación digital integral para negocios en crecimiento.",
  },
  "pricing.enterprise.name": { en: "Enterprise Partnership", es: "Asociación Empresarial" },
  "pricing.enterprise.price": { en: "Custom", es: "Personalizado" },
  "pricing.enterprise.desc": {
    en: "Dedicated team for large-scale digital operations.",
    es: "Equipo dedicado para operaciones digitales a gran escala.",
  },
  "pricing.ongoing": { en: "Ongoing", es: "Continuo" },
  // Features
  "pricing.feature.pages5": { en: "Up to 5 pages", es: "Hasta 5 páginas" },
  "pricing.feature.responsive": { en: "Responsive design", es: "Diseño responsive" },
  "pricing.feature.contactForm": { en: "Contact form", es: "Formulario de contacto" },
  "pricing.feature.basicSeo": { en: "Basic SEO setup", es: "SEO básico" },
  "pricing.feature.support1": { en: "1 month support", es: "1 mes de soporte" },
  "pricing.feature.pages15": { en: "Up to 15 pages", es: "Hasta 15 páginas" },
  "pricing.feature.animations": { en: "Custom animations", es: "Animaciones personalizadas" },
  "pricing.feature.cmsIntegration": { en: "CMS integration", es: "Integración CMS" },
  "pricing.feature.advancedSeo": { en: "Advanced SEO", es: "SEO avanzado" },
  "pricing.feature.analyticsDashboard": { en: "Analytics dashboard", es: "Dashboard de analytics" },
  "pricing.feature.support3": { en: "3 months support", es: "3 meses de soporte" },
  "pricing.feature.customFunctionality": { en: "Custom functionality", es: "Funcionalidad personalizada" },
  "pricing.feature.userAuth": { en: "User authentication", es: "Autenticación de usuarios" },
  "pricing.feature.dbIntegration": { en: "Database integration", es: "Integración de base de datos" },
  "pricing.feature.apiDev": { en: "API development", es: "Desarrollo de API" },
  "pricing.feature.adminDashboard": { en: "Admin dashboard", es: "Panel de administración" },
  "pricing.feature.support6": { en: "6 months support", es: "6 meses de soporte" },
  "pricing.feature.monthlyUpdates": { en: "Monthly updates", es: "Actualizaciones mensuales" },
  "pricing.feature.perfMonitoring": { en: "Performance monitoring", es: "Monitoreo de rendimiento" },
  "pricing.feature.securityPatches": { en: "Security patches", es: "Parches de seguridad" },
  "pricing.feature.contentUpdates": { en: "Content updates", es: "Actualizaciones de contenido" },
  "pricing.feature.prioritySupport": { en: "Priority support", es: "Soporte prioritario" },
  "pricing.feature.everythingStarter": { en: "Everything in Starter", es: "Todo en Inicial" },
  "pricing.feature.abTesting": { en: "A/B testing", es: "Pruebas A/B" },
  "pricing.feature.conversionOpt": { en: "Conversion optimization", es: "Optimización de conversión" },
  "pricing.feature.monthlyReporting": { en: "Monthly reporting", es: "Reportes mensuales" },
  "pricing.feature.strategyCalls": { en: "Strategy calls", es: "Llamadas de estrategia" },
  "pricing.feature.adManagement": { en: "Ad management", es: "Gestión de anuncios" },
  "pricing.feature.everythingGrowth": { en: "Everything in Growth", es: "Todo en Crecimiento" },
  "pricing.feature.dedicatedTeam": { en: "Dedicated team", es: "Equipo dedicado" },
  "pricing.feature.support247": { en: "24/7 support", es: "Soporte 24/7" },
  "pricing.feature.customIntegrations": { en: "Custom integrations", es: "Integraciones personalizadas" },
  "pricing.feature.slaGuarantee": { en: "SLA guarantee", es: "Garantía SLA" },
  "pricing.feature.onsiteWorkshops": { en: "On-site workshops", es: "Talleres presenciales" },

  // Testimonials
  "testimonials.title": { en: "What our clients say", es: "Lo que dicen nuestros clientes" },
  "testimonials.subtitle": { en: "Don't just take our word for it", es: "No solo tomes nuestra palabra" },

  // FAQ
  "faq.title": { en: "Frequently asked questions", es: "Preguntas frecuentes" },
  "faq.subtitle": { en: "Got questions? We've got answers.", es: "¿Tienes preguntas? Tenemos respuestas." },
  "faq.q1": { en: "How long does a typical project take?", es: "¿Cuánto tiempo toma un proyecto típico?" },
  "faq.a1": {
    en: "Project timelines vary based on scope. A starter website takes 2-3 weeks, while custom web applications can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    es: "Los tiempos varían según el alcance. Un sitio web inicial toma 2-3 semanas, mientras que aplicaciones web personalizadas pueden tomar 8-12 semanas. Proporcionaremos un cronograma detallado durante nuestra consulta inicial.",
  },
  "faq.q2": { en: "What's included in the support period?", es: "¿Qué incluye el período de soporte?" },
  "faq.a2": {
    en: "Support includes bug fixes, minor content updates, security patches, and technical assistance. Extended support packages are available for ongoing maintenance and optimization.",
    es: "El soporte incluye corrección de errores, actualizaciones menores de contenido, parches de seguridad y asistencia técnica. Hay paquetes de soporte extendido disponibles para mantenimiento y optimización continua.",
  },
  "faq.q3": {
    en: "Do you work with clients outside Guatemala?",
    es: "¿Trabajan con clientes fuera de Guatemala?",
  },
  "faq.a3": {
    en: "We work with clients globally. Our team is experienced in remote collaboration and we use modern tools to ensure seamless communication across time zones.",
    es: "Trabajamos con clientes a nivel global. Nuestro equipo tiene experiencia en colaboración remota y usamos herramientas modernas para asegurar una comunicación fluida a través de zonas horarias.",
  },
  "faq.q4": { en: "Can you help with existing websites?", es: "¿Pueden ayudar con sitios web existentes?" },
  "faq.a4": {
    en: "Yes, we offer website redesigns, performance optimization, and feature additions to existing sites. We'll audit your current setup and recommend the best path forward.",
    es: "Sí, ofrecemos rediseño de sitios web, optimización de rendimiento y adición de funcionalidades a sitios existentes. Auditaremos tu configuración actual y recomendaremos el mejor camino a seguir.",
  },
  "faq.q5": { en: "What technologies do you use?", es: "¿Qué tecnologías usan?" },
  "faq.a5": {
    en: "We use modern, proven technologies including Next.js, React, TypeScript, and Tailwind CSS for web development. For e-commerce, we work with Shopify and custom solutions. Our choices are always driven by your project's specific needs.",
    es: "Usamos tecnologías modernas y probadas incluyendo Next.js, React, TypeScript y Tailwind CSS para desarrollo web. Para e-commerce, trabajamos con Shopify y soluciones personalizadas. Nuestras elecciones siempre se basan en las necesidades específicas de tu proyecto.",
  },
  "faq.q6": { en: "How do payments work?", es: "¿Cómo funcionan los pagos?" },
  "faq.a6": {
    en: "For one-time projects, we typically require 50% upfront and 50% upon completion. Monthly partnerships are billed at the start of each month. We accept bank transfers and major credit cards.",
    es: "Para proyectos únicos, típicamente requerimos 50% por adelantado y 50% al completar. Las asociaciones mensuales se facturan al inicio de cada mes. Aceptamos transferencias bancarias y las principales tarjetas de crédito.",
  },

  // Contact
  "contact.title": { en: "Let's build something great", es: "Construyamos algo grandioso" },
  "contact.subtitle": {
    en: "Ready to start your project? Drop us a line and we'll get back to you within 24 hours.",
    es: "¿Listo para empezar tu proyecto? Escríbenos y te responderemos en 24 horas.",
  },
  "contact.name": { en: "Name", es: "Nombre" },
  "contact.namePlaceholder": { en: "Your name", es: "Tu nombre" },
  "contact.email": { en: "Email", es: "Correo" },
  "contact.company": { en: "Company", es: "Empresa" },
  "contact.companyPlaceholder": { en: "Your company", es: "Tu empresa" },
  "contact.budget": { en: "Budget range", es: "Rango de presupuesto" },
  "contact.selectBudget": { en: "Select budget", es: "Seleccionar presupuesto" },
  "contact.budget1": { en: "$1,000 - $5,000", es: "$1,000 - $5,000" },
  "contact.budget2": { en: "$5,000 - $10,000", es: "$5,000 - $10,000" },
  "contact.budget3": { en: "$10,000 - $25,000", es: "$10,000 - $25,000" },
  "contact.budget4": { en: "$25,000+", es: "$25,000+" },
  "contact.budgetMonthly": { en: "Monthly partnership", es: "Asociación mensual" },
  "contact.servicesInterested": { en: "Services interested in", es: "Servicios de interés" },
  "contact.message": { en: "Message", es: "Mensaje" },
  "contact.messagePlaceholder": { en: "Tell us about your project...", es: "Cuéntanos sobre tu proyecto..." },
  "contact.recaptcha": {
    en: "This form is protected by reCAPTCHA.",
    es: "Este formulario está protegido por reCAPTCHA.",
  },
  "contact.send": { en: "Send message", es: "Enviar mensaje" },
  "contact.sending": { en: "Sending...", es: "Enviando..." },
  "contact.responseTime": { en: "Response time", es: "Tiempo de respuesta" },
  "contact.within24": { en: "Within 24 hours", es: "Dentro de 24 horas" },
  "contact.location": { en: "Location", es: "Ubicación" },
  "contact.thankYou": {
    en: "Thanks for your message! We'll be in touch soon.",
    es: "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.",
  },
  "contact.service.website": { en: "Website Development", es: "Desarrollo Web" },
  "contact.service.webapp": { en: "Web App / System", es: "App Web / Sistema" },
  "contact.service.ecommerce": { en: "E-commerce", es: "E-commerce" },
  "contact.service.automation": { en: "Automation", es: "Automatización" },
  "contact.service.branding": { en: "Branding & Creative", es: "Branding y Creatividad" },
  "contact.service.ads": { en: "Paid Ads", es: "Publicidad Pagada" },

  // Footer
  "footer.quickLinks": { en: "Quick links", es: "Enlaces rápidos" },
  "footer.connect": { en: "Connect", es: "Conectar" },
  "footer.rights": { en: "All rights reserved.", es: "Todos los derechos reservados." },
  "footer.developedBy": { en: "Developed by", es: "Desarrollado por" },
  "footer.description": {
    en: "Your digital partner for growth. We build premium websites, powerful systems, and high-performing campaigns.",
    es: "Tu aliado digital para crecer. Construimos sitios web premium, sistemas potentes y campañas de alto rendimiento.",
  },
}

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    const savedLocale = localStorage.getItem("duopps-locale") as Locale
    if (savedLocale && (savedLocale === "en" || savedLocale === "es")) {
      setLocale(savedLocale)
    }
  }, [])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("duopps-locale", newLocale)
  }

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return translation[locale]
  }

  return <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
