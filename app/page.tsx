"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, MapPin, Linkedin, Globe } from "lucide-react"

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')
  const isAr = lang === 'ar'

  const content = {
    en: {
      toggleBtn: "عربي",
      name: "Zakaria Alkhani",
      role: "Information Systems & E-Business Management",
      about: "Bridging system architecture and business value. Passionate about mapping complex systems, integrating emerging AI technologies, and optimizing enterprise digital platforms.",
      location: "Sharjah, UAE",
      tabs: { exp: "Experience", proj: "Projects", skills: "Skills" },
      experience: {
        role: "Information Systems & Digital Platforms Intern",
        company: "Sharjah Government Media Bureau",
        date: "May 2026 – Present",
        details: "Mapping and optimizing digital media workflows using UML. Applying AI prompt engineering techniques to structure and retrieve media archives effectively."
      },
      projects: [
        {
          title: "Healthcare LLM RAG Pipeline",
          desc: "Architected a Retrieval-Augmented Generation (RAG) pipeline designed to minimize AI hallucinations in medical informatics.",
          tags: ["AI Prompting", "RAG Frameworks"]
        },
        {
          title: "Trustio Marketplace Architecture",
          desc: "Developed comprehensive UML diagrams (Use Case, Activity, Class) to clearly define seller interactions and optimize backend logic.",
          tags: ["UML Diagrams", "System Logic"]
        },
        {
          title: "Enterprise IT & SAP Implementation",
          desc: "Mastered large-scale ERP ecosystems, focusing on SAP Cloud ERP and SAP S/4HANA Cloud Public Edition.",
          tags: ["SAP S/4HANA", "Enterprise ERP"]
        }
      ],
      skills: ["UML Architecture", "SAP S/4HANA", "Workflow Optimization", "Prompt Engineering", "Retrieval-Augmented Gen", "CMS Management"]
    },
    ar: {
      toggleBtn: "English",
      name: "زكريا الخاني",
      role: "نظم المعلومات وإدارة الأعمال الإلكترونية",
      about: "أعمل على سد الفجوة بين بنية الأنظمة وقيمة الأعمال. شغوف برسم الأنظمة المعقدة، ودمج تقنيات الذكاء الاصطناعي الناشئة، وتحسين المنصات الرقمية للمؤسسات.",
      location: "الشارقة، الإمارات العربية المتحدة",
      tabs: { exp: "الخبرات", proj: "المشاريع", skills: "المهارات" },
      experience: {
        role: "متدرب في نظم المعلومات والمنصات الرقمية",
        company: "المكتب الإعلامي لحكومة الشارقة",
        date: "مايو 2026 – الحاضر",
        details: "تخطيط وتحسين مسارات عمل الوسائط الرقمية باستخدام UML. تطبيق تقنيات هندسة الأوامر للذكاء الاصطناعي لهيكلة واسترجاع الأرشيف الإعلامي بفعالية."
      },
      projects: [
        {
          title: "تخفيف الهلوسة في نماذج الرعاية الصحية (RAG)",
          desc: "تصميم مسار توليد معزز بالاسترجاع (RAG) لتقليل هلوسة الذكاء الاصطناعي في المعلوماتية الطبية.",
          tags: ["هندسة الأوامر", "أطر عمل RAG"]
        },
        {
          title: "بنية منصة Trustio الرقمية",
          desc: "تطوير مخططات UML شاملة لتحديد تفاعلات البائعين وتحسين المنطق الخلفي لمنصة التجارة الإلكترونية.",
          tags: ["مخططات UML", "منطق الأنظمة"]
        },
        {
          title: "تكنولوجيا المؤسسات وتنفيذ SAP",
          desc: "إتقان أنظمة تخطيط موارد المؤسسات واسعة النطاق، مع التركيز على SAP Cloud ERP و SAP S/4HANA Cloud.",
          tags: ["SAP S/4HANA", "Enterprise ERP"]
        }
      ],
      skills: ["بنية UML", "SAP S/4HANA", "تحسين مسارات العمل", "هندسة الأوامر", "توليد معزز بالاسترجاع", "إدارة المحتوى"]
    }
  }

  const t = content[lang]

  return (
    <main className={`min-h-screen bg-[#111111] text-[#C0C0C0] p-6 md:p-16 ${isAr ? 'text-right' : 'text-left'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className={`flex ${isAr ? 'justify-end' : 'justify-end'}`}>
          <Button 
            onClick={() => setLang(isAr ? 'en' : 'ar')} 
            variant="outline" 
            className="border-[#D4AF37] text-[#D4AF37] bg-transparent hover:bg-[#D4AF37] hover:text-[#111111] transition-all"
          >
            <Globe className={`w-4 h-4 ${isAr ? 'ml-2' : 'mr-2'}`} />
            {t.toggleBtn}
          </Button>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">{t.name}</h1>
          <h2 className="text-2xl text-[#D4AF37] font-light">{t.role}</h2>
          <p className="text-lg leading-relaxed max-w-2xl text-gray-400">{t.about}</p>
          
          <div className="flex flex-wrap gap-6 pt-2">
            <a href="mailto:zakariayahia52@gmail.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"><Mail className="w-5 h-5 text-[#D4AF37]"/> Email</a>
            <a href="https://www.linkedin.com/in/zakaria-yahia-271073284" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"><Linkedin className="w-5 h-5 text-[#D4AF37]"/> LinkedIn</a>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-[#D4AF37]"/> {t.location}</span>
          </div>
        </div>

        <Tabs defaultValue="experience" className="w-full pt-8">
          <TabsList className="bg-[#1E1E1E] border border-gray-800 p-1">
            <TabsTrigger value="experience" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#111111]">{t.tabs.exp}</TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#111111]">{t.tabs.proj}</TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-[#111111]">{t.tabs.skills}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="mt-6">
            <Card className="bg-[#1E1E1E] border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-xl">{t.experience.role}</CardTitle>
                <CardDescription className="text-[#D4AF37] text-md">{t.experience.company} | {t.experience.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{t.experience.details}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="mt-6 grid gap-6 md:grid-cols-2">
            {t.projects.map((proj, i) => (
              <Card key={i} className="bg-[#1E1E1E] border-gray-800 hover:border-[#D4AF37] transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{proj.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{proj.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {proj.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-[#2A2A2A] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] border-none">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="skills" className="mt-6">
            <Card className="bg-[#1E1E1E] border-gray-800">
              <CardContent className="pt-6 flex flex-wrap gap-3">
                {t.skills.map((skill, i) => (
                  <Badge key={i} className="bg-transparent border border-[#D4AF37] text-[#D4AF37] px-4 py-2 text-sm hover:bg-[#D4AF37] hover:text-[#111111] transition-colors">{skill}</Badge>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </div>
    </main>
  )
}
