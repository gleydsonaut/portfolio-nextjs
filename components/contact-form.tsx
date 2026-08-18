"use client"

import { useActionState, useEffect, useRef } from "react"
import { useFormStatus } from "react-dom"
import { sendEmail, type ContactState } from "@/app/actions/send-email"
import { Button } from "@/components/ui/button"

const initialState: ContactState = { status: "idle", message: "" }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white shadow-sm" disabled={pending}>
      {pending ? "Enviando..." : "Enviar Mensagem"}
    </Button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm text-slate-700 font-medium mb-2">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Seu nome"
            className="w-full rounded-lg bg-white border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#4f46e5] focus:outline-none focus:ring-1 focus:ring-[#4f46e5] shadow-sm transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-slate-700 font-medium mb-2">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="voce@email.com"
            className="w-full rounded-lg bg-white border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#4f46e5] focus:outline-none focus:ring-1 focus:ring-[#4f46e5] shadow-sm transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-slate-700 font-medium mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Conte sobre o processo que você quer automatizar..."
          className="w-full rounded-lg bg-white border border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#4f46e5] focus:outline-none focus:ring-1 focus:ring-[#4f46e5] resize-none shadow-sm transition-colors"
        />
      </div>

      <SubmitButton />

      {state.status !== "idle" && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm text-center ${state.status === "success" ? "text-green-600" : "text-red-600"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  )
}
