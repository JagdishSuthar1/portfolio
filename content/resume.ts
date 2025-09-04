export type Link = { label: string; href: string }

export type Experience = {
  company: string
  role: string
  start: string
  end: string
  location?: string
  details: string[]
}

export type Education = {
  school: string
  degree: string
  location?: string
  start: string
  end: string
  notes?: string
}

export type Project = {
  name: string
  stack: string
  href?: string
  points: string[]
}

export type ResumeData = {
  name: string
  title: string
  location?: string
  phone?: string
  email?: string
  links: Link[]
  summary?: string
  skills: {
    languages: string[]
    frameworks: string[]
    databases: string[]
    systems: string[]
    apis: string[]
    ai: string[]
    tools: string[]
    devops: string[]
  }
  experience: Experience[]
  education: Education[]
  projects: Project[]
  achievements: string[]
  courses: string[]
}

export const resumeData: ResumeData = {
  name: "Jagdish Suthar",
  title: "B.Tech. in Artificial Intelligence & Data Science, IIT Jodhpur",
  location: "Jodhpur, India",
  phone: "+91-7878044379",
  email: "jagdishjdh31@gmail.com",
  links: [
    { label: "Leetcode: jagdishsuthar", href: "https://leetcode.com/jagdishsuthar" },
    { label: "GitHub: JagdishSuthar1", href: "https://github.com/JagdishSuthar1" },
    { label: "X: jagdish437041", href: "https://x.com/jagdish437041" },
  ],
  summary:
    "Undergraduate researcher and full‑stack developer focused on real‑time systems, scalable web apps, and Generative AI. Experienced with RAG, WebSockets, and performance optimization.",
  skills: {
    languages: ["C", "C++", "Python", "Shell Scripting", "TypeScript", "JavaScript", "SQL", "NoSQL"],
    frameworks: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Prisma",
      "Socket.IO",
      "WebSockets",
      "LangChain",
      "LangGraph",
    ],
    databases: ["MongoDB", "PostgreSQL", "MongoDB Atlas"],
    systems: ["Linux", "Windows", "Operating Systems", "Computer Networking"],
    apis: ["WebSocket APIs"],
    ai: ["Retrieval-Augmented Generation (RAG)", "Generative AI"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Cloudinary"],
    devops: ["Docker", "CI/CD", "AWS (EC2)"],
  },
  experience: [
    {
      company: "Department of CSE, IIT Jodhpur",
      role: "Undergraduate Student Researcher (Supervisor: Dr. Romi Banerjee)",
      start: "Aug 2024",
      end: "Dec 2024",
      details: [
        "Developed emotion-recognition classifiers on edge hardware using GSR sensors for real-world use cases.",
        "Validated model through extensive testing; co-authored paper in IEEE APSCON 2025 (pp. 418–421): “An AI-based E-Nose: A Novel Approach to Odour Sensing and Emotional Context Recognition”.",
      ],
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology, Jodhpur",
      degree: "B.Tech. in Artificial Intelligence and Data Science; CGPA: 7.97",
      location: "Jodhpur, India",
      start: "2022",
      end: "Present",
    },
    {
      school: "CBSE Board",
      degree: "Senior Secondary (XII), 93.6%",
      location: "India",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      name: "SyncStream",
      stack: "Next.js, TypeScript, Node.js, Express, Prisma, PostgreSQL, WebSockets",
      href: "https://github.com/JagdishSuthar1/syncstream", // add GitHub link if available
      points: [
        "Built real-time collaborative music platform scaling to 1,000+ concurrent WebSocket users with latency under 200ms.",
        "Implemented role-based access control with Prisma & PostgreSQL; secure storage for chats, polls, and history.",
        "Optimized SEO and responsiveness with Next.js Server Components; ~30% faster page loads.",
      ],
    },
    {
      name: "Second Brain",
      stack: "React, TypeScript, Node.js, Express.js, MongoDB, Cloudinary, WebSockets, LangChain",
      href: "https://github.com/JagdishSuthar1/second-brain",
      points: [
        "Multimedia knowledge management with semantic search and AI summarization; ~40% faster retrieval.",
        "Secure media uploads via Cloudinary, supporting 1,000+ daily assets.",
        "Real-time group chat via WebSockets scaling to 500+ concurrent users.",
      ],
    },
    {
      name: "EduCourse",
      stack: "React, Tailwind CSS, Node.js, Express.js, MongoDB",
      href: "https://github.com/JagdishSuthar1/educourse",
      points: [
        "Role-based e-learning platform with PayPal integration and dashboards for instructors/students.",
        "Scalable media pipeline (Multer + Cloudinary) handling 1,000+ lecture uploads reliably.",
      ],
    },
  ],
  achievements: [
    "Solved 300+ problems on LeetCode (strong data structures and algorithms).",
    "Selected among 30 students across Rajasthan for CSRL Oil India Super-30 mentorship (2020–21).",
  ],
  courses: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "DBMS",
    "Computer Network",
    "Computer Architecture",
    "Probability",
    "Statistics & Stochastic Processes (A-)",
    "Dependable AI (A)",
    "Mathematics (A)",
    "Introduction to Computer Science (A-)",
  ],
}
