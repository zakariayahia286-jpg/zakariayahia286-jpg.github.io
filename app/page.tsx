"use client"

import { useState } from "react"
import { Mail, Linkedin, Download, ChevronRight, ChevronLeft, Award, BookOpen, Briefcase, Code, Database, Layout } from "lucide-react"

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')
  const [activeProj, setActiveProj] = useState(0)
  const [activeCert, setActiveCert] = useState(0)
  const isAr = lang === 'ar'

  const content = {
    en: {
      nav: ["About", "Skills", "Projects", "Experience", "Education", "Certs"],
      toggleBtn: "AR",
      status: "Interning @ Sharjah Government Media | Ajman University",
      name: "Zakaria Alkhani",
      role: "Information Systems & E-Business Management",
      heroText: "4th-year student at Ajman University specializing in mapping complex systems, integrating emerging AI technologies, and optimizing enterprise digital platforms.",
      buttons: { cv: "Download CV", touch: "Get In Touch", linkedin: "LinkedIn" },
      aboutTitle: "About Me",
      aboutText: ["Energetic Information Systems professional bridging technical architecture with business logic.", "Peer tutor translating technical requirements into actionable lessons.", "Analytical baker perfecting ingredient ratios for brownies and Cinnabons."],
      skillsTitle: "Skills & Tools",
      skills: [
        { name: "UML Architecture", icon: <Layout className="w-8 h-8 text-blue-400" /> },
        { name: "SAP S/4HANA", icon: <Briefcase className="w-8 h-8 text-blue-500" /> },
        { name: "PostgreSQL", icon: <Database className="w-8 h-8 text-indigo-400" /> },
        { name: "Power BI", icon: <Database className="w-8 h-8 text-yellow-500" /> },
        { name: "AWS Cloud", icon: <Code className="w-8 h-8 text-orange-400" /> },
        { name: "Prompt Engineering", icon: <Code className="w-8 h-8 text-purple-400" /> },
        { name: "JavaScript / HTML", icon: <Code className="w-8 h-8 text-yellow-400" /> }
      ],
      projTitle: "Projects",
      projects: [
        { title: "Trustio - Secure Marketplace", desc: "Sustainable UAE web marketplace. Features: Custom Emirates ID verification, RBAC, and secure role-based buyer/seller dashboards.", tech: ["Wix Studio", "JS", "RBAC"] },
        { title: "Customer Segmentation & AI Dashboard", desc: "Power BI integration with Copilot AI. Used K-Means clustering and RFM analysis to segment customers into 6 behavioral groups.", tech: ["Power BI", "K-Means", "RFM"] },
        { title: "Healthcare LLM RAG Pipeline", desc: "Architected a Retrieval-Augmented Generation pipeline to mitigate AI hallucinations. Focus: Defense-in-depth prompting and data integrity.", tech: ["RAG", "Prompt Eng"] }
      ],
      expTitle: "Experience",
      expCard: { role: "IS & Digital Platforms Intern", company: "Sharjah Govt Media Bureau", points: ["Optimizing workflows using UML.", "Managing enterprise platforms.", "AI-driven media archive retrieval."] },
      eduTitle: "Education",
      eduCard: { uni: "Ajman University", degree: "BSc IS & E-Business Management" },
      certTitle: "Certifications",
      certs: [
        { name: "SAP S/4HANA Cloud Public", issuer: "SAP", date: "2026" },
        { name: "AWS Cloud Operations", issuer: "AWS", date: "2025" },
        { name: "AI Agents & Deep Learning", issuer: "Various", date: "2026" }
      ]
    },
    ar: {
      nav: ["حول", "المهارات", "المشاريع", "الخبرة", "التعليم", "الشهادات"],
      toggleBtn: "EN",
      status: "متدرب @ المكتب الإعلامي للشارقة | جامعة عجمان",
      name: "زكريا الخاني",
      role: "نظم المعلومات وإدارة الأعمال الإلكترونية",
      heroText: "طالب في السنة الرابعة في جامعة عجمان، متخصص في تخطيط الأنظمة ودمج الذكاء الاصطناعي.",
      buttons: { cv: "تحميل CV", touch: "تواصل معي", linkedin: "لينكد إن" },
      aboutTitle: "نبذة عني",
      aboutText: ["محترف نظم معلومات يركز على سد الفجوة بين البنية التقنية ومنطق الأعمال.", "معلم أقران يترجم المتطلبات التقنية إلى دروس سهلة.", "أطبق الدقة التحليلية في الخبز والمشاريع التقنية."],
      skillsTitle: "المهارات",
      skills: [{ name: "بنية UML", icon: <Layout className="w-8 h-8 text-blue-400" /> }, { name: "SAP S/4HANA", icon: <Briefcase className="w-8 h-8 text-blue-500" /> }, { name: "PostgreSQL", icon: <Database className="w-8 h-8 text-indigo-400" /> }, { name: "Power BI", icon: <Database className="w-8 h-8 text-yellow-500" /> }, { name: "AWS Cloud", icon: <Code className="w-8 h-8 text-orange-400" /> }, { name: "هندسة الأوامر", icon: <Code className="w-8 h-8 text-purple-400" /> }, { name: "JS/HTML", icon: <Code className="w-8 h-8 text-yellow-400" /> }],
      projTitle: "المشاريع",
      projects: [{ title: "Trustio - سوق آمن", desc: "منصة تجارة إلكترونية مستدامة، التحقق من الهوية الإماراتية، ونظام أدوار (RBAC).", tech: ["Wix", "JS"] }, { title: "لوحة تحكم ذكاء الأعمال", desc: "تحليل العملاء باستخدام K-Means وPower BI.", tech: ["Power BI", "RFM"] }, { title: "نظام RAG الطبي", desc: "بناء مسار لتقليل هلوسة الذكاء الاصطناعي في الطب.", tech: ["RAG", "Prompting"] }],
      expTitle: "الخبرة",
      expCard: { role: "متدرب نظم المعلومات", company: "المكتب الإعلامي لحكومة الشارقة", points: ["تحسين سير العمل باستخدام UML.", "إدارة المنصات المؤسسية.", "أتمتة الأرشيف الإعلامي."] },
      eduTitle: "التعليم",
      eduCard: { uni: "جامعة عجمان", degree: "بكالوريوس نظم معلومات" },
      certTitle: "الشهادات",
      certs: [{ name: "SAP S/4HANA", issuer: "SAP", date: "2026" }, { name: "AWS Cloud", issuer: "AWS", date: "2025" }, { name: "ذكاء اصطناعي", issuer: "متعدد", date: "2026" }]
    }
  }

  const t = content[lang]
  const next = (c: any, setter: any, cur: any) => setter((cur + 1) % c.length)
  const prev = (c: any, setter: any, cur: any) => setter((cur - 1 + c.length) % c.length)

  return (
    <main className={`min-h-screen bg-[#050505] text-[#E0E0E0] ${isAr ? 'text-right' : 'text-left'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <nav className="fixed w-full bg-[#050505]/80 backdrop-blur-md z-50 border-b border-[#1A1A1A] px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-[#D4AF37]">ZA</span>
        <button onClick={() => setLang(isAr ? 'en' : 'ar')} className="px-4 py-1 rounded-full border border-gray-700 text-sm">{isAr ? 'EN' : 'AR'}</button>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 space-y-32">
        {/* Hero */}
        <section className="space-y-6">
          <h1 className="text-7xl font-extrabold">{t.name}</h1>
          <p className="text-xl text-gray-400">{t.heroText}</p>
          <a href="/cv.pdf" download="Zakaria_Alkhani_CV.pdf" className="inline-block px-6 py-3 rounded-lg bg-[#D4AF37] text-black font-semibold"><Download className="inline mr-2" /> {t.buttons.cv}</a>
        </section>

        {/* Interactive Skills */}
        <section id="sec-1" className="pt-20 text-center">
          <h3 className="text-4xl font-bold mb-12">{t.skillsTitle}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {t.skills.map((s, i) => (
              <div key={i} className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-2xl p-6 flex flex-col items-center w-[150px] transition-all hover:scale-110 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20">
                {s.icon}<span className="mt-4 text-sm text-gray-300">{s.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Carousels */}
        <section className="grid md:grid-cols-2 gap-12 pt-20">
          <div className="bg-[#0F0F0F] p-8 rounded-3xl">
             <h4 className="text-2xl font-bold mb-4">{t.projects[activeProj].title}</h4>
             <p className="text-gray-400 mb-6 h-20">{t.projects[activeProj].desc}</p>
             <button onClick={() => prev(t.projects, setActiveProj, activeProj)} className="p-2 border rounded-full mr-2"><ChevronLeft /></button>
             <button onClick={() => next(t.projects, setActiveProj, activeProj)} className="p-2 border rounded-full"><ChevronRight /></button>
          </div>
          <div className="bg-[#0F0F0F] p-8 rounded-3xl">
             <h4 className="text-2xl font-bold mb-4">{t.certs[activeCert].name}</h4>
             <p className="text-gray-400 mb-6 h-20">{t.certs[activeCert].issuer}</p>
             <button onClick={() => prev(t.certs, setActiveCert, activeCert)} className="p-2 border rounded-full mr-2"><ChevronLeft /></button>
             <button onClick={() => next(t.certs, setActiveCert, activeCert)} className="p-2 border rounded-full"><ChevronRight /></button>
          </div>
        </section>
      </div>
    </main>
  )
}
