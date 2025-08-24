import type * as React from "react"

interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({ name, email, message }) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>You have received a new message from your portfolio website contact form.</p>

    <h2>Contact Details</h2>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>

    <h2>Message</h2>
    <p>{message}</p>

    <hr />
    <p>This email was sent from your portfolio website contact form.</p>
  </div>
)
