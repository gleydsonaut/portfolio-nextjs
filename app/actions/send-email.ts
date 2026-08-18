"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const DESTINATION = "gleydsonaut@gmail.com"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function sendEmail(_prevState: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  if (!name || !email || !message) {
    return { status: "error", message: "Por favor, preencha todos os campos." }
  }

  if (!isValidEmail(email)) {
    return { status: "error", message: "Informe um e-mail válido." }
  }

  if (message.length > 5000) {
    return { status: "error", message: "A mensagem é muito longa." }
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfólio Gleydson <onboarding@resend.dev>",
      to: [DESTINATION],
      replyTo: email,
      subject: `Novo contato do site: ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return { status: "error", message: "Não foi possível enviar agora. Tente novamente em instantes." }
    }

    return { status: "success", message: "Mensagem enviada com sucesso! Retorno em breve." }
  } catch (err) {
    console.log("[v0] Send email exception:", err)
    return { status: "error", message: "Ocorreu um erro inesperado. Tente novamente." }
  }
}
