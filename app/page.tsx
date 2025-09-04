import { SiteHeader } from "@/components/site-header"
import { AboutSection } from "@/components/sections/about-section"
import { EducationSection } from "@/components/sections/education-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { CoursesSection } from "@/components/sections/courses-section"
import { ContactSection } from "@/components/sections/contact-section"
import { SectionHeading } from "@/components/section-heading"

export default function Page() {
  return (
    <main id="main" className="min-h-dvh">
      <SiteHeader />
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-10">
        <section id="about" className="scroll-mt-24 py-6 border-b">
          <AboutSection />
        </section>

        <section id="education" className="scroll-mt-24 py-6 border-b">
          <SectionHeading id="education">Education</SectionHeading>
          <div className="mt-4">
            <EducationSection />
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-6 border-b">
          <SectionHeading id="skills">Technical Skills</SectionHeading>
          <div className="mt-4">
            <SkillsSection />
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 py-6 border-b">
          <SectionHeading id="experience">Experience</SectionHeading>
          <div className="mt-4">
            <ExperienceSection />
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 py-6 border-b">
          <SectionHeading id="projects">Projects</SectionHeading>
          <div className="mt-4">
            <ProjectsSection />
          </div>
        </section>

        <section id="achievements" className="scroll-mt-24 py-6 border-b">
          <SectionHeading id="achievements">Achievements</SectionHeading>
          <div className="mt-4">
            <AchievementsSection />
          </div>
        </section>

        <section id="courses" className="scroll-mt-24 py-6 border-b">
          <SectionHeading id="courses">Key Courses Taken</SectionHeading>
          <div className="mt-4">
            <CoursesSection />
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-6">
          <SectionHeading id="contact">Contact</SectionHeading>
          <div className="mt-4">
            <ContactSection />
          </div>
        </section>
      </div>
    </main>
  )
}
