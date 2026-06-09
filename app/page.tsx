"use client"

import { useState } from "react"
import { Mail, Linkedin, Download, ChevronRight, ChevronLeft, Award, BookOpen, Briefcase, Code, Database, Layout } from "lucide-react"

export default function Home() {
  const [activeProj, setActiveProj] = useState(0)
  const [activeCert, setActiveCert] = useState(0)

  const data = {
    name: "Zakaria Alkhani",
    role: "Information Systems & E-Business Management",
    heroText: "4th-year student at Ajman University specializing in mapping complex systems, integrating emerging AI technologies, and optimizing enterprise digital platforms.",
    about: [
        "I am an energetic and analytical Information Systems professional. I specialize in bridging the gap between technical architecture and real-world business logic. My focus is on ensuring AI reliability, analyzing complex data, and streamlining enterprise operations.",
        "As a peer tutor, I assist other students by translating complex technical requirements into actionable, easy-to-understand lessons.",
        "When I step away from the digital world, I apply that same analytical exactness to baking, constantly experimenting with ingredient ratios to perfect my signature crinkly-top brownies and Cinnabons."
    ],
    skills: [
        { name: "UML Architecture", icon: <Layout className="w-8 h-8 text-blue-400" /> },
        { name: "SAP S/4HANA", icon: <Briefcase className="w-8 h-8 text-blue-500" /> },
        { name: "PostgreSQL", icon: <Database className="w-8 h-8 text-indigo-400" /> },
        { name: "Power BI", icon: <Database className="w-8 h-8 text-yellow-500" /> },
        { name: "AWS Cloud", icon: <Code className="w-8 h-8 text-orange-400" /> },
        { name: "Prompt Engineering", icon: <Code className="w-8 h-8 text-purple-400" /> },
        { name: "JavaScript / HTML", icon: <Code className="w-8 h-8 text-yellow-400" /> }
    ],
    projects: [
        { title: "Trustio - Secure Marketplace", desc: "Developed a secure, sustainability-focused web application tailored for the UAE market.", tech: ["Wix Studio", "JavaScript", "RBAC"] },
        { title: "Customer Segmentation & AI Dashboard", desc: "Developed an interactive Power BI dashboard integrating Copilot AI.", tech: ["Power BI", "K-Means", "RFM Analysis"] },
        { title: "Healthcare LLM RAG Pipeline", desc: "Architected a RAG pipeline to minimize AI hallucinations in medical informatics.", tech: ["AI Prompting", "RAG"] },
        { title: "GlucEase - HealthTech System Analysis", desc: "Managed the full Agile SDLC for a diabetes management solution.", tech: ["Agile SDLC", "UML"] },
        { title: "SQL Data Analysis Case Study", desc: "Leveraged PostgreSQL to perform complex data analysis and data cleaning.", tech: ["PostgreSQL", "SQL"] }
    ],
    experience: { role: "Information Systems & Digital Platforms Intern", company: "Sharjah Government Media Bureau", date: "May 2026 – Present", points: ["Mapping and optimizing digital media workflows using UML.", "Managing enterprise-level digital platforms.", "Applying AI prompt engineering to manage media archives."] },
    education: { uni: "Ajman University", degree: "BSc Information Systems and E-Business Management", date: "2022 – Expected 2026" },
    certs: [
        { name: "SAP S/4HANA Cloud Public", issuer: "SAP", date: "Apr 2026" },
        { name: "AWS Cloud Operations", issuer: "AWS", date: "Apr 2025" },
        { name: "Fundamentals of AI Agents", issuer: "Various", date: "May 2026" },
        { name: "Peer Tutoring Training", issuer: "Ajman University", date: "Oct 2025" },
        { name: "Digital Marketing & E-Commerce", issuer: "Google", date: "Oct 2023" }
    ]
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#E0E0E0] font-sans p-6 md:p-20">
      <div className="max-w-5xl mx-auto space-y-32">
        <section className="space-y-6">
          <h1 className="text-7xl font-extrabold">{data.name}</h1>
          <h2 className="text-2xl text-[#D4AF37]">{data.role}</h2>
          <p className="text-xl text-gray-400 max-w-2xl">{data.heroText}</p>
          <div className="flex gap-4">
            <a href="/cv.pdf" download="Zakaria_Alkhani_CV.pdf" className="px-6 py-3 rounded-lg bg-[#D4AF37] text-black font-semibold flex items-center gap-2"><Download className="w-5 h-5" /> Download CV</a>
            <a href="https://www.linkedin.com/in/zakaria-yahia-271073284" target="_blank" className="px-6 py-3 rounded-lg border border-gray-700 flex items-center gap-2"><Linkedin className="w-5 h-5" /> LinkedIn</a>
          </div>
        </section>

        <section id="about">
          <h3 className="text-4xl font-bold mb-12">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg">{data.about.map((p, i) => <p key={i}>{p}</p>)}</div>
        </section>

        <section id="education" className="bg-[#1A1A1A] rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-8">Education</h3>
            <h4 className="text-2xl font-bold text-[#D4AF37]">{data.education.uni}</h4>
            <p className="text-xl font-medium mt-2">{data.education.degree}</p>
            <p className="text-gray-400 mt-1">{data.education.date}</p>
        </section>

        <section id="skills" className="text-center">
            <h3 className="text-4xl font-bold mb-12">Skills & Tools</h3>
            <div className="flex flex-wrap justify-center gap-6">{data.skills.map((s, i) => <div key={i} className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-2xl p-6 flex flex-col items-center w-[150px] transition-all duration-300 hover:scale-110 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20">{s.icon}<span className="mt-4 text-sm text-gray-300">{s.name}</span></div>)}</div>
        </section>

        <section id="projects" className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-3xl p-12 text-center">
             <h3 className="text-4xl font-bold mb-12">Projects</h3>
             <h4 className="text-3xl font-bold mb-4">{data.projects[activeProj].title}</h4>
             <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">{data.projects[activeProj].desc}</p>
             <div className="flex justify-center gap-4"><button onClick={() => setActiveProj((activeProj - 1 + data.projects.length) % data.projects.length)} className="p-2 border rounded-full"><ChevronLeft /></button><button onClick={() => setActiveProj((activeProj + 1) % data.projects.length)} className="p-2 border rounded-full"><ChevronRight /></button></div>
        </section>

        <section id="experience" className="bg-[#D4AF37] text-black rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-8">Experience</h3>
            <h4 className="text-2xl font-bold mb-2">{data.experience.company}</h4>
            <p className="font-semibold mb-6">{data.experience.role}</p>
            <ul className="space-y-4">{data.experience.points.map((pt, i) => <li key={i} className="text-lg font-medium">• {pt}</li>)}</ul>
        </section>

        <section id="certs" className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-3xl p-12 text-center pb-20">
             <h3 className="text-4xl font-bold mb-12">Certifications</h3>
             <h4 className="text-xl font-bold text-white mb-4">{data.certs[activeCert].name}</h4>
             <p className="text-gray-400 mb-6">{data.certs[activeCert].issuer} | {data.certs[activeCert].date}</p>
             <div className="flex justify-center gap-4"><button onClick={() => setActiveCert((activeCert - 1 + data.certs.length) % data.certs.length)} className="p-2 border rounded-full"><ChevronLeft /></button><button onClick={() => setActiveCert((activeCert + 1) % data.certs.length)} className="p-2 border rounded-full"><ChevronRight /></button></div>
        </section>
      </div>
    </main>
  )
}
