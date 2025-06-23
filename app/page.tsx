"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Github, Linkedin, Zap, Lock } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")

  const skills = [
    {
      name: "Go",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      category: "Languages",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      category: "Languages",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Languages",
    },
    {
      name: "Go-Gin",
      icon: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.svg",
      category: "Frameworks",
    },
    {
      name: "Go-Chi",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      category: "Frameworks",
    },
    {
      name: "Laravel",
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/laravel/laravel-original.svg",
      category: "Frameworks",
    },
    {
      name: "VueJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      category: "Frameworks",
    },
    {
      name: "JQuery",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      category: "Frameworks",
    },
    {
      name: "CodeIgniter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
      category: "Frameworks",
    },
    {
      name: "Express JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      category: "Frameworks",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      category: "Frameworks",
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      category: "Databases",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "Databases",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Databases",
    },
    {
      name: "GCP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      category: "Cloud",
    },
    {
      name: "AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      category: "Cloud",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      category: "DevOps",
    },
    {
      name: "REST APIs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      category: "APIs",
    },
    {
      name: "RPC",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg",
      category: "APIs",
    },
    {
      name: "GraphQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      category: "APIs",
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/git/git-original.svg",
      category: "Tools",
    },
    {
      name: "Postman",
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/postman/postman-original.svg",
      category: "Tools",
    },
    {
      name: "Notion",
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/notion/notion-original.svg",
      category: "Tools",
    },
    {
      name: "Message Queue",
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/rabbitmq/rabbitmq-original.svg",
      category: "Tools",
    },
    {
      name: "Mockoon",
      icon: "https://mockoon.com/images/logo-eyes-sticker.svg",
      category: "Tools",
    },
    {
      name: "Sonarqube",
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/sonarqube/sonarqube-original.svg",
      category: "Tools",
    },
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
      title: "Web E-commerce Microservices Platform",
      description:
        "A scalable e-commerce platform built with microservices architecture, handling user management, product catalog, orders, and payments. ",
      image: "/ecommerce.png",
      techStack: ["Go-Gin", "PostgreSQL", "Redis", "Docker", "AWS", "VueJS", "REST APIs", "RPC"],
      link: "https://github.com/arvians-id/go-apriori-microservice",
      highlights: ["Single Page Application", "Microservices", "Integrated with Payment Gateway", "Integrated with Apriori Algorithm"],
      isAccessible: true,
    },
    {
      title: "Web Geographic Information Systems",
      description: "A GIS website for mapping the population in each region of Sukabumi, marked by color-coded areas",
      image: "/gis.png",
      techStack: ["MySQL", "JavaScript", "Express JS", "Bootstrap"],
      link: "https://github.com/arvians-id/web-gis",
      highlights: ["Integrated with GIS", "Modern Tech Stack"],
      isAccessible: true,
    },
    {
      title: "Web Elektronik Pendaftaran Surat Kuasa",
      description: "An electronic platform for providing power of attorney application services at the Sukabumi District Court",
      image: "/esuka.png",
      techStack: ["MySQL", "Docker", "CodeIgniter", "Bootstrap"],
      link: "",
      highlights: ["Integrated with Goverment", "Automated Reporting","Integrated with Payment Gateway", "Push Notification Users"],
      isAccessible: false,
    },
    {
      title: "Web Learning Management Systems",
      description: "Teenager is a Learning Management System (LMS) designed to support individuals with visual and hearing impairments, enabling them to participate in learning equally like everyone else",
      image: "/lms.jpeg",
      techStack: ["Go-Gin", "Docker", "AWS", "JavaScript", "VueJS", "MySQL"],
      link: "https://github.com/arvians-id/my-final-project",
      highlights: ["Single Page Application", "Collaborate with Frontend Engineer"],
      isAccessible: true,
    },
    {
      title: "App Secure QRIS Order",
      description: "Make your order secure with QRIS payment through the Tokopay+ app",
      image: "/tokopay.jpeg",
      techStack: ["Go-Gin", "Docker", "AWS", "PostgreSQL", "REST APIs", "Redis"],
      link: "",
      highlights: ["Collaborate with EP & Android Engineer", "Hackathon Winner 2023"],
      isAccessible: false,
    },
    {
      title: "Web Calculation Fuzzy Logic",
      description: "",
      image: "/fuzzylogic.jpg",
      techStack: ["JavaScript", "Bootstrap"],
      link: "https://github.com/arvians-id/fuzzy-logic",
      highlights: ["Fuzzification Process", "Inferensi Process", "Defuzzification Process"],
      isAccessible: true,
    },
    {
      title: "Web Calculation Montecarlo",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["JavaScript", "Bootstrap"],
      link: "https://github.com/arvians-id/antrian-montecarlo",
      highlights: ["Processes 1M+ events/day", "Real-time analytics", "Automated reporting"],
      isAccessible: true,
    },
    {
      title: "Web Calculation Trapezoidal",
      description: "",
      image: "/trapezoidal.png",
      techStack: ["JavaScript", "Bootstrap"],
      link: "https://github.com/arvians-id/trapezoidal",
      highlights: ["Result of Trapezium", "Extract Process", "Error Percentage"],
      isAccessible: true,
    },
    {
      title: "Web Game Snake Apples",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["JavaScript", "Bootstrap"],
      link: "",
      highlights: ["Game Snake Apples"],
      isAccessible: false,
    },
    {
      title: "Web Rent Car",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["CodeIgniter", "MySQL", "PHP", "JQuery", "JavaScript"],
      link: "https://github.com/arvians-id/rental-mobil",
      highlights: ["User Management", "Order Management", "Report Management"],
      isAccessible: true,
    },
    {
      title: "Web Order Food Using LIFF",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["JQuery", "JavaScript"],
      link: "https://github.com/arvians-id/line-front-end-framework",
      highlights: ["Order Management", "Integrated with Line"],
      isAccessible: true,
    },
    {
      title: "Web Inventory Management",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["CodeIgniter", "MySQL", "PHP", "JQuery", "JavaScript"],
      link: "https://github.com/arvians-id/inventory-v2",
      highlights: ["User Management", "Order Management", "Report Management", "Stock Management"],
      isAccessible: true,
    },
    {
      title: "Web Library Management",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["CodeIgniter", "MySQL", "PHP", "JQuery", "JavaScript"],
      link: "https://github.com/arvians-id/perpustakaan",
      highlights: ["User Management", "Booking Management", "Report Management", "Stock Management"],
      isAccessible: true,
    },
    {
      title: "Web Student Assessment Report",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["CodeIgniter", "MySQL", "PHP", "JQuery", "JavaScript"],
      link: "https://github.com/arvians-id/penilaian",
      highlights: ["User Management", "Calculation of Grades", "Report Management"],
      isAccessible: true,
    },
    {
      title: "Web Pencarian Kos",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["CodeIgniter", "MySQL", "PHP", "JQuery", "JavaScript"],
      link: "https://github.com/arvians-id/kosan",
      highlights: ["User Management", "Booking Management", "Report Management"],
      isAccessible: true,
    },
    {
      title: "Web Pencarian Lowongan Kerja",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["CodeIgniter", "MySQL", "PHP", "JQuery", "JavaScript"],
      link: "https://github.com/arvians-id/lowongan-kerja",
      highlights: ["User Management", "Katalog Management", "Report Management"],
      isAccessible: true,
    },
    {
      title: "Web Booking Salon",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["CodeIgniter", "MySQL", "PHP", "JQuery", "JavaScript"],
      link: "https://github.com/arvians-id/salon",
      highlights: ["User Management", "Booking Management", "Report Management"],
      isAccessible: true,
    },
    {
      title: "Web Pemesanan Internet",
      description: "",
      image: "/placeholder.svg?height=200&width=300",
      techStack: ["CodeIgniter", "MySQL", "PHP", "JQuery", "JavaScript"],
      link: "https://github.com/arvians-id/telkom",
      highlights: ["User Management", "Booking Management", "Report Management"],
      isAccessible: true,
    },
  ]

  const getTechIcon = (tech: string) => {
    const skill = skills.find((s) => s.name === tech)
    return skill?.icon || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg"
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
              <div className="flex items-center gap-4">
                <p className="text-gray-400">Software Engineer</p>
                <div className="flex items-center gap-1 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">South Jakarta, ID</span>
                </div>
              </div>
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
      <div className="container mx-auto px-4 py-6 flex-1">
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
              Exp
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
          <TabsContent value="about" className="mt-6 tab-transition">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-red-400">About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Software engineer with 2+ years of experience. Expertise spans multiple programming languages and technologies, with a strong focus on the Go programming language and other backend technologies. 
                  Committed to writing clean, maintainable code and following
                  best practices in software development. 
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-red-400">Educations</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-white">Bachelor's Degree in Informatics Engineering</h4>
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
          <TabsContent value="skills" className="mt-6 tab-transition">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-red-400">Technical Skills</CardTitle>
                <CardDescription className="text-white">Technologies and tools I work with, along with some experiments I've explored</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {["Languages", "Frameworks", "Databases", "Cloud", "DevOps", "APIs", "Tools"].map(
                    (category) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold mb-3 text-red-400">{category}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {skills
                            .filter((skill) => skill.category === category)
                            .map((skill) => (
                              <div
                                key={skill.name}
                                className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                              >
                                <img
                                  src={skill.icon || "/placeholder.svg"}
                                  alt={skill.name}
                                  className="w-5 h-5"
                                  onError={(e) => {
                                    e.currentTarget.src =
                                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg"
                                  }}
                                />
                                <span className="text-sm text-white">{skill.name}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experience Section */}
          <TabsContent value="experience" className="mt-6 tab-transition">
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
          <TabsContent value="projects" className="mt-6 tab-transition">
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
                      {project.isAccessible ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                          asChild
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                          asChild
                        >
                          <a href="mailto:widdyarfiansyah00@gmail.com">
                            <Mail className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
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
                        {project.techStack.map((tech) => (
                          <div key={tech} className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded text-xs">
                            <img
                              src={getTechIcon(tech) || "/placeholder.svg"}
                              alt={tech}
                              className="w-3 h-3"
                              onError={(e) => {
                                e.currentTarget.src =
                                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg"
                              }}
                            />
                            <span className="text-white">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contact Section */}
          <TabsContent value="contact" className="mt-6 tab-transition">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-red-400">Get In Touch</CardTitle>
                  <CardDescription>
                    I'm always open to discussing new opportunities and interesting projects.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-black border-red-500/50 text-white hover:bg-red-500/10 flex-shrink-0"
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
                      className="bg-black border-red-500/50 text-white hover:bg-red-500/10 flex-shrink-0"
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
                      className="bg-black border-red-500/50 text-white hover:bg-red-500/10 flex-shrink-0"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/widdyarfian/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 Arvians-ID</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
