"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "courses", label: "Courses" },
  { id: "contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState<string>("about")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) setActive(id)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    )
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as Element[]
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const onNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-background focus:text-foreground focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
        <div className="font-semibold tracking-tight">Jagdish Suthar</div>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-4">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={cn(
                "text-sm px-2 py-1 rounded hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 hover:cursor-pointer",
                active === item.id ? "text-primary font-medium" : "text-foreground/70",
              )}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          className="md:hidden inline-flex items-center gap-2 px-3 py-2 border rounded"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      <div id="mobile-nav" className={cn("md:hidden border-t", open ? "block" : "hidden")}>
        <div className="mx-auto max-w-4xl px-4 py-2 flex flex-col">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={cn(
                "text-base text-left px-2 py-2 rounded hover:text-primary",
                active === item.id ? "text-primary font-medium" : "text-foreground/80",
              )}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
          <Button className="mt-2 w-fit" onClick={() => window.print()}>
            Download PDF
          </Button>
        </div>
      </div>
    </header>
  )
}
