"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Linkedin, Globe, ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')
  const [projIndex, setProjIndex] = useState(0)
  
  const isAr = lang === 'ar'

  const content = {
    en: {
      toggleBtn: "عربي",
      name: "Zakaria Alkhani",
      role: "Information Systems & E-Business Management",
      about: "4th-year student at Ajman University. I bridge the gap between system architecture and business value. Passionate about mapping complex systems, integrating emerging AI technologies, and optimizing enterprise digital platforms.",
      location: "Sharjah, UAE",
      sections: { exp: "Professional Experience", proj: "Interactive Case Studies", skills: "Technical Arsenal" },
      experience: {
        role: "Information Systems & Digital Platforms Intern",
        company: "Sharjah Government Media Bureau",
        date: "May 2026 – Present",
        details: "Mapping and optimizing digital media workflows using UML. Applying AI prompt engineering techniques to structure and retrieve media archives effectively."
      },
      projects: [
        {
          title: "Healthcare LLM RAG Pipeline",
          desc: "Architected a Retrieval-Augmented Generation (RAG) pipeline designed to minimize AI hallucinations in medical informatics. Created defense-in-depth prompting strategies.",
          tags: ["AI Prompting", "RAG Frameworks"]
        },
        {
          title: "Trustio Marketplace Architecture",
          desc: "Developed comprehensive UML diagrams (Use Case, Activity, Class) to clearly define seller interactions and optimize backend logic for a digital commerce platform.",
          tags: ["UML Diagrams", "System Logic"]
        },
        {
          title: "Enterprise IT & SAP Implementation",
          desc: "Mastered large-scale ERP ecosystems through the SAP Dual Study Program, focusing on SAP Cloud ERP and SAP S/4HANA Cloud Public Edition.",
          tags: ["SAP S/4HANA", "Enterprise ERP"]
        }
      ],
      skills: ["UML Architecture", "SAP S/4HANA", "Workflow Optimization", "Prompt Engineering", "Retrieval-Augmented Gen", "CMS Management", "Technical Tutoring"]
    },
    ar: {
      toggleBtn: "English",
      name: "زكريا الخاني",
      role: "نظم المعلومات وإدارة الأعمال الإلكترونية",
      about: "طالب في السنة الرابعة في جامعة عجمان. أعمل على سد الفجوة بين بنية الأنظمة وقيمة الأعمال. شغوف برسم الأنظمة المعقدة، ودمج تقنيات الذكاء الاصطناعي الناشئة، وتحسين المنصات الرقمية للمؤسسات.",
      location: "الشارقة، الإمارات العربية المتحدة",
      sections: { exp: "الخبرات المهنية", proj: "دراسات الحالة التفاعلية", skills: "المهارات التقنية" },
      experience: {
        role: "متدرب في نظم المعلومات والمنصات الرقمية",
        company: "المكتب الإعلامي لحكومة الشارقة",
        date: "مايو 2026 – الحاضر",
        details: "تخطيط وتحسين مسارات عمل الوسائط الرقمية باستخدام UML. تطبيق تقنيات هندسة الأوامر للذكاء الاصطناعي لهيكلة واسترجاع الأرشيف الإعلامي بفعالية."
      },
      projects: [
        {
          title: "تخفيف الهلوسة في نماذج الرعاية الصحية (RAG)",
          desc: "تصميم مسار توليد معزز بالاسترجاع (RAG) لتقليل هلوسة الذكاء الاصطناعي في المعلوماتية الطبية. إنشاء استراتيجيات هندسة الأوامر المتقدمة.",
          tags: ["هندسة الأوامر", "أطر عمل RAG"]
        },
        {
          title: "بنية منصة Trustio الرقمية",
          desc: "تطوير مخططات UML شاملة لتحديد تفاعلات البائعين وتحسين المنطق الخلفي لمنصة التجارة الإلكترونية.",
          tags: ["مخططات UML", "منطق الأنظمة"]
        },
        {
          title: "تكنولوجيا المؤسسات وتنفيذ SAP",
          desc: "إتقان أنظمة تخطيط موارد المؤسسات من خلال برنامج SAP المزدوج، مع التركيز على SAP Cloud ERP و SAP S/4HANA Cloud.",
          tags: ["SAP S/4HANA", "Enterprise ERP"]
        }
      ],
      skills: ["بنية UML", "SAP S/4HANA", "تحسين مسارات العمل", "هندسة الأوامر", "توليد معزز بالاسترجاع", "إدارة المحتوى", "التوجيه التقني"]
    }
  }

  const t = content[lang]

  // Carousel Logic
  const nextProject = () => setProjIndex((prev) => (prev + 1) % t.projects.length)
  const prevProject = () => setProjIndex((prev) => (prev - 1 + t.projects.length) % t.projects.length)

  return (
    <main className={`min-h-screen bg-[#111111] text-[#C0C0C0] p-6 md:p-16 ${isAr ? 'text-right' : 'text-left'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Top Navigation / Language Toggle */}
        <div className={`flex ${isAr ? 'justify-end' : 'justify-end'} sticky top-0 py-4 bg-[#111111]/90 backdrop-blur-md z-50 border-b border-[#1E1E1E]`}>
          <Button 
            onClick={() => setLang(isAr ? 'en' : 'ar')} 
            variant="outline" 
            className="border-[#D4AF37] text-[#D4AF37] bg-transparent hover:bg-[#D4AF37] hover:text-[#111111] transition-all"
          >
            <Globe className={`w-4 h-4 ${isAr ? 'ml-2' : 'mr-2'}`} />
            {t.toggleBtn}
          </Button>
        </div>

        {/* Hero Profile Section */}
        <div className="space-y-6 pt-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">{t.name}</h1>
          <h2 className="text-2xl text-[#D4AF37] font-light">{t.role}</h2>
          <p className="text-lg leading-relaxed max-w-2xl text-gray-400">{t.about}</p>
          
          <div className="flex flex-wrap gap-6 pt-4">
            <a href="mailto:zakariayahia52@gmail.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"><Mail className="w-5 h-5 text-[#D4AF37]"/> Email</a>
            <a href="https://www.linkedin.com/in/zakaria-yahia-271073284" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"><Linkedin className="w-5 h-5 text-[#D4AF37]"/> LinkedIn</a>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-[#D4AF37]"/> {t.location}</span>
          </div>
        </div>

        {/* Experience Section */}
        <section className="space-y-6">
          <h3 className="text-3xl font-semibold text-white border-b border-[#1E1E1E] pb-4">{t.sections.exp}</h3>
          <Card className="bg-[#1E1E1E] border-gray-800 hover:border-[#D4AF37]/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-white text-xl">{t.experience.role}</CardTitle>
              <CardDescription className="text-[#D4AF37] text-md">{t.experience.company} | {t.experience.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">{t.experience.details}</p>
            </CardContent>
          </Card>
        </section>

        {/* Interactive Projects Carousel Section */}
        <section className="space-y-6">
          <h3 className="text-3xl font-semibold text-white border-b border-[#1E1E1E] pb-4">{t.sections.proj}</h3>
          
          <div className="relative flex items-center justify-center">
            
            {/* Left Arrow */}
            <Button onClick={prevProject} variant="ghost" className="absolute left-0 z-10 text-gray-500 hover:text-[#D4AF37] hover:bg-transparent -ml-4 md:-ml-12">
              <ChevronLeft className="w-8 h-8" />
            </Button>

            {/* Active Project Card */}
            <Card className="w-full bg-[#1E1E1E] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all duration-500 min-h-[250px] flex flex-col justify-center">
              <CardHeader>
                <CardTitle className="text-white text-2xl">{t.projects[projIndex].title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-400 text-lg leading-relaxed">{t.projects[projIndex].desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {t.projects[projIndex].tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-[#2A2A2A] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] border-none px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Right Arrow */}
            <Button onClick={nextProject} variant="ghost" className="absolute right-0 z-10 text-gray-500 hover:text-[#D4AF37] hover:bg-transparent -mr-4 md:-mr-12">
              <ChevronRight className="w-8 h-8" />
            </Button>
            
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 pt-4">
            {t.projects.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-2 rounded-full transition-all duration-300 ${idx === projIndex ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-gray-700'}`}
              />
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="space-y-6 pb-20">
          <h3 className="text-3xl font-semibold text-white border-b border-[#1E1E1E] pb-4">{t.sections.skills}</h3>
          <div className="flex flex-wrap gap-3">
            {t.skills.map((skill, i) => (
              <Badge key={i} className="bg-[#1E1E1E] border border-[#D4AF37]/30 text-[#D4AF37] px-5 py-3 text-sm hover:bg-[#D4AF37] hover:text-[#111111] transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
