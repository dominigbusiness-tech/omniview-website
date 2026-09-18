import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 })
  }

  const name = typeof body.name === "string" ? body.name.trim() : ""
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const phone = typeof body.phone === "string" ? body.phone.trim() : ""
  const company = typeof body.company === "string" ? body.company.trim() : ""
  const service = typeof body.service === "string" ? body.service.trim() : ""
  const budget = typeof body.budget === "string" ? body.budget.trim() : ""
  const description = typeof body.description === "string" ? body.description.trim() : ""

  if (!name || !email || !phone || !service || !budget || !description) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL
  const webhookSecret = process.env.LEAD_WEBHOOK_SECRET

  if (!webhookUrl || !webhookSecret) {
    console.error("[v0] Lead webhook is not fully configured; dropping inquiry")
    return NextResponse.json({ ok: false, error: "Lead delivery is not configured" }, { status: 500 })
  }

  const payload = {
    name,
    email,
    phone,
    company,
    service,
    budget,
    description,
    language: typeof body.lang === "string" ? body.lang : "en",
    source: "omniview-website",
    secret: webhookSecret,
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const result = await webhookResponse.json().catch(() => null)

    if (!webhookResponse.ok || !result || result.ok !== true) {
      const errorMessage = result && typeof result.error === "string" ? result.error : "Failed to deliver inquiry"
      console.error("[v0] Lead webhook did not confirm success:", webhookResponse.status, errorMessage)
      return NextResponse.json({ ok: false, error: errorMessage }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] Failed to reach lead webhook:", error)
    return NextResponse.json({ ok: false, error: "Failed to deliver inquiry" }, { status: 502 })
  }
}
