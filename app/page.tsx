"use client"

import { useState } from "react"
import { Mail, Linkedin, Download, ChevronRight, ChevronLeft, Award, BookOpen, Briefcase, Code, Database, Layout, Server, Cpu } from "lucide-react"

export default function Home() {
  const [activeProj, setActiveProj] = useState(0)
  const [activeCert, setActiveCert] = useState(0)

  const data = {
    name: "Zakaria Alkhani",
    role: "Information Systems & E-Business Management",
    heroText: "Bridging the gap between technical system architecture and strategic business objectives through robust digital platforms and enterprise software.",
    about: [
      "I am an analytical Information Systems professional at Ajman University, specializing in translating complex organizational requirements into scalable technical architectures.",
      "My expertise spans full-stack development, database administration, and enterprise management, allowing me to build comprehensive solutions from the ground up.",
      "Whether I am mapping out system security goals or mentoring peers as a tutor, I bring a results-driven approach to ensuring operational reliability and efficiency."
    ],
    skills: [
      { name: "System Architecture", icon: <Layout className="w-6 h-6 text-blue-400" /> },
      { name: "SAP S/4HANA & ERP", icon: <Briefcase className="w-6 h-6 text-emerald-500" /> },
      { name: "Oracle APEX", icon: <Database className="w-6 h-6 text-red-400" /> },
      { name: "PostgreSQL", icon: <Database className="w-6 h-6 text-indigo-400" /> },
      { name: "Next.js & React", icon: <Code className="w-6 h-6 text-cyan-400" /> },
      { name: "Prolog (AI/Logic)", icon: <Cpu className="w-6 h-6 text-purple-400" /> },
      { name: "PlantUML", icon: <Layout className="w-6 h-6 text-pink-400" /> }
    ],
    projects: [
      { 
        title: "Smart Training Portal", 
        desc: "Engineered a comprehensive training portal for the Sharjah Government Media Bureau to streamline employee development and resource accessibility.", 
        tech: ["Enterprise Systems", "Portal Development", "UI/UX"] 
      },
      { 
        title: "Job Shadowing Framework", 
        desc: "Spearheaded the organizational framework and bilingual documentation for a government-level Job Shadowing Program, successfully bridging IT with business strategy.", 
        tech: ["System Architecture", "Business Analysis", "Documentation"] 
      },
      { 
        title: "Project Trustio", 
        desc: "Defined comprehensive system requirements and established non-functional security goals. Architected the system using PlantUML scripts and detailed UML use case diagrams.", 
        tech: ["PlantUML", "System Design", "Security"] 
      },
      { 
        title: "Enterprise Database Management", 
        desc: "Configured complex relational database tables and rigorous data validations utilizing Oracle APEX, alongside executing advanced PostgreSQL queries for data-driven case studies.", 
        tech: ["Oracle APEX", "PostgreSQL", "Data Analysis"] 
      }
    ],
    experience: [
      { 
        role: "Information Systems Intern", 
        company: "Sharjah Government Media Bureau", 
        date: "Mar 2026 – Aug 2026", 
        points: [
          "Spearheaded the 'Job Shadowing Program' from conceptualization to formal executive approval.", 
          "Engineered a Smart Training Portal and executed competitor pricing analysis for the Professional Media Diploma.", 
          "Finalized comprehensive bilingual documentation to officially hand over projects to senior stakeholders."
        ] 
      },
      { 
        role: "Peer Tutor", 
        company: "Ajman University", 
        date: "Oct 2025 – Jun 2026", 
        points: [
          "Mentored students and documented peer tutoring activities.", 
          "Authored professional job descriptions for tutoring work to assist peers.", 
          "Translated complex technical requirements into actionable, easy-to-understand lessons."
        ] 
      }
    ],
    education: { uni: "Ajman University", degree: "BSc Information Systems and E-Business Management", date: "Expected 2026" },
    certs: [
      { name: "SAP Dual Study Program", issuer: "SAP", date: "Jun 2026" },
      { name: "SAP S/4HANA Cloud Public Edition", issuer: "SAP", date: "2026" },
      { name: "Peer Tutoring Training", issuer: "Ajman University", date: "Oct 2025" }
    ]
  }

  return (
    <main className="relative min-h-screen bg-slate-950 text-[#E0E0E0] font-sans p-6 md:p-20 overflow-hidden selection:bg-teal-500/30">
      
      {/* INTERACTIVE AMBIENT BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-teal-600/20 rounded-full mix-blend-screen blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-600/20 rounded-full mix-blend-screen blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-32">
        
        {/* HERO SECTION */}
        <section className="space-y-8 pt-10">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter">
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              {data.name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300 border-l-4 border-teal-500 pl-4">
            {data.role}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            {data.heroText}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="/cv.pdf" download="Zakaria_Alkhani_CV.pdf" className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105 hover:border-teal-400/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]">
              <Download className="w-5 h-5" /> Download CV
            </a>
            <a href="https://www.linkedin.com/in/zakaria-yahia-271073284" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 flex items-center gap-2 transition-all hover:bg-white/5 hover:text-white hover:border-slate-400">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="space-y-10">
          <h3 className="text-4xl font-bold border-b border-white/10 pb-4 inline-block">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 text-slate-400 text-lg leading-relaxed">
            {data.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-10">
          <h3 className="text-4xl font-bold border-b border-white/10 pb-4 inline-block">Tech Stack & Tools</h3>
          <div className="flex flex-wrap gap-4">
            {data.skills.map((s, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full px-6 py-3 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:border-teal-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] cursor-default">
                {s.icon}
                <span className="font-medium text-slate-200">{s.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS CAROUSEL */}
        <section id="projects" className="space-y-10">
           <h3 className="text-4xl font-bold border-b border-white/10 pb-4 inline-block">Featured Projects</h3>
           <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
             
             <div className="relative z-10">
                <h4 className="text-3xl font-bold mb-4 text-white">{data.projects[activeProj].title}</h4>
                <p className="text-slate-400 text-lg mb-8 max-w-2xl min-h-[80px]">
                  {data.projects[activeProj].desc}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {data.projects[activeProj].tech.map((t, i) => (
                    <span key={i} className="px-4 py-1.5 text-sm font-semibold text-teal-300 bg-teal-900/30 rounded-full border border-teal-500/30">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setActiveProj((activeProj - 1 + data.projects.length) % data.projects.length)} className="p-3 border border-slate-700 rounded-full hover:bg-slate-800 hover:border-teal-500/50 transition-all text-slate-300 hover:text-white">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={() => setActiveProj((activeProj + 1) % data.projects.length)} className="p-3 border border-slate-700 rounded-full hover:bg-slate-800 hover:border-teal-500/50 transition-all text-slate-300 hover:text-white">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
             </div>
           </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="space-y-10">
            <h3 className="text-4xl font-bold border-b border-white/10 pb-4 inline-block">Experience</h3>
            <div className="grid gap-8">
              {data.experience.map((exp, i) => (
                <div key={i} className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800/80 hover:border-blue-500/50">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                      <h5 className="text-lg text-teal-400 font-medium">{exp.company}</h5>
                    </div>
                    <span className="text-sm font-semibold text-slate-400 bg-slate-950 px-4 py-2 rounded-full border border-slate-800 whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((pt, idx) => (
                      <li key={idx} className="text-slate-400 flex items-start gap-3">
                        <span className="text-teal-500 mt-1.5">•</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <div className="grid md:grid-cols-2 gap-8 pb-20">
          <section id="education" className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 transition-all hover:border-emerald-500/50">
              <BookOpen className="w-10 h-10 text-emerald-400 mb-6" />
              <h3 className="text-3xl font-bold mb-6 text-white">Education</h3>
              <h4 className="text-xl font-bold text-slate-200 mb-2">{data.education.uni}</h4>
              <p className="text-lg text-slate-400 mb-2">{data.education.degree}</p>
              <p className="text-slate-500 font-medium">{data.education.date}</p>
          </section>

          <section id="certs" className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 transition-all hover:border-purple-500/50 relative overflow-hidden">
              <Award className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-3xl font-bold mb-6 text-white">Certifications</h3>
              <div className="min-h-[120px]">
                <h4 className="text-xl font-bold text-slate-200 mb-2">{data.certs[activeCert].name}</h4>
                <p className="text-slate-400">{data.certs[activeCert].issuer} • {data.certs[activeCert].date}</p>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={() => setActiveCert((activeCert - 1 + data.certs.length) % data.certs.length)} className="p-2 border border-slate-700 rounded-full hover:bg-slate-800 hover:border-purple-500/50 transition-all text-slate-300 hover:text-white">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => setActiveCert((activeCert + 1) % data.certs.length)} className="p-2 border border-slate-700 rounded-full hover:bg-slate-800 hover:border-purple-500/50 transition-all text-slate-300 hover:text-white">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
          </section>
        </div>

      </div>
    </main>
  )
}
