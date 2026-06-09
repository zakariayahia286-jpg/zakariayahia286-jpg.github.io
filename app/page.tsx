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
      buttons: { cv: "Download CV", touch: "Get In Touch", linkedin: "in LinkedIn" },
      aboutTitle: "About Me",
      aboutText: [
        "I am an energetic and analytical Information Systems professional. I specialize in bridging the gap between technical architecture and real-world business logic. My focus is on ensuring AI reliability, analyzing complex data, and streamlining enterprise operations.",
        "As a peer tutor, I assist other students by translating complex technical requirements into actionable, easy-to-understand lessons.",
        "When I step away from the digital world, I apply that same analytical exactness to baking, constantly experimenting with ingredient ratios to perfect my signature crinkly-top brownies and Cinnabons."
      ],
      stats: [
        { label: "Enterprise Projects", value: "5+" },
        { label: "Year of Study", value: "4th" },
        { label: "SAP Certified", value: "Dual Study" },
        { label: "Tech Tutor", value: "Active" }
      ],
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
        { title: "Trustio - Secure Marketplace", desc: "Developed a secure, sustainability-focused web application tailored for the UAE market. Engineered a modular backend architecture to automate role-based access control (RBAC).", tech: ["Wix Studio", "JavaScript", "RBAC", "Database Design"] },
        { title: "Customer Segmentation & AI Dashboard", desc: "Developed an interactive Power BI dashboard integrating Copilot AI. Implemented K-Means clustering algorithms and RFM analysis to segment customers.", tech: ["Power BI", "K-Means", "RFM Analysis", "Data Visualization"] },
        { title: "Healthcare LLM RAG Pipeline", desc: "Architected a Retrieval-Augmented Generation (RAG) pipeline designed to minimize AI hallucinations in medical informatics using advanced defense-in-depth prompting.", tech: ["AI Prompting", "RAG", "System Logic"] },
        { title: "GlucEase - HealthTech System Analysis", desc: "Managed the full Agile SDLC for a diabetes management solution. Created comprehensive UML diagrams and conducted ROI analysis aligning with UN goals.", tech: ["Agile SDLC", "UML", "System Analysis"] },
        { title: "SQL Data Analysis Case Study", desc: "Leveraged PostgreSQL to perform complex data analysis, utilizing advanced JOINs, subqueries, and aggregate functions. Conducted rigorous data cleaning.", tech: ["PostgreSQL", "Data Cleaning", "Advanced SQL"] }
      ],
      expTitle: "Experience",
      expCard: { role: "Information Systems & Digital Platforms Intern", company: "Sharjah Government Media Bureau", date: "May 2026 – Present", points: ["Mapping and optimizing digital media workflows and content distribution systems using UML.", "Managing and structuring enterprise-level digital platforms to support e-business objectives.", "Applying advanced AI prompt engineering to assist in the structured retrieval of media archives."] },
      eduTitle: "Education",
      eduCard: { uni: "Ajman University", degree: "BSc Information Systems and E-Business Management", date: "2022 – Expected 2026", courses: "Relevant Coursework: Enterprise Systems, E-Commerce Infrastructure, Database Management, System Analysis & Design." },
      certTitle: "Courses & Certifications",
      certs: [
        { name: "SAP S/4HANA Cloud Public", issuer: "SAP", date: "Apr 2026" },
        { name: "AWS Academy Cloud Operations", issuer: "AWS", date: "Apr 2025" },
        { name: "Fundamentals of AI Agents", issuer: "Various", date: "May 2026" },
        { name: "Peer Tutoring Training", issuer: "Ajman University", date: "Oct 2025" },
        { name: "Foundations of Digital Marketing", issuer: "Google", date: "Oct 2023" }
      ]
    },
    ar: {
      nav: ["حول", "المهارات", "المشاريع", "الخبرة", "التعليم", "الشهادات"],
      toggleBtn: "EN",
      status: "متدرب @ المكتب الإعلامي لحكومة الشارقة | جامعة عجمان",
      name: "زكريا الخاني",
      role: "نظم المعلومات وإدارة الأعمال الإلكترونية",
      heroText: "طالب في السنة الرابعة في جامعة عجمان، متخصص في تخطيط الأنظمة المعقدة، ودمج تقنيات الذكاء الاصطناعي، وتحسين المنصات الرقمية للمؤسسات.",
      buttons: { cv: "تحميل السيرة الذاتية", touch: "تواصل معي", linkedin: "لينكد إن" },
      aboutTitle: "نبذة عني",
      aboutText: ["أنا متخصص حيوي وتحليلي في نظم المعلومات. أركز على سد الفجوة بين البنية التقنية ومنطق الأعمال الفعلي، وضمان موثوقية الذكاء الاصطناعي وتبسيط عمليات المؤسسات.", "كمعلم أقران، أساعد الطلاب الآخرين من خلال ترجمة المتطلبات التقنية المعقدة إلى دروس قابلة للتطبيق وسهلة الفهم.", "بعيداً عن الشاشات، أطبق نفس الدقة التحليلية في الخبز، حيث أقوم بتجربة نسب المكونات لإتقان وصفاتي الخاصة."],
      stats: [{ label: "مشاريع مؤسسية", value: "+5" }, { label: "سنة الدراسة", value: "الرابعة" }, { label: "برنامج SAP", value: "معتمد" }, { label: "معلم تقني", value: "نشط" }],
      skillsTitle: "المهارات والأدوات",
      skills: [{ name: "بنية UML", icon: <Layout className="w-8 h-8 text-blue-400" /> }, { name: "SAP S/4HANA", icon: <Briefcase className="w-8 h-8 text-blue-500" /> }, { name: "PostgreSQL", icon: <Database className="w-8 h-8 text-indigo-400" /> }, { name: "Power BI", icon: <Database className="w-8 h-8 text-yellow-500" /> }, { name: "AWS Cloud", icon: <Code className="w-8 h-8 text-orange-400" /> }, { name: "هندسة الأوامر", icon: <Code className="w-8 h-8 text-purple-400" /> }, { name: "JavaScript / HTML", icon: <Code className="w-8 h-8 text-yellow-400" /> }],
      projTitle: "المشاريع",
      projects: [{ title: "Trustio - منصة تجارة إلكترونية آمنة", desc: "تطوير تطبيق ويب آمن ومستدام مصمم لسوق الإمارات. هندسة بنية خلفية لأتمتة التحكم في الوصول المبني على الأدوار (RBAC).", tech: ["Wix Studio", "JavaScript", "RBAC"] }, { title: "لوحة تحكم Power BI لتصنيف العملاء", desc: "تطوير لوحة تحكم تفاعلية تدمج Copilot AI. تنفيذ خوارزميات K-Means وتحليل RFM لتقسيم العملاء.", tech: ["Power BI", "K-Means", "تحليل RFM"] }, { title: "تخفيف الهلوسة في نماذج الرعاية الصحية (RAG)", desc: "تصميم مسار توليد معزز بالاسترجاع (RAG) لتقليل هلوسة الذكاء الاصطناعي في المعلوماتية الطبية.", tech: ["هندسة الأوامر", "RAG"] }, { title: "تحليل وتصميم نظام GlucEase الصحي", desc: "إدارة دورة حياة تطوير البرمجيات لحل إدارة مرض السكري. إنشاء مخططات UML وتحليل العائد على الاستثمار.", tech: ["Agile SDLC", "UML", "تحليل الأنظمة"] }, { title: "دراسة حالة تحليل بيانات SQL", desc: "استخدام PostgreSQL لإجراء تحليل بيانات معقد وتنظيف البيانات لتحسين دقة التقارير.", tech: ["PostgreSQL", "تنظيف البيانات", "SQL متقدم"] }],
      expTitle: "الخبرة المهنية",
      expCard: { role: "متدرب في نظم المعلومات والمنصات الرقمية", company: "المكتب الإعلامي لحكومة الشارقة", date: "مايو 2026 – الحاضر", points: ["تخطيط وتحسين مسارات عمل الوسائط الرقمية باستخدام مخططات UML.", "إدارة وهيكلة المنصات الرقمية لدعم أهداف الأعمال الإلكترونية.", "تطبيق تقنيات هندسة الأوامر لهيكلة واسترجاع الأرشيف الإعلامي."] },
      eduTitle: "التعليم",
      eduCard: { uni: "جامعة عجمان", degree: "بكالوريوس نظم المعلومات وإدارة الأعمال الإلكترونية", date: "2022 – المتوقع 2026", courses: "المقررات: أنظمة المؤسسات، البنية التحتية للتجارة الإلكترونية، إدارة قواعد البيانات، تحليل وتصميم الأنظمة." },
      certTitle: "الدورات والشهادات",
      certs: [{ name: "برنامج SAP S/4HANA Cloud Public", issuer: "SAP", date: "أبريل 2026" }, { name: "عمليات السحابة من أكاديمية AWS", issuer: "AWS", date: "أبريل 2025" }, { name: "أساسيات وكلاء الذكاء الاصطناعي", issuer: "متعدد", date: "مايو 2026" }, { name: "برنامج تدريب تعليم الأقران", issuer: "جامعة عجمان", date: "أكتوبر 2025" }, { name: "أساسيات التسويق الرقمي", issuer: "Google", date: "أكتوبر 2023" }]
    }
  }

  const t = content[lang]
  const nextProj = () => setActiveProj((prev) => (prev + 1) % t.projects.length)
  const prevProj = () => setActiveProj((prev) => (prev - 1 + t.projects.length) % t.projects.length)
  const nextCert = () => setActiveCert((prev) => (prev + 1) % t.certs.length)
  const prevCert = () => setActiveCert((prev) => (prev - 1 + t.certs.length) % t.certs.length)
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main className={`min-h-screen bg-[#050505] text-[#E0E0E0] font-sans ${isAr ? 'text-right' : 'text-left'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <nav className="fixed top-0 w-full bg-[#050505]/80 backdrop-blur-md z-50 border-b border-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold tracking-wider text-xl"><span className="text-[#D4AF37]">ZA</span> &lt;/&gt;</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {t.nav.map((item, i) => <button key={i} onClick={() => scrollTo(`sec-${i}`)}>{item}</button>)}
          </div>
          <button onClick={() => setLang(isAr ? 'en' : 'ar')} className="px-4 py-1 rounded-full border border-gray-700 hover:border-[#D4AF37] text-sm">{isAr ? 'EN' : 'AR'}</button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        <section className="space-y-8 pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] border border-[#222] text-sm">{t.status}</div>
          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">{t.name}</h1>
          <h2 className="text-2xl text-[#D4AF37] font-medium">{t.role}</h2>
          <p className="text-xl text-gray-400 max-w-2xl">{t.heroText}</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="/cv.pdf" download="Zakaria_Alkhani_CV.pdf" className="px-6 py-3 rounded-lg bg-[#D4AF37] text-black font-semibold flex items-center gap-2"><Download className="w-5 h-5" /> {t.buttons.cv}</a>
            <a href="mailto:zakariayahia52@gmail.com" className="px-6 py-3 rounded-lg border border-gray-700">{t.buttons.touch}</a>
          </div>
        </section>

        <section id="sec-0" className="pt-20">
          <h3 className="text-4xl font-bold mb-12">{t.aboutTitle}</h3>
          <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg leading-relaxed">{t.aboutText.map((p, i) => <p key={i}>{p}</p>)}</div>
        </section>

        <section id="sec-1" className="pt-20 text-center">
            <h3 className="text-4xl font-bold mb-12">{t.skillsTitle}</h3>
            <div className="flex flex-wrap justify-center gap-6">{t.skills.map((s, i) => <div key={i} className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-2xl p-6 flex flex-col items-center w-[150px]">{s.icon}<span className="mt-4 text-sm text-gray-300">{s.name}</span></div>)}</div>
        </section>

        <section id="sec-2" className="pt-20">
          <h3 className="text-4xl font-bold mb-12 text-center">{t.projTitle}</h3>
          <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-3xl p-12 relative">
             <h4 className="text-3xl font-bold mb-4">{t.projects[activeProj].title}</h4>
             <p className="text-gray-400 text-lg mb-8">{t.projects[activeProj].desc}</p>
             <div className="flex gap-4"><button onClick={prevProj}><ChevronLeft /></button><button onClick={nextProj}><ChevronRight /></button></div>
          </div>
        </section>

        <section id="sec-3" className="pt-20">
          <h3 className="text-4xl font-bold mb-12 text-center">{t.expTitle}</h3>
          <div className="bg-[#D4AF37] text-black rounded-3xl p-12">
            <h4 className="text-2xl font-bold mb-2">{t.expCard.company}</h4>
            <p className="font-semibold mb-6">{t.expCard.role}</p>
            <ul className="space-y-4">{t.expCard.points.map((pt, i) => <li key={i} className="flex gap-3 text-lg font-medium">• {pt}</li>)}</ul>
          </div>
        </section>

        <section id="sec-4" className="pt-20">
          <h3 className="text-4xl font-bold mb-12 text-center">{t.eduTitle}</h3>
          <div className="bg-white text-black rounded-3xl p-12">
             <h4 className="text-3xl font-bold">{t.eduCard.uni}</h4>
             <p className="text-xl font-bold text-[#8C7323]">{t.eduCard.degree}</p>
          </div>
        </section>

        <section id="sec-5" className="pt-20 pb-20">
          <h3 className="text-4xl font-bold mb-12 text-center">{t.certTitle}</h3>
          <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-3xl p-8 flex flex-col items-center">
             <h4 className="text-xl font-bold text-white mb-4">{t.certs[activeCert].name}</h4>
             <div className="flex gap-4"><button onClick={prevCert}><ChevronLeft /></button><button onClick={nextCert}><ChevronRight /></button></div>
          </div>
        </section>
      </div>
    </main>
  )
}
