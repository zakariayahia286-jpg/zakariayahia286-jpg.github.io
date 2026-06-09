"use client"

import { useState } from "react"
import { Mail, MapPin, Linkedin, Download, ChevronRight, ChevronLeft, ExternalLink, Award, BookOpen, Briefcase, Code, Database, Layout } from "lucide-react"

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
        {
          title: "Trustio - Secure Marketplace",
          desc: "Developed a secure, sustainability-focused web application tailored for the UAE market. Engineered a modular backend architecture to automate role-based access control (RBAC) and implemented custom Emirates ID verification.",
          tech: ["Wix Studio", "JavaScript", "RBAC", "Database Design"]
        },
        {
          title: "Customer Segmentation & AI Dashboard",
          desc: "Developed an interactive Power BI dashboard integrating Copilot AI. Implemented K-Means clustering algorithms and RFM analysis to segment customers into six distinct behavioral groups based on spending.",
          tech: ["Power BI", "K-Means", "RFM Analysis", "Data Visualization"]
        },
        {
          title: "Healthcare LLM RAG Pipeline",
          desc: "Architected a Retrieval-Augmented Generation (RAG) pipeline designed to minimize AI hallucinations in medical informatics using advanced defense-in-depth prompting strategies.",
          tech: ["AI Prompting", "RAG", "System Logic"]
        },
        {
          title: "GlucEase - HealthTech System Analysis",
          desc: "Managed the full Agile SDLC for a diabetes management solution. Created comprehensive UML diagrams and conducted ROI analysis aligning with UN Sustainable Development Goal 3.",
          tech: ["Agile SDLC", "UML", "System Analysis"]
        },
        {
          title: "SQL Data Analysis Case Study",
          desc: "Leveraged PostgreSQL to perform complex data analysis, utilizing advanced JOINs, subqueries, and aggregate functions. Conducted rigorous data cleaning to improve reporting accuracy.",
          tech: ["PostgreSQL", "Data Cleaning", "Advanced SQL"]
        }
      ],
      expTitle: "Experience",
      expCard: {
        role: "Information Systems & Digital Platforms Intern",
        company: "Sharjah Government Media Bureau",
        date: "May 2026 – Present",
        points: [
          "Mapping and optimizing digital media workflows and content distribution systems using UML (Activity and Use Case diagrams).",
          "Managing and structuring enterprise-level digital platforms to support e-business objectives.",
          "Applying advanced AI prompt engineering to assist in the structured retrieval and summarization of media archives."
        ]
      },
      eduTitle: "Education",
      eduCard: {
        uni: "Ajman University",
        degree: "BSc Information Systems and E-Business Management",
        date: "2022 – Expected 2026",
        courses: "Relevant Coursework: Enterprise Systems, E-Commerce Infrastructure, Database Management, System Analysis & Design."
      },
      certTitle: "Courses & Certifications",
      certs: [
        { name: "SAP Dual Study Program - S/4HANA Cloud Public", issuer: "SAP", date: "Apr 2026" },
        { name: "AWS Academy Cloud Operations", issuer: "AWS", date: "Apr 2025" },
        { name: "Fundamentals of AI Agents & Deep Learning", issuer: "Various", date: "May 2026" },
        { name: "Peer Tutoring Training Program", issuer: "Ajman University", date: "Oct 2025" },
        { name: "Foundations of Digital Marketing and E-Commerce", issuer: "Google", date: "Oct 2023" }
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
      aboutText: [
        "أنا متخصص حيوي وتحليلي في نظم المعلومات. أركز على سد الفجوة بين البنية التقنية ومنطق الأعمال الفعلي، وضمان موثوقية الذكاء الاصطناعي وتبسيط عمليات المؤسسات.",
        "كمعلم أقران، أساعد الطلاب الآخرين من خلال ترجمة المتطلبات التقنية المعقدة إلى دروس قابلة للتطبيق وسهلة الفهم.",
        "بعيداً عن الشاشات، أطبق نفس الدقة التحليلية في الخبز، حيث أقوم بتجربة نسب المكونات لإتقان وصفاتي الخاصة."
      ],
      stats: [
        { label: "مشاريع مؤسسية", value: "+5" },
        { label: "سنة الدراسة", value: "الرابعة" },
        { label: "برنامج SAP", value: "معتمد" },
        { label: "معلم تقني", value: "نشط" }
      ],
      skillsTitle: "المهارات والأدوات",
      skills: [
        { name: "بنية UML", icon: <Layout className="w-8 h-8 text-blue-400" /> },
        { name: "SAP S/4HANA", icon: <Briefcase className="w-8 h-8 text-blue-500" /> },
        { name: "PostgreSQL", icon: <Database className="w-8 h-8 text-indigo-400" /> },
        { name: "Power BI", icon: <Database className="w-8 h-8 text-yellow-500" /> },
        { name: "AWS Cloud", icon: <Code className="w-8 h-8 text-orange-400" /> },
        { name: "هندسة الأوامر", icon: <Code className="w-8 h-8 text-purple-400" /> },
        { name: "JavaScript / HTML", icon: <Code className="w-8 h-8 text-yellow-400" /> }
      ],
      projTitle: "المشاريع",
      projects: [
        {
          title: "Trustio - منصة تجارة إلكترونية آمنة",
          desc: "تطوير تطبيق ويب آمن ومستدام مصمم لسوق الإمارات. هندسة بنية خلفية لأتمتة التحكم في الوصول المبني على الأدوار (RBAC) وتنفيذ التحقق من الهوية الإماراتية.",
          tech: ["Wix Studio", "JavaScript", "RBAC", "تصميم قواعد البيانات"]
        },
        {
          title: "لوحة تحكم Power BI لتصنيف العملاء",
          desc: "تطوير لوحة تحكم تفاعلية تدمج Copilot AI. تنفيذ خوارزميات K-Means وتحليل RFM لتقسيم العملاء إلى ست مجموعات سلوكية.",
          tech: ["Power BI", "K-Means", "تحليل RFM", "تصور البيانات"]
        },
        {
          title: "تخفيف الهلوسة في نماذج الرعاية الصحية (RAG)",
          desc: "تصميم مسار توليد معزز بالاسترجاع (RAG) لتقليل هلوسة الذكاء الاصطناعي في المعلوماتية الطبية باستخدام استراتيجيات الأوامر المتقدمة.",
          tech: ["هندسة الأوامر", "RAG", "منطق الأنظمة"]
        },
        {
          title: "تحليل وتصميم نظام GlucEase الصحي",
          desc: "إدارة دورة حياة تطوير البرمجيات (SDLC) لحل إدارة مرض السكري. إنشاء مخططات UML شاملة وتحليل العائد على الاستثمار.",
          tech: ["Agile SDLC", "UML", "تحليل الأنظمة"]
        },
        {
          title: "دراسة حالة تحليل بيانات SQL",
          desc: "استخدام PostgreSQL لإجراء تحليل بيانات معقد وتنظيف البيانات لتحسين دقة التقارير باستخدام عمليات الربط (JOINs) والوظائف التجميعية.",
          tech: ["PostgreSQL", "تنظيف البيانات", "SQL متقدم"]
        }
      ],
      expTitle: "الخبرة المهنية",
      expCard: {
        role: "متدرب في نظم المعلومات والمنصات الرقمية",
        company: "المكتب الإعلامي لحكومة الشارقة",
        date: "مايو 2026 – الحاضر",
        points: [
          "تخطيط وتحسين مسارات عمل الوسائط الرقمية باستخدام مخططات UML.",
          "إدارة وهيكلة المنصات الرقمية لدعم أهداف الأعمال الإلكترونية.",
          "تطبيق تقنيات هندسة الأوامر المتقدمة لهيكلة واسترجاع الأرشيف الإعلامي بفعالية."
        ]
      },
      eduTitle: "التعليم",
      eduCard: {
        uni: "جامعة عجمان",
        degree: "بكالوريوس نظم المعلومات وإدارة الأعمال الإلكترونية",
        date: "2022 – المتوقع 2026",
        courses: "المقررات ذات الصلة: أنظمة المؤسسات، البنية التحتية للتجارة الإلكترونية، إدارة قواعد البيانات، تحليل وتصميم الأنظمة."
      },
      certTitle: "الدورات والشهادات",
      certs: [
        { name: "برنامج SAP المزدوج - S/4HANA Cloud Public", issuer: "SAP", date: "أبريل 2026" },
        { name: "عمليات السحابة من أكاديمية AWS", issuer: "AWS", date: "أبريل 2025" },
        { name: "أساسيات وكلاء الذكاء الاصطناعي والتعلم العميق", issuer: "متعدد", date: "مايو 2026" },
        { name: "برنامج تدريب تعليم الأقران", issuer: "جامعة عجمان", date: "أكتوبر 2025" },
        { name: "أساسيات التسويق الرقمي والتجارة الإلكترونية", issuer: "Google", date: "أكتوبر 2023" }
      ]
    }
  }

  const t = content[lang]

  const nextProj = () => setActiveProj((prev) => (prev + 1) % t.projects.length)
  const prevProj = () => setActiveProj((prev) => (prev - 1 + t.projects.length) % t.projects.length)

  const nextCert = () => setActiveCert((prev) => (prev + 1) % t.certs.length)
  const prevCert = () => setActiveCert((prev) => (prev - 1 + t.certs.length) % t.certs.length)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className={`min-h-screen bg-[#050505] text-[#E0E0E0] font-sans ${isAr ? 'text-right' : 'text-left'}`} dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full bg-[#050505]/80 backdrop-blur-md z-50 border-b border-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold tracking-wider text-xl">
            <span className="text-[#D4AF37]">ZA</span> &lt;/&gt;
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {t.nav.map((item, i) => (
              <button key={i} onClick={() => scrollTo(`sec-${i}`)} className="hover:text-white transition-colors">{item}</button>
            ))}
          </div>
          <button 
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="px-4 py-1 rounded-full border border-gray-700 hover:border-[#D4AF37] hover:text-[#D4AF37] text-sm transition-all"
          >
            {isAr ? 'EN' : 'AR'}
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        
        {/* Hero Section */}
        <section className="space-y-8 flex flex-col items-start pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] border border-[#222] text-sm text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            {t.status}
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            {t.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-[#D4AF37]">{t.role}</h2>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">{t.heroText}</p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="/cv.pdf" download="Zakaria_Alkhani_CV.pdf" className="px-6 py-3 rounded-lg bg-[#D4AF37] text-black font-semibold hover:bg-[#F3CE5A] transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" /> {t.buttons.cv}
            </a>
            <a href="mailto:zakariayahia52@gmail.com" className="px-6 py-3 rounded-lg border border-gray-700 hover:border-white transition-colors">
              {t.buttons.touch}
            </a>
            <a href="https://linkedin.com" target="_blank" className="px-6 py-3 rounded-lg border border-gray-700 hover:border-white transition-colors flex items-center gap-2">
              <Linkedin className="w-5 h-5" /> {t.buttons.linkedin}
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="sec-0" className="pt-20">
          <h3 className="text-4xl font-bold mb-12">{t.aboutTitle}</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              {t.aboutText.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.stats.map((stat, i) => (
                <div key={i} className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#D4AF37]/50 transition-colors">
                  <span className="text-4xl font-bold bg-gradient-to-br from-[#D4AF37] to-yellow-700 bg-clip-text text-transparent mb-2">{stat.value}</span>
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section Grid */}
        <section id="sec-1" className="pt-20">
          <h3 className="text-4xl font-bold mb-12 text-center">{t.skillsTitle}</h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {t.skills.map((skill, i) => (
              <div key={i} className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-2xl p-6 flex flex-col items-center justify-center min-w-[150px] min-h-[140px] hover:scale-105 hover:border-[#D4AF37]/50 transition-all cursor-default">
                <div className="mb-4 bg-[#1A1A1A] p-4 rounded-xl">{skill.icon}</div>
                <span className="text-gray-300 font-medium text-center text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Carousel */}
        <section id="sec-2" className="pt-20">
          <h3 className="text-4xl font-bold mb-12 text-center">{t.projTitle}</h3>
          <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-gray-700 font-mono text-xl">0{activeProj + 1} / 0{t.projects.length}</div>
            
            <div className="max-w-2xl mt-8 min-h-[280px] flex flex-col justify-between">
              <div>
                <h4 className="text-3xl font-bold text-white mb-4">{t.projects[activeProj].title}</h4>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">{t.projects[activeProj].desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-12">
                  {t.projects[activeProj].tech.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-[#1A1A1A] text-[#D4AF37] text-sm border border-[#333]">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={prevProj} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextProj} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Red-style Card (Adapted to Gold for brand consistency) */}
        <section id="sec-3" className="pt-20">
          <h3 className="text-4xl font-bold mb-12 text-center">{t.expTitle}</h3>
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#8C7323] rounded-3xl p-8 md:p-12 text-black shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-black/10 pb-6 mb-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                   <Briefcase className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">{t.expCard.company}</h4>
                  <span className="font-semibold opacity-80 text-sm md:text-base">{t.expCard.role}</span>
                </div>
              </div>
              <div className="px-4 py-2 bg-black/10 rounded-full font-bold text-sm w-fit">
                {t.expCard.date}
              </div>
            </div>
            <ul className="space-y-4">
              {t.expCard.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-lg font-medium opacity-90">
                  <ChevronRight className="w-5 h-5 shrink-0 mt-0.5 opacity-60" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education White-style Card */}
        <section id="sec-4" className="pt-20">
          <h3 className="text-4xl font-bold mb-12 text-center">{t.eduTitle}</h3>
          <div className="bg-white rounded-3xl p-8 md:p-12 text-black flex flex-col md:flex-row justify-between gap-8 items-center text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-6 w-full">
               <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center shrink-0 border-2 border-gray-200">
                  <BookOpen className="w-10 h-10 text-gray-400" />
               </div>
               <div>
                 <div className="flex flex-col md:flex-row justify-between items-center mb-2 w-full gap-4">
                    <h4 className="text-3xl font-bold">{t.eduCard.uni}</h4>
                    <div className="px-4 py-2 border-2 border-gray-200 rounded-full font-bold text-gray-500 text-sm whitespace-nowrap">
                      {t.eduCard.date}
                    </div>
                 </div>
                 <p className="text-xl text-[#8C7323] font-bold mb-4">{t.eduCard.degree}</p>
                 <p className="text-gray-500 max-w-2xl font-medium leading-relaxed">{t.eduCard.courses}</p>
               </div>
            </div>
          </div>
        </section>

        {/* Certifications Carousel */}
        <section id="sec-5" className="pt-20 pb-20">
          <h3 className="text-4xl font-bold mb-12 text-center">{t.certTitle}</h3>
          <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-3xl p-8 relative overflow-hidden flex flex-col items-center">
             <div className="text-gray-700 font-mono text-sm mb-8">0{activeCert + 1} / 0{t.certs.length}</div>
             
             <div className="bg-[#111] border border-[#222] rounded-2xl p-8 w-full max-w-md min-h-[200px] flex flex-col justify-center items-center text-center mb-8 shadow-lg">
                <Award className="w-12 h-12 text-[#D4AF37] mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">{t.certs[activeCert].name}</h4>
                <div className="flex gap-4 text-sm font-medium text-gray-500 mt-4">
                   <span className="bg-[#1A1A1A] px-3 py-1 rounded-md">{t.certs[activeCert].issuer}</span>
                   <span className="bg-[#1A1A1A] px-3 py-1 rounded-md">{t.certs[activeCert].date}</span>
                </div>
             </div>

             <div className="flex gap-4">
                <button onClick={prevCert} className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextCert} className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
          </div>
        </section>

      </div>
    </main>
  )
}
