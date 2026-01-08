"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n"
import { LanguageToggle } from "@/components/language-toggle"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { t } = useI18n()

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#work", label: t("nav.work") },
    { href: "#process", label: t("nav.process") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#testimonials", label: t("nav.testimonials") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#contact", label: t("nav.contact") },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight">
          Duopps
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <Button asChild className="hidden md:inline-flex rounded-full px-6">
            <Link href="#contact">{t("nav.getQuote")}</Link>
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-4 rounded-full">
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.getQuote")}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
