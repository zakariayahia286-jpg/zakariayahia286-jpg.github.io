"use client"

import { useState } from "react"
import { Mail, MapPin, Linkedin, Github, ExternalLink, Download, ChevronRight, ChevronLeft } from "lucide-react"

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')
  const [activeProj, setActiveProj] = useState(0)
  const isAr = lang === 'ar'

  const content = {
    en: {
      nav: ["About", "Skills", "Projects", "Experience", "Education"],
      toggleBtn: "AR",
      status: "Interning @ Sharjah Government Media | Ajman University",
      name: "Zakaria Alkhani",
      role: "Information Systems & E-Business Management",
      heroText: "4th-year student at Ajman University specializing in mapping complex systems, integrating emerging AI technologies, and optimizing enterprise digital platforms.",
      buttons: { cv: "Download CV", touch: "Get In Touch", linkedin: "in LinkedIn" },
      aboutTitle: "About Me",
      aboutText: [
        "I specialize in bridging the gap between technical architecture and real-world business logic. My focus is on ensuring AI reliability and streamlining operations.",
        "As a peer tutor, I assist other students by translating complex technical requirements into actionable, easy-to-understand lessons.",
        "When I step away from the digital world, I apply that same analytical exactness to baking, constantly experimenting with ingredient ratios to perfect my signature crinkly-top brownies and Cinnabons."
      ],
      stats: [
        { label: "Enterprise Projects", value: "3+" },
        { label: "Year of Study", value: "4th" },
        { label: "SAP Certified", value: "Dual Study" },
        { label: "Tech Tutor", value: "Active" }
      ],
      skillsTitle: "Skills & Tools",
      skills: ["UML Architecture", "SAP S/4HANA", "Prompt Engineering", "RAG Frameworks", "Workflow Optimization", "AWS Cloud", "System Analysis"],
      projTitle: "Projects",
      projects: [
        {
          title: "Healthcare LLM RAG Pipeline",
          desc: "Architected a Retrieval-Augmented Generation (RAG) pipeline designed to minimize AI hallucinations in medical informatics using advanced prompting.",
          tech: ["AI Prompting", "RAG", "System Logic"]
        },
        {
          title: "Trustio Marketplace Architecture",
          desc: "Mapped backend logic and consolidated redundant Admin actors using comprehensive UML diagrams to optimize e-business operations.",
          tech: ["UML", "Process Mapping", "E-Commerce"]
        },
        {
          title: "Enterprise IT & SAP Implementation",
          desc: "Navigated Central Business Configuration and optimized Sales and Distribution modules for enterprise-level deployment.",
          tech: ["SAP Cloud ERP", "S/4HANA", "Enterprise"]
        }
      ],
      expTitle: "Experience",
      expCard: {
        role: "Information Systems & Digital Platforms Intern",
        company: "Sharjah Government Media Bureau",
        date: "May 2026 – Present (16-Week Rotation)",
        points: [
          "Mapping and optimizing digital media workflows and content distribution systems using UML.",
          "Applying AI prompt engineering techniques to structure and retrieve media archives effectively.",
          "Assisting in the management of enterprise-level digital platforms to support public communications."
        ]
      },
      eduTitle: "Education",
      eduCard: {
        uni: "Ajman University",
        degree: "BSc Information Systems and E-Business Management",
        date: "2022 – Present",
        courses: "Relevant coursework: Enterprise Systems, E-Commerce Infrastructure, Database Management, System Analysis & Design."
      }
    },
    ar: {
      nav: ["حول", "المهارات", "المشاريع", "الخبرة", "التعليم"],
      toggleBtn: "EN",
      status: "متدرب @ المكتب الإعلامي لحكومة الشارقة | جامعة عجمان",
      name: "زكريا الخاني",
      role: "نظم المعلومات وإدارة الأعمال الإلكترونية",
      heroText: "طالب في السنة الرابعة في جامعة عجمان، متخصص في تخطيط الأنظمة المعقدة، ودمج تقنيات الذكاء الاصطناعي، وتحسين المنصات الرقمية للمؤسسات.",
      buttons: { cv: "تحميل السيرة الذاتية", touch: "تواصل معي", linkedin: "لينكد إن" },
      aboutTitle: "نبذة عني",
      aboutText: [
        "أتخصص في سد الفجوة بين البنية التقنية ومنطق الأعمال الفعلي. ينصب تركيزي على ضمان موثوقية الذكاء الاصطناعي وتبسيط العمليات.",
        "كمعلم أقران، أساعد الطلاب الآخرين من خلال ترجمة المتطلبات التقنية المعقدة إلى دروس قابلة للتطبيق وسهلة الفهم.",
        "بعيداً عن الشاشات، أطبق نفس الدقة التحليلية في الخبز، حيث أقوم بتجربة نسب المكونات لإتقان وصفاتي الخاصة."
      ],
      stats: [
        { label: "مشاريع مؤسسية", value: "+3" },
        { label: "سنة الدراسة", value: "الرابعة" },
        { label: "برنامج SAP", value: "معتمد" },
        { label: "معلم تقني", value: "نشط" }
      ],
      skillsTitle: "المهارات والأدوات",
      skills: ["بنية UML", "SAP S/4HANA", "هندسة الأوامر", "أطر عمل RAG", "تحسين مسارات العمل", "AWS Cloud", "تحليل الأنظمة"],
      projTitle: "المشاريع",
      projects: [
        {
          title: "تخفيف الهلوسة في نماذج الرعاية الصحية (RAG)",
          desc: "تصميم مسار توليد معزز بالاسترجاع (RAG) لتقليل هلوسة الذكاء الاصطناعي في المعلوماتية الطبية.",
          tech: ["هندسة الأوامر", "RAG", "منطق الأنظمة"]
        },
        {
          title: "بنية منصة Trustio الرقمية",
          desc: "تطوير مخططات UML شاملة لتحديد تفاعلات البائعين وتحسين المنطق الخلفي لمنصة التجارة الإلكترونية.",
          tech: ["UML", "تخطيط العمليات", "التجارة الإلكترونية"]
        },
        {
          title: "تكنولوجيا المؤسسات وتنفيذ SAP",
          desc: "إتقان أنظمة تخطيط موارد المؤسسات من خلال برنامج SAP المزدوج، مع التركيز على المبيعات والتوزيع.",
          tech: ["SAP Cloud ERP", "S/4HANA", "Enterprise"]
        }
      ],
      expTitle: "الخبرة المهنية",
      expCard: {
        role: "متدرب في نظم المعلومات والمنصات الرقمية",
        company: "المكتب الإعلامي لحكومة الشارقة",
        date: "مايو 2026 – الحاضر (16 أسبوع)",
        points: [
          "تخطيط وتحسين مسارات عمل الوسائط الرقمية باستخدام مخططات UML.",
          "تطبيق تقنيات هندسة الأوامر لهيكلة واسترجاع الأرشيف الإعلامي بفعالية.",
          "المساعدة في إدارة المنصات الرقمية لدعم الاتصالات العامة."
        ]
      },
      eduTitle: "التعليم",
      eduCard: {
        uni: "جامعة عجمان",
        degree: "بكالوريوس نظم المعلومات وإدارة الأعمال الإلكترونية",
        date: "2022 – الحاضر",
        courses: "المقررات ذات الصلة: أنظمة المؤسسات، البنية التحتية للتجارة الإلكترونية، إدارة قواعد البيانات، تحليل وتصميم الأنظمة."
      }
    }
  }

  const t = content[lang]

  const nextProj = () => setActiveProj((prev) => (prev + 1) % t.projects.length)
  const prevProj = () => setActiveProj((prev) => (prev - 1 + t.projects.length) % t.projects.length)

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
            <button className="px-6 py-3 rounded-lg bg-[#D4AF37] text-black font-semibold hover:bg-[#F3CE5A] transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" /> {t.buttons.cv}
            </button>
            <a href="mailto:zakariayahia52@gmail.com" className="px-6 py-3 rounded-lg border border-gray-700 hover:border-white transition-colors">
              {t.buttons.touch}
            </a>
            <a href="https://www.linkedin.com/in/zakaria-yahia-271073284" target="_blank" className="px-6 py-3 rounded-lg border border-gray-700 hover:border-white transition-colors flex items-center gap-2">
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

        {/* Skills Section */}
        <section id="sec-1" className="pt-20">
          <h3 className="text-4xl font-bold mb-12 text-center">{t.skillsTitle}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {t.skills.map((skill, i) => (
              <div key={i} className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-2xl p-6 flex flex-col items-center justify-center min-w-[140px] hover:scale-105 hover:border-[#D4AF37] transition-all cursor-default">
                <span className="text-gray-300 font-medium text-center">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="sec-2" className="pt-20">
          <h3 className="text-4xl font-bold mb-12">{t.projTitle}</h3>
          <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-gray-700 font-mono text-xl">0{activeProj + 1} / 0{t.projects.length}</div>
            
            <div className="max-w-2xl mt-8">
              <h4 className="text-3xl font-bold text-white mb-4">{t.projects[activeProj].title}</h4>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed h-24">{t.projects[activeProj].desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-12">
                {t.projects[activeProj].tech.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-[#1A1A1A] text-gray-300 text-sm border border-[#222]">{tag}</span>
                ))}
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

        {/* Experience Section */}
        <section id="sec-3" className="pt-20">
          <h3 className="text-4xl font-bold mb-12 text-center">{t.expTitle}</h3>
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#8C7323] rounded-3xl p-8 md:p-12 text-black shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-black/10 pb-6 mb-6 gap-4">
              <div>
                <h4 className="text-2xl font-bold">{t.expCard.company}</h4>
                <span className="font-medium opacity-80">{t.expCard.role}</span>
              </div>
              <div className="px-4 py-2 bg-black/10 rounded-full font-semibold text-sm w-fit">
                {t.expCard.date}
              </div>
            </div>
            <ul className="space-y-4">
              {t.expCard.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-lg font-medium opacity-90">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-black shrink-0"></span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section id="sec-4" className="pt-20">
          <h3 className="text-4xl font-bold mb-12 text-center">{t.eduTitle}</h3>
          <div className="bg-white rounded-3xl p-8 md:p-12 text-black flex flex-col md:flex-row justify-between gap-8 items-center text-center md:text-left">
            <div>
              <h4 className="text-3xl font-bold mb-2">{t.eduCard.uni}</h4>
              <p className="text-xl text-gray-600 font-medium mb-4">{t.eduCard.degree}</p>
              <p className="text-gray-500 max-w-lg">{t.eduCard.courses}</p>
            </div>
            <div className="px-6 py-3 border-2 border-gray-200 rounded-full font-bold text-gray-500 whitespace-nowrap">
              {t.eduCard.date}
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
