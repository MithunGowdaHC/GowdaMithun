import { XCircle } from "lucide-react"

interface FormErrorProps {
  message?: string
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null

  return (
    <div className="flex items-center gap-x-2 text-red-500 text-sm mt-1">
      <XCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}
