import type React from "react"
export function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-balance text-xl md:text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  )
}
