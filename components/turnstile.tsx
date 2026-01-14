"use client"
import { useEffect, useRef } from "react"

export function Turnstile({ siteKey, onVerify }: { siteKey: string, onVerify: (token: string) => void }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.turnstile) {
      const script = document.createElement("script")
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
      script.async = true
      document.body.appendChild(script)
      script.onload = renderWidget
      return () => { document.body.removeChild(script) }
    } else {
      renderWidget()
    }
    function renderWidget() {
      if (ref.current && window.turnstile) {
        window.turnstile.render(ref.current, {
          sitekey: siteKey,
          callback: onVerify,
        })
      }
    }
  }, [siteKey, onVerify])

  return <div ref={ref} className="cf-turnstile" />
}

declare global {
  interface Window {
    turnstile?: any
  }
}
