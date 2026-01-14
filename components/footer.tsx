"use client"

import Link from "next/link"
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const socialLinks = [
  { href: "https://www.instagram.com/duopps.gt/", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/duopps", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/duopps.gt", icon: Facebook, label: "Facebook" },
]

export function Footer() {
  const { t } = useI18n()

  const quickLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#work", label: t("nav.work") },
    { href: "#process", label: t("nav.process") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <footer className="py-12 md:py-16 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight mb-4 block">
              Duopps
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.connect")}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Duopps. {t("footer.rights")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("footer.developedBy")}{" "}
            <Link
              href="https://duopps.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Duopps
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
