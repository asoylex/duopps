"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Target, HeartHandshake } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import Img from "next/image"

export function Hero() {
  const { t } = useI18n()

  const phrases = [t("hero.phrase1"), t("hero.phrase2"), t("hero.phrase3"), t("hero.phrase4")]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex]
    const typingSpeed = isDeleting ? 30 : 80
    const pauseDuration = 2000

    if (!isDeleting && currentText === phrase) {
      setTimeout(() => setIsDeleting(true), pauseDuration)
      return
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false)
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) => (isDeleting ? prev.slice(0, -1) : phrase.slice(0, prev.length + 1)))
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentPhraseIndex]) // Removed phrases from dependencies

  useEffect(() => {
    setCurrentText("")
    setCurrentPhraseIndex(0)
    setIsDeleting(false)
  }, [t])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-ring/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-muted/50 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Proof Points - translated */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium">
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              {t("hero.badgeFast")}
            </Badge>
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium">
              <Target className="w-3.5 h-3.5 mr-1.5" />
              {t("hero.badgeConversion")}
            </Badge>
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-medium">
              <HeartHandshake className="w-3.5 h-3.5 mr-1.5" />
              {t("hero.badgeSupport")}
            </Badge>
          </div>

          {/* Headline with Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-muted-foreground">{t("hero.weBuild")}</span>
            <span className="relative">
              <span className="text-foreground">{currentText}</span>
              <span className="animate-blink text-accent">|</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            {t("hero.subheadline")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 text-base glow-effect">
              <Link href="#contact">
                {t("hero.bookCall")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base bg-transparent">
              <Link href="#work">{t("hero.seeWork")}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Cloud Icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Img
          src="/DuoppsB02.svg"
          alt="Cloud Icon"
          width={100}
          height={100}
          className="block dark:hidden"
        />
        <Img
          src="/DuoppsW02.svg"
          alt="Cloud Icon"
          width={100}
          height={100}
          className="hidden dark:block"
        />
      </div>
    </section>
  )
}
