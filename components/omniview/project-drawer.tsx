"use client"

import { type FormEvent, useState } from "react"
import { useDrawer } from "@/components/drawer-provider"
import { getContent } from "@/lib/content"
import type { Lang } from "@/lib/language"

type Status = "idle" | "sending" | "success" | "error"

export function ProjectDrawer({ lang }: { lang: Lang }) {
  const { isOpen, close } = useDrawer()
  const content = getContent(lang)
  const t = content.drawer
  const [status, setStatus] = useState<Status>("idle")
  const [validationError, setValidationError] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()

    if (!name || !email) {
      setValidationError(true)
      setStatus("idle")
      return
    }

    setValidationError(false)
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: formData.get("phone"),
          company: formData.get("company"),
          service: formData.get("service"),
          budget: formData.get("budget"),
          description: formData.get("description"),
          lang,
        }),
      })

      const data = await res.json().catch(() => null)

      if (!res.ok || !data || data.ok !== true) throw new Error("Request failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  function handleClose() {
    close()
    setStatus("idle")
    setValidationError(false)
  }

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
      <button
        type="button"
        aria-label={t.close}
        onClick={handleClose}
        style={{ position: "absolute", inset: 0, background: "transparent", border: "none", cursor: "pointer" }}
        tabIndex={isOpen ? 0 : -1}
      />
      <div className="drawer-panel" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <div className="drawer-head">
          <span />
          <button type="button" className="drawer-close" aria-label={t.close} onClick={handleClose}>
            ×
          </button>
        </div>
        {status === "success" ? (
          <div className="drawer-success" role="status" aria-live="polite">
            <h3 id="drawer-title">{t.successTitle}</h3>
            <p>{t.successBody}</p>
          </div>
        ) : (
          <>
            <h3 id="drawer-title">{t.title}</h3>
            <p>{t.intro}</p>
            <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="drawer-name">{t.nameLabel}</label>
              <input id="drawer-name" name="name" type="text" placeholder={t.namePlaceholder} required />
            </div>
            <div className="field">
              <label htmlFor="drawer-email">{t.emailLabel}</label>
              <input id="drawer-email" name="email" type="email" placeholder={t.emailPlaceholder} required />
            </div>
            <div className="field">
              <label htmlFor="drawer-phone">{t.phoneLabel}</label>
              <input id="drawer-phone" name="phone" type="tel" placeholder={t.phonePlaceholder} required />
            </div>
            <div className="field">
              <label htmlFor="drawer-company">{t.companyLabel}</label>
              <input id="drawer-company" name="company" type="text" placeholder={t.companyPlaceholder} />
            </div>
            <div className="field">
              <label htmlFor="drawer-service">{t.serviceLabel}</label>
              <select id="drawer-service" name="service" defaultValue={t.serviceOptions[0]}>
                {t.serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="drawer-budget">{t.budgetLabel}</label>
              <select id="drawer-budget" name="budget" defaultValue={t.budgetOptions[0]}>
                {t.budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="drawer-description">{t.descriptionLabel}</label>
              <textarea id="drawer-description" name="description" placeholder={t.descriptionPlaceholder} required />
            </div>

            {validationError && <p className="form-note" style={{ color: "#c0392b" }}>{t.validationError}</p>}
            {status === "error" && <p className="form-note" style={{ color: "#c0392b" }}>{t.error}</p>}

            <p className="form-note">
              {t.privacyNoteBefore}{" "}
              <a href={`/${lang === "es" ? "es/" : ""}legal/privacy`} target="_blank" rel="noreferrer">
                {t.privacyLinkLabel}
              </a>
              {t.privacyNoteAfter}
            </p>

              <button type="submit" className="pill dark" disabled={status === "sending"}>
                {status === "sending" ? t.sending : status === "error" ? t.retry : t.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
