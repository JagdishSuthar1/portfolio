import { resumeData } from "@/content/resume"

export function CoursesSection() {
  return (
    <section aria-labelledby="courses">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {resumeData.courses.map((c) => (
          <li key={c} className="text-sm rounded border px-3 py-2 bg-background">
            {c}
          </li>
        ))}
      </ul>
    </section>
  )
}
