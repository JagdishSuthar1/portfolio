import { resumeData } from "@/content/resume"

function Chip({ text }: { text: string }) {
  return <span className="text-xs px-2 py-1 rounded border bg-background">{text}</span>
}

export function SkillsSection() {
  const s = resumeData.skills
  const groups: [string, string[]][] = [
    ["Languages", s.languages],
    ["Frameworks & Libraries", s.frameworks],
    ["Databases", s.databases],
    ["Systems & OS", s.systems],
    ["APIs", s.apis],
    ["AI/ML", s.ai],
    ["Developer Tools", s.tools],
    ["DevOps & Cloud", s.devops],
  ]
  return (
    <section aria-labelledby="skills">
      <div className="space-y-5">
        {groups.map(([label, items]) =>
          items?.length ? (
            <div key={label} className="space-y-2">
              <p className="text-sm font-medium">{label}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <Chip key={it} text={it} />
                ))}
              </div>
            </div>
          ) : null,
        )}
      </div>
    </section>
  )
}
