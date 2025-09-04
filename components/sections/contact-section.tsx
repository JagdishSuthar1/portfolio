import { resumeData } from "@/content/resume"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section aria-labelledby="contact">
      <div className="rounded border p-4">
        <p className="text-sm text-foreground/80">
          I’m open to internships, research collaborations, and full‑stack projects.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {resumeData.email && (
            <Button asChild>
              <a href={`mailto:${resumeData.email}`}>Email Me</a>
            </Button>
          )}
          {resumeData.links?.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-2 rounded border hover:border-primary hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
