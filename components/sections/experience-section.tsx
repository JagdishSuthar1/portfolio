import { resumeData } from "@/content/resume"
import { Eye } from "lucide-react"

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience">
      <ul className="space-y-4">
        {resumeData.experience.map((ex) => (
          <li
            key={`${ex.company}-${ex.start}`}
            className="rounded border p-4 transition-transform duration-200 hover:scale-105 hover:border-white"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <p className="font-medium">{ex.role}</p>
                <p className="text-sm text-foreground/70">{ex.company}</p>
              </div>

              <div className="text-sm text-foreground/70 flex flex-col gap-3 items-end">
                <a
                  href="https://drive.google.com/file/d/1Tj7K3jICozxnqik4mae26M-4sunT5gDc/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="View experience document"
                >
                  <Eye className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">View experience document</span>
                </a>
                {ex.start} – {ex.end}
              </div>
            </div>
            {ex.location && <p className="text-sm text-foreground/70 mt-1">{ex.location}</p>}
            <ul className="mt-2 list-disc pl-5 space-y-1">
              {ex.details.map((d, i) => (
                <li key={i} className="text-sm leading-relaxed">
                  {d}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
