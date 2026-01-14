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
  "work.inventory": { en: "Duopps Inventory System", es: "Sistema de Inventario Duopps" },
  "work.quote": { en: "Duopps Quotes", es: "Cotizaciones Duopps" },
  "work.dental": { en: "Dental Management", es: "Gestión Dental" },
  "work.realestate": { en: "Real Estate Portal", es: "Portal Inmobiliario" },
  "work.fitness": { en: "Fitness App", es: "App de Fitness" },
  "work.retail": { en: "Managment", es: "Administración" },
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
  "pricing.mostPopular": { en: "Most popular", es: "Más popular" },
  "pricing.timeline": { en: "Timeline", es: "Tiempo" },
  "pricing.getStarted": { en: "Get started", es: "Empezar" },
  "pricing.customCta": {
    en: "Need something different? We love custom projects.",
    es: "¿Necesitas algo diferente? Nos encantan los proyectos personalizados.",
  },
  "pricing.customCtaButton": { en: "Let's talk about your project", es: "Hablemos de tu proyecto" },
  // One-time plans
  "pricing.starter.name": { "en": "ONE", "es": "ONE" },
  "pricing.starter.price": { "en": "Q1,800", "es": "Q1,800" },
  "pricing.starter.desc": {
    "en": "A simple landing page without form to establish your online presence.",
    "es": "Una landing sencilla sin formulario para establecer tu presencia online."
  },
  "pricing.starter.timeline": { "en": "1 week", "es": "1 semana" },

  "pricing.growth.name": { "en": "ESSENTIAL", "es": "ESSENTIAL" },
  "pricing.growth.price": { "en": "Q2,500", "es": "Q2,500" },
  "pricing.growth.desc": {
    "en": "A multi-section landing with form and WhatsApp integration to generate leads.",
    "es": "Landing con múltiples secciones, formulario e integración con WhatsApp para generar contactos."
  },
  "pricing.growth.timeline": { "en": "2 weeks", "es": "2 semanas" },

  "pricing.webapp.name": { "en": "PLUS", "es": "PLUS" },
  "pricing.webapp.price": { "en": "From Q4,000", "es": "Desde Q4,000" },
  "pricing.webapp.desc": {
    "en": "From custom landing pages to fully personalized systems for your business.",
    "es": "Desde landings a medida hasta sistemas personalizados para tu negocio."
  },
  "pricing.webapp.timeline": { "en": "Based on project", "es": "Acorde al proyecto" },

  // Features ONE
  "pricing.feature.digitalPresence": { "en": "Professional digital presence", "es": "Presencia digital profesional" },
  "pricing.feature.modernDesign": { "en": "Modern & responsive design", "es": "Diseño moderno y responsive" },
  "pricing.feature.optimizedPage": { "en": "Page optimized for your message", "es": "Página optimizada para tu mensaje" },
  "pricing.feature.readyToGrow": { "en": "Ready-to-grow structure", "es": "Estructura lista para crecer" },
  "pricing.feature.support1": { "en": "1 month support included", "es": "1 mes de soporte incluido" },
  // Features ESSENTIAL
  "pricing.feature.strategicLanding": { "en": "Strategic landing structure", "es": "Landing con estructura estratégica" },
  "pricing.feature.sections5": { "en": "Up to 5 conversion-focused sections", "es": "Hasta 5 secciones enfocadas en conversión" },
  "pricing.feature.formWhatsapp": { "en": "Form + WhatsApp integration", "es": "Formulario e integración con WhatsApp" },
  "pricing.feature.basicSeo": { "en": "Initial SEO optimization", "es": "Optimización SEO inicial" },
  "pricing.feature.support3": { "en": "3 months support included", "es": "3 meses de soporte incluido" },
  // Features PLUS
  "pricing.feature.customDev": { "en": "Custom development for your business", "es": "Desarrollo a medida según tu negocio" },
  "pricing.feature.advancedLanding": { "en": "From advanced landing to custom system", "es": "Desde landing avanzada hasta sistema personalizado" },
  "pricing.feature.customFlows": { "en": "Custom integrations & workflows", "es": "Integraciones y flujos personalizados" },
  "pricing.feature.scalableTech": { "en": "Scalable tech foundation", "es": "Base tecnológica escalable" },
  "pricing.feature.projectSupport": { "en": "Project-tailored support", "es": "Soporte adaptado al proyecto" },

  // Testimonials
  "testimonials.title": { en: "What our clients say", es: "Lo que dicen nuestros clientes" },
  "testimonials.subtitle": { en: "Don't just take our word for it", es: "No solo tomes nuestra palabra" },

  // FAQ
  "faq.title": { en: "Frequently asked questions", es: "Preguntas frecuentes" },
  "faq.subtitle": { en: "Got questions? We've got answers.", es: "¿Tienes preguntas? Tenemos respuestas." },
  "faq.q1": {
    en: "What type of services do you offer?",
    es: "¿Qué tipo de servicios ofrecen?"
  },
  "faq.a1": {
    en: "We focus on two main areas: developing landing pages and creating custom websites or systems.\n\nLANDINGS – ONE-TIME PAYMENT\nWe have two types of landings according to client needs:\nONE — Custom landing to present your brand.\nESSENTIAL — Conversion-focused landing for lead generation.\n\nPLUS – CUSTOM DEVELOPMENTS\nFor larger or specific projects, we offer custom developments:\nCustom websites or systems, scalable and adapted to the project scope.",
    es: "Nos enfocamos en dos áreas principales: el desarrollo de landing pages y la creación de websites o sistemas personalizados.\n\nLANDINGS – PAGO ÚNICO\nContamos con dos tipos de landings según las necesidades del cliente:\nONE — Landing personalizada para presentar tu marca.\nESSENTIAL — Landing enfocada en conversión y generación de contactos.\n\nPLUS – DESARROLLOS PERSONALIZADOS\nPara proyectos más amplios o específicos, ofrecemos desarrollos a medida:\nWebsites o sistemas personalizados, escalables y adaptados al alcance del proyecto.",
  },
  "faq.q2": {
    en: "How long does landing page development take?",
    es: "¿Cuánto tiempo tarda el desarrollo de una landing page?"
  },
  "faq.a2": {
    en: "Estimated delivery time can be between 3 and 10 business days, depending on content, design, and specific requirements. If the client already has logo, texts, and images ready, delivery time can be even faster.",
    es: "El tiempo estimado de entrega puede ser entre 3 y 10 días hábiles, dependiendo del contenido, diseño y requerimientos específicos. Si el cliente ya tiene listo logo, textos e imágenes, el tiempo de entrega puede ser aún más rápido.",
  },
  "faq.q3": {
    en: "What do I need to start my website?",
    es: "¿Qué necesito para comenzar mi página web?",
  },
  "faq.a3": {
    en: "Generally we need:\n• Logo and color palette (if you already have them)\n• Basic information about your business or service\n• Images or photographs you want to use\n• Examples of sites you like as reference\n\nWe guide you through each step to simplify the process.",
    es: "Generalmente necesitamos:\n• Logo y paleta de colores (si ya los tienes)\n• Información básica de tu negocio o servicio\n• Imágenes o fotografías que quieras utilizar\n• Ejemplos de sitios que te gusten como referencia\n\nNosotros te guiamos en cada paso para simplificar el proceso.",
  },
  "faq.q4": {
    en: "Do you develop custom systems?",
    es: "¿Desarrollan sistemas a medida?"
  },
  "faq.a4": {
    en: "Yes. We create custom systems to automate processes, manage information, handle inventories, sales, projects, reports, and more. We adapt to your company's needs and define the necessary functionalities before starting.",
    es: "Sí. Creamos sistemas personalizados para automatizar procesos, administrar información, manejar inventarios, ventas, proyectos, reportes y más. Nos adaptamos a las necesidades de tu empresa y definimos las funcionalidades necesarias antes de iniciar.",
  },
  "faq.q5": {
    en: "What is the development process for a custom system?",
    es: "¿Cómo es el proceso de desarrollo de un sistema a medida?"
  },
  "faq.a5": {
    en: "We work in stages:\n• Initial meeting to gather requirements\n• Functional proposal and preliminary design\n• System development by modules\n• Testing and adjustments\n• Final delivery and system usage training\n\nThroughout the process we share progress to ensure the result meets exactly what was requested.",
    es: "Trabajamos por etapas:\n• Reunión inicial para recopilar requerimientos\n• Propuesta funcional y diseño preliminar\n• Desarrollo del sistema por módulos\n• Pruebas y ajustes\n• Entrega final y capacitación del uso del sistema\n\nDurante todo el proceso compartimos avances para asegurar que el resultado cumpla exactamente con lo solicitado.",
  },
  "faq.q6": {
    en: "Do you offer hosting and domain?",
    es: "¿Ofrecen hosting y dominio?"
  },
  "faq.a6": {
    en: "Yes, we can advise you to acquire them or manage them for you. We can also work with hosting you already have. If you don't have a domain, we help you choose the name and configure it.",
    es: "Sí, podemos asesorarte para adquirirlos o gestionarlos por ti. También podemos trabajar con hosting que ya tengas. Si no cuentas con dominio, te ayudamos a elegir el nombre y configurarlo.",
  },
  "faq.q7": {
    en: "Will my site be adaptable to phones and tablets?",
    es: "¿Mi sitio será adaptable a teléfonos y tablets?"
  },
  "faq.a7": {
    en: "Yes. All our developments are designed to display correctly on computers, tablets, and mobile devices, ensuring a smooth experience for your customers.",
    es: "Sí. Todos nuestros desarrollos están diseñados para verse correctamente en computadoras, tablets y dispositivos móviles, garantizando una experiencia fluida para tus clientes.",
  },
  "faq.q8": {
    en: "Can I request changes after delivery?",
    es: "¿Puedo solicitar cambios después de la entrega?"
  },
  "faq.a8": {
    en: "We include a number of revisions during development to ensure you are satisfied. If you later want to add new sections or functions, we can quote them as additional improvements.",
    es: "Incluimos un número de revisiones durante el desarrollo para asegurar que quedes satisfecho. Si posteriormente deseas agregar nuevas secciones o funciones, podemos cotizarlas como mejoras adicionales.",
  },
  "faq.q9": {
    en: "How can I see the progress of my project?",
    es: "¿Cómo puedo ver el avance de mi proyecto?"
  },
  "faq.a9": {
    en: "We share visual and functional progress throughout development. For custom systems, we work by modules and show you each part before moving to the next.",
    es: "Compartimos avances visuales y funcionales a lo largo del desarrollo. Para sistemas a medida, trabajamos por módulos y te mostramos cada parte antes de avanzar a la siguiente.",
  },
  "faq.q10": {
    en: "Do you offer monthly support or maintenance?",
    es: "¿Ofrecen soporte o mantenimiento mensual?"
  },
  "faq.a10": {
    en: "Yes. We have maintenance plans that include updates, technical support, data backup, and monitoring, according to client needs.",
    es: "Sí. Contamos con planes de mantenimiento que incluyen actualizaciones, soporte técnico, respaldo de datos y monitoreo, según las necesidades del cliente.",
  },
  "faq.q11": {
    en: "Can you work with clients from any country?",
    es: "¿Pueden trabajar con clientes de cualquier país?"
  },
  "faq.a11": {
    en: "Yes. We work remotely with clients from different regions and adapt payment methods and communication according to their location.",
    es: "Sí. Trabajamos de manera remota con clientes de diferentes regiones y adaptamos los métodos de pago y comunicación según su ubicación.",
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
  "contact.budget1": { en: "Q1,000 - Q5,000", es: "Q1,000 - Q5,000" },
  "contact.budget2": { en: "Q5,000 - Q10,000", es: "Q5,000 - Q10,000" },
  "contact.budget3": { en: "Q10,000 - Q25,000", es: "Q10,000 - Q25,000" },
  "contact.budget4": { en: "Q25,000+", es: "Q25,000+" },
  "contact.budgetMonthly": { en: "Monthly partnership", es: "Suscripción" },
  "contact.servicesInterested": { en: "Services interested in", es: "Servicios de interés" },
  "contact.message": { en: "Message", es: "Mensaje" },
  "contact.messagePlaceholder": { en: "Tell us about your project...", es: "Cuéntanos sobre tu proyecto..." },
  "contact.recaptcha": {
    en: "This form is protected by Turnstile.",
    es: "Este formulario está protegido por Turnstile.",
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
  "contact.captchaRequired": {
    en: "Please complete the captcha.",
    es: "Por favor completa el captcha."
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
      console.warn(`Translation missing for key: Q{key}`)
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
