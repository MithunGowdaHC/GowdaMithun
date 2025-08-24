"use server"

import { Resend } from "resend"
import { ContactFormEmail } from "@/emails/contact-form-email"
import { revalidatePath } from "next/cache"

interface State {
  errors: {
    name?: string[]
    email?: string[]
    message?: string[]
    _form?: string[]
  }
  success: boolean
  message: string
}

async function validate(prevState: State, formData: FormData): Promise<State> {
  const name = formData.get("name") as string | null
  const email = formData.get("email") as string | null
  const message = formData.get("message") as string | null

  const errors: State["errors"] = {}

  if (!name || name.length < 3) {
    errors.name = ["Name must be at least 3 characters"]
  }

  if (!email || !email.includes("@")) {
    errors.email = ["Invalid email"]
  }

  if (!message || message.length < 10) {
    errors.message = ["Message must be at least 10 characters"]
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      success: false,
      message: "Please correct the errors.",
    }
  }

  return {
    errors: {},
    success: true,
    message: "Form is valid.",
  }
}

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  const validated = await validate(prevState, formData)

  if (!validated.success) {
    return validated
  }

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "mithungowdahc12a@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({ name, email, message }),
    })

    revalidatePath("/contact")

    return {
      errors: {},
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    }
  } catch (error) {
    console.error("Failed to send email:", error)
    return {
      errors: {
        _form: ["Failed to send your message. Please try again later."],
      },
      success: false,
      message: "There was an error sending your message.",
    }
  }
}
