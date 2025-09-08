"use client"
import { resumeData } from "@/content/resume"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const { name, title, location, email, phone, links, summary } = resumeData
  return (
    <section aria-labelledby="about-title" className="space-y-4">
      <h1 id="about-title" className="text-pretty text-2xl md:text-3xl font-semibold tracking-tight">
        {name}
      </h1>
      <p className="text-foreground/80">{title}</p>
      <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/70">
        {location && <span>{location}</span>}
        {email && (
          <a className="underline decoration-dotted underline-offset-4 hover:text-primary" href={`mailto:${email}`}>
            {email}
          </a>
        )}
        {phone && <span>{phone}</span>}
      </div>
      {links?.length ? (
        <div className="flex flex-wrap items-center gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-2 py-1 rounded border hover:border-primary hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
      {summary && <p className="text-pretty leading-relaxed text-foreground/80">{summary}</p>}
      <div className="pt-1">
        <Button asChild className={"hover:cursor-pointer"}>
          <a
            href="https://drive.google.com/file/d/1u3doINrO-P12WwBIIlYyGqlyUDp4DJv-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Jagdish Suthar resume on Google Drive (opens in a new tab)"
          >
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  )
}
