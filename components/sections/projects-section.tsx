import { resumeData } from "@/content/resume"

export function ProjectsSection() {
  return (
    <section aria-labelledby="projects">
      <ul className="space-y-4">
        {resumeData.projects.map((p) => (
          <li
            key={p.name}
            className="rounded border p-4 transition-transform duration-200 hover:scale-105 hover:border-white"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-foreground/70">{p.stack}</p>
              </div>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline decoration-dotted underline-offset-4 hover:text-primary"
                >
                  GitHub
                </a>
              ) : null}
            </div>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              {p.points.map((pt, i) => (
                <li key={i} className="text-sm leading-relaxed">
                  {pt}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
