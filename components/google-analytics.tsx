"use client"
import { useEffect } from "react"

export function GoogleAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    if (!gaId) return
    // Insert GA script
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaId}');`
    document.head.appendChild(script2)
    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])
  return null
}
