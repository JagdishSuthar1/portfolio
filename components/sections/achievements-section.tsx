import { resumeData } from "@/content/resume"

export function AchievementsSection() {
  return (
    <section aria-labelledby="achievements">
      <ul className="list-disc pl-5 space-y-1">
        {resumeData.achievements.map((a, i) => (
          <li key={i} className="text-sm leading-relaxed">
            {a}
          </li>
        ))}
      </ul>
    </section>
  )
}
