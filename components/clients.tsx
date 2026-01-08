"use client"

import { useI18n } from "@/lib/i18n"
import { motion } from "framer-motion"

const clients = [
  { name: "Stripe", industry: "Fintech" },
  { name: "Shopify", industry: "E-commerce" },
  { name: "Notion", industry: "Productivity" },
  { name: "Figma", industry: "Design" },
  { name: "Slack", industry: "Communication" },
  { name: "Vercel", industry: "Technology" },
  { name: "Linear", industry: "Project Management" },
  { name: "Framer", industry: "Web Design" },
]

export function Clients() {
  const { t } = useI18n()

  return (
    <section className="py-20 border-b border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16"
        >
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-2">{t("clients.trusted")}</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">{t("clients.headline")}</h2>
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">50+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t("clients.projects")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">98%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t("clients.satisfaction")}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">5+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t("clients.years")}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-background p-8 md:p-10 flex flex-col items-center justify-center gap-3 hover:bg-muted/50 transition-all duration-300"
            >
              {/* Decorative corner accent on hover */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-primary/30 transition-colors duration-300 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-primary/30 transition-colors duration-300 rounded-br-lg" />

              {/* Logo text representation */}
              <span className="text-xl md:text-2xl font-bold text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300 tracking-tight">
                {client.name}
              </span>
              <span className="text-[10px] text-muted-foreground/40 group-hover:text-muted-foreground uppercase tracking-[0.15em] transition-colors duration-300">
                {client.industry}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          {t("clients.cta")}
        </motion.p>
      </div>
    </section>
  )
}
