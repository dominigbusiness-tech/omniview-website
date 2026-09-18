"use client"

import type { ButtonHTMLAttributes } from "react"
import { useDrawer } from "@/components/drawer-provider"

export function OpenDrawerButton({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open } = useDrawer()

  return (
    <button type="button" className={className} onClick={open} {...rest}>
      {children}
    </button>
  )
}
