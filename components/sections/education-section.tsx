import { resumeData } from "@/content/resume"

export function EducationSection() {
  return (
    <section aria-labelledby="education">
      <ul className="space-y-4">
        {resumeData.education.map((ed) => (
          <li
            key={`${ed.school}-${ed.start}`}
            className="rounded border p-4 transition-transform duration-200 hover:scale-105 hover:border-white"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <p className="font-medium">{ed.school}</p>
                <p className="text-sm text-foreground/70">{ed.degree}</p>
              </div>
              <div className="text-sm text-foreground/70">
                {ed.start} – {ed.end}
              </div>
            </div>
            {ed.location && <p className="text-sm text-foreground/70 mt-1">{ed.location}</p>}
            {ed.notes && <p className="text-sm mt-2">{ed.notes}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}
