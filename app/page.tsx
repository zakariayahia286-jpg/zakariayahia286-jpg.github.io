"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Server,
  Database,
  Cloud,
  Network,
  Zap,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")

  const skills = [
    { name: "Go", icon: Code, category: "Languages" },
    { name: "PHP", icon: Code, category: "Languages" },
    { name: "JavaScript", icon: Code, category: "Languages" },
    { name: "Go-Gin", icon: Code, category: "Frameworks" },
    { name: "Go-Chi", icon: Code, category: "Frameworks" },
    { name: "Laravel", icon: Code, category: "Frameworks" },
    { name: "VueJS", icon: Code, category: "Frameworks" },
    { name: "JQuery", icon: Code, category: "Frameworks" },
    { name: "CodeIgniter 3/4", icon: Code, category: "Frameworks" },
    { name: "Express JS", icon: Code, category: "Frameworks" },
    { name: "Bootstrap", icon: Code, category: "Frameworks" },
    { name: "Redis", icon: Database, category: "Databases" },
    { name: "PostgreSQL", icon: Database, category: "Databases" },
    { name: "MySQL", icon: Database, category: "Databases" },
    { name: "GCP", icon: Database, category: "Cloud" },
    { name: "AWS", icon: Database, category: "Cloud" },
    { name: "Docker", icon: Server, category: "DevOps" },
    { name: "Microservices", icon: Network, category: "Architecture" },
    { name: "Message Queue", icon: Network, category: "Architecture" },
    { name: "Clean Architecture", icon: Network, category: "Architecture" },
    { name: "REST APIs", icon: Server, category: "APIs" },
    { name: "RPC", icon: Server, category: "APIs" },
    { name: "GraphQL", icon: Server, category: "APIs" },
  ]

  const experiences = [
    {
      title: "Software Engineer - Backend",
      company: "ByteDance (Tokopedia) | Full Time",
      period: "Jul 2023 - Present",
      responsibilities: [
        "Achieved 100% system compatibility with all 6 partner expeditions in Kurir Rekomendasi Tokopedia, including the booking system, tracking, and reconciliation, ensuring smooth integration for Tokopedia x TikTok Shop orders",
        "Launched the Unified Shipping Label on Kurir Rekomendasi, significantly reducing costs while enabling partners to improve the sorting process by three times (an average increase of 344%)",
        "Migrated core logistics service repositories from PostgreSQL to MySQL, involving over ~50k lines of code",
        "Contributed to a major infrastructure migration project, moving logistics services to a new cloud. platform, reducing significantly over 85% of infrastructure costs",
        "Integrate new expeditions with our logistics system, ensuring all functionalities operate correctly and align with contractual requirements",
        "Consistently handling on-call issues for global e-commerce, ensuring the stability and reliability of both Tokopedia and TikTok system"
      ],
    },
    {
      title: "Software Engineer - Fullstack",
      company: "Sekolah Dasar Aisyiyah | Freelance",
      period: "Mei 2021 - Jun 2021",
      responsibilities: [
        "Building a website for a school information system with Laravel and Integrating the website with Google Education.",
        "Collaborated with teachers to gather requirements, identify feature demands, and implement solutions to enhance the system",
      ],
    },
    {
      title: "Software Engineer - Fullstack",
      company: "Pengadilan Negeri Sukabumi | Freelance",
      period: "Mei 2021 - Jun 2021",
      responsibilities: [
        "Building an online registration system for creating a power of attorney with CodeIgniter 4",
        "Setting up the environment and integrating with the domain go.id",
        "Designed the system and implemented the web application for multiple government agencies",
        "Worked closely with top executives to understand customer demands, prioritize features, and ensure the product is useful to the public",
      ],
    },
  ]

  const projects = [
    {
      title: "E-commerce Microservices Platform",
      description:
        "A scalable e-commerce platform built with microservices architecture, handling user management, product catalog, orders, and payments.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Go", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS"],
      link: "https://github.com/example/ecommerce-platform",
      highlights: ["Handles 50K+ concurrent users", "99.9% uptime", "Sub-100ms response time"],
    },
    {
      title: "Web Geographic Information Systems",
      description:
        "High-performance chat API with WebSocket support, message queuing, and real-time notifications for messaging applications.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Node.js", "Socket.io", "MongoDB", "Redis", "Docker"],
      link: "https://github.com/example/chat-api",
      highlights: ["Real-time messaging", "Message persistence", "Scalable architecture"],
    },
    {
      title: "Surat Kuasa Elektronik",
      description:
        "ETL pipeline for processing large-scale analytics data with real-time streaming and batch processing capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "GCP"],
      link: "https://github.com/example/analytics-pipeline",
      highlights: ["Processes 1M+ events/day", "Real-time analytics", "Automated reporting"],
    },
    {
      title: "Fuzzy Logic",
      description:
        "ETL pipeline for processing large-scale analytics data with real-time streaming and batch processing capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "GCP"],
      link: "https://github.com/example/analytics-pipeline",
      highlights: ["Processes 1M+ events/day", "Real-time analytics", "Automated reporting"],
    },
    {
      title: "Montecarlo Queueing",
      description:
        "ETL pipeline for processing large-scale analytics data with real-time streaming and batch processing capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "GCP"],
      link: "https://github.com/example/analytics-pipeline",
      highlights: ["Processes 1M+ events/day", "Real-time analytics", "Automated reporting"],
    },
    {
      title: "Snake Apples",
      description:
        "ETL pipeline for processing large-scale analytics data with real-time streaming and batch processing capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "GCP"],
      link: "https://github.com/example/analytics-pipeline",
      highlights: ["Processes 1M+ events/day", "Real-time analytics", "Automated reporting"],
    },
    {
      title: "Rent Car",
      description:
        "ETL pipeline for processing large-scale analytics data with real-time streaming and batch processing capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "GCP"],
      link: "https://github.com/example/analytics-pipeline",
      highlights: ["Processes 1M+ events/day", "Real-time analytics", "Automated reporting"],
    },
    {
      title: "Web Order Food Using LIFF",
      description:
        "ETL pipeline for processing large-scale analytics data with real-time streaming and batch processing capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "GCP"],
      link: "https://github.com/example/analytics-pipeline",
      highlights: ["Processes 1M+ events/day", "Real-time analytics", "Automated reporting"],
    },
    {
      title: "Inventory Management",
      description:
        "ETL pipeline for processing large-scale analytics data with real-time streaming and batch processing capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "GCP"],
      link: "https://github.com/example/analytics-pipeline",
      highlights: ["Processes 1M+ events/day", "Real-time analytics", "Automated reporting"],
    },
    {
      title: "Library Management",
      description:
        "ETL pipeline for processing large-scale analytics data with real-time streaming and batch processing capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "GCP"],
      link: "https://github.com/example/analytics-pipeline",
      highlights: ["Processes 1M+ events/day", "Real-time analytics", "Automated reporting"],
    },
    {
      title: "Student Assessment Report",
      description:
        "ETL pipeline for processing large-scale analytics data with real-time streaming and batch processing capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "GCP"],
      link: "https://github.com/example/analytics-pipeline",
      highlights: ["Processes 1M+ events/day", "Real-time analytics", "Automated reporting"],
    },
    {
      title: "Learning Management Systems",
      description:
        "ETL pipeline for processing large-scale analytics data with real-time streaming and batch processing capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "GCP"],
      link: "https://github.com/example/analytics-pipeline",
      highlights: ["Processes 1M+ events/day", "Real-time analytics", "Automated reporting"],
    },
    {
      title: "Safe Order QRIS",
      description:
        "ETL pipeline for processing large-scale analytics data with real-time streaming and batch processing capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["Python", "Apache Kafka", "PostgreSQL", "Docker", "GCP"],
      link: "https://github.com/example/analytics-pipeline",
      highlights: ["Processes 1M+ events/day", "Real-time analytics", "Automated reporting"],
    },
  ]

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: any } = {
      Go: Code,
      "Node.js": Server,
      Python: Code,
      PostgreSQL: Database,
      MongoDB: Database,
      Redis: Database,
      Docker: Server,
      Kubernetes: Cloud,
      AWS: Cloud,
      GCP: Cloud,
      "Socket.io": Network,
      "Apache Kafka": Network,
    }
    return iconMap[tech] || Code
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-bold">Widdy Arfiansyah</h1>
                <span className="text-sm text-gray-500 mt-2">(he/him)</span>
              </div>
              <p className="text-gray-400">Software Engineer - Backend</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-black border-red-500/50 text-white hover:bg-red-500/10"
                asChild
              >
                <a href="mailto:widdyarfiansyah00@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-black border-red-500/50 text-white hover:bg-red-500/10"
                asChild
              >
                <a href="https://github.com/arvians-id" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-black border-red-500/50 text-white hover:bg-red-500/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/widdyarfian/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-gray-900 border border-gray-800">
            <TabsTrigger
              value="about"
              className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400 data-[state=active]:border-red-500/50"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400 data-[state=active]:border-red-500/50"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400 data-[state=active]:border-red-500/50"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400 data-[state=active]:border-red-500/50"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400 data-[state=active]:border-red-500/50"
            >
              Contact
            </TabsTrigger>
          </TabsList>

          {/* About Section */}
          <TabsContent value="about" className="mt-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-red-400">About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Software engineer with 2 years of experience and a strong passion for back-end development. Possesses a solid foundation in building
                  scalable systems and always eager to learn new technologies. Proficient in multiple programming languages, including Golang,
                  JavaScript, and PHP. 
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My expertise spans multiple programming languages and technologies, with a strong focus on the Go programming language and other backend technologies. 
                  I'm committed to writing clean, maintainable code and following
                  best practices in software development.
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-red-400">Educations</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-white">Bachelor of Science in Informatics Engineering</h4>
                          <p className="text-gray-400">Muhammadiyah University of Sukabumi</p>
                        </div>
                        <Badge variant="outline" className="border-red-500/50 text-red-400 w-fit">
                          2018 - 2023
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-red-400">Technical Certifications and Training</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-white">Sofware Engineer Backend</h4>
                          <p className="text-gray-400">Tokopedia Devcamp</p>
                        </div>
                        <Badge variant="outline" className="border-red-500/50 text-red-400 w-fit">
                          Okt 2022
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-white">Golang Backend Engineer Intermediate Class</h4>
                          <p className="text-gray-400">Ruangguru</p>
                        </div>
                        <Badge variant="outline" className="border-red-500/50 text-red-400 w-fit">
                          Feb - Jun 2022
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-white">Junior Web Developer</h4>
                          <p className="text-gray-400">Balai Pelatihan dan Pengembangan Teknologi Informasi dan Komunikasi (BPPTIK)</p>
                        </div>
                        <Badge variant="outline" className="border-red-500/50 text-red-400 w-fit">
                          Okt 2021
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-white">CodeIgniter 4 Web Programming</h4>
                          <p className="text-gray-400">Camp404</p>
                        </div>
                        <Badge variant="outline" className="border-red-500/50 text-red-400 w-fit">
                          Mar 2021
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-red-400">Awards</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-white">Tokopedia DevCamp Hackathon Winner 2022</h4>
                          <p className="text-gray-400">Tokopedia</p>
                        </div>
                        <Badge variant="outline" className="border-red-500/50 text-red-400 w-fit">
                          Okt 2022
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-white">Peraih Pendanaan PKM-M Dikti</h4>
                          <p className="text-gray-400">Ditjen Dikti</p>
                        </div>
                        <Badge variant="outline" className="border-red-500/50 text-red-400 w-fit">
                          Aug 2020
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Section */}
          <TabsContent value="skills" className="mt-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-red-400">Technical Skills</CardTitle>
                <CardDescription>Technologies and tools I work with, along with some experiments I've explored</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {["Languages", "Frameworks", "Databases", "DevOps", "Cloud", "Architecture", "APIs"].map((category) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold mb-3 text-red-400">{category}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {skills
                          .filter((skill) => skill.category === category)
                          .map((skill) => {
                            const IconComponent = skill.icon
                            return (
                              <div
                                key={skill.name}
                                className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                              >
                                <IconComponent className="w-5 h-5 text-red-400" />
                                <span className="text-sm text-white">{skill.name}</span>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experience Section */}
          <TabsContent value="experience" className="mt-6">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-red-400">{exp.title}</CardTitle>
                        <CardDescription className="text-gray-300">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-red-500/50 text-red-400 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projects Section */}
          <TabsContent value="projects" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-red-400">{project.title}</CardTitle>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm">{project.description}</p>

                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-red-400">Key Highlights</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                            <Zap className="w-3 h-3 text-red-400" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-red-400">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => {
                          const IconComponent = getTechIcon(tech)
                          return (
                            <div key={tech} className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded text-xs">
                              <IconComponent className="w-3 h-3 text-red-400" />
                              {tech}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contact Section */}
          <TabsContent value="contact" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-red-400">Get In Touch</CardTitle>
                  <CardDescription>
                    I'm always open to discussing new opportunities and interesting projects.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-black border-red-500/50 text-white hover:bg-red-500/10"
                        asChild
                      >
                        <a href="mailto:widdyarfiansyah00@gmail.com">
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-black border-red-500/50 text-white hover:bg-red-500/10"
                        asChild
                      >
                        <a href="https://github.com/arvians-id" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-black border-red-500/50 text-white hover:bg-red-500/10"
                        asChild
                      >
                        <a href="https://www.linkedin.com/in/widdyarfian/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 arvians-id</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
