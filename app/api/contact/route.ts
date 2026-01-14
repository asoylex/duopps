import { NextRequest, NextResponse } from "next/server"

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
    if (!webhookUrl) {
      return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 })
    }
    if (!turnstileSecret) {
      return NextResponse.json({ error: "Captcha secret not configured" }, { status: 500 })
    }
    // Validar el token de Turnstile
    const token = body.turnstileToken
    if (!token) {
      return NextResponse.json({ error: "Captcha token missing" }, { status: 400 })
    }
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${turnstileSecret}&response=${token}`,
    })
    const verifyData = await verifyRes.json()
    if (!verifyData.success) {
      return NextResponse.json({ error: "Captcha validation failed" }, { status: 400 })
    }

    // Construye el mensaje para Discord
    const content = `Nuevo contacto:\n\nNombre: ${body.name}\nEmail: ${body.email}\nEmpresa: ${body.company || "-"}\nPresupuesto: ${body.budget || "-"}\nServicios: ${(body.services || []).join(", ") || "-"}\nMensaje: ${body.message}`

    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        username: "Contacto Web",
      }),
    })

    if (!discordRes.ok) {
      return NextResponse.json({ error: "Error enviando a Discord" }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: "Error procesando la solicitud" }, { status: 500 })
  }
}
