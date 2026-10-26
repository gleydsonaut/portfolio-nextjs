import type React from "react"

interface CardWrapperProps {
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>
  role?: string
  tabIndex?: number
}

export function CardWrapper({ children, className = "", ...props }: CardWrapperProps) {
  return <div className={`bg-card rounded-lg p-6 border border-primary/20 ${className}`} {...props}>{children}</div>
}

