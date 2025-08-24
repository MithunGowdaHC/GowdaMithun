"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronUp,
  Menu,
  X,
  Calendar,
  MapPin,
  BookOpen,
  ShoppingCart,
  BarChart,
  Globe,
  GraduationCap,
  Award,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "experience", "education", "certifications", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

 const skills = {
  marketing: ["Amazon Ads", "Google Ads", "Google Analytics", "Excel", "Campaign Optimization"],
  tech: ["Node.js", "MongoDB", "JavaScript", "React", "Firebase", "Next.js", "Tailwind CSS"],
}
  const webDevProjects = [
    {
      title: "E-Learning Platform for Perceptron Solutions",
      description:
        "Built for a Canadian data scientist to sell stock market courses, featuring previews, paid content via Stripe, user auth, and AWS-optimized storage.",
      tech: ["React", "Tailwind CSS", "Aeternity", "MongoDB", "Express.js", "Node.js", "AWS"],
      icon: <BookOpen className="w-8 h-8" />,
      github: "https://github.com/MithunGowdaHC/E-Perceptron",
      demo: "https://percep.netlify.app/",
    },
    {
      title: "Trendura: E-Commerce Clothing Platform",
      description:
        "Fully responsive fashion e-commerce site with category-based filtering, Google Analytics integration, and Netlify CI/CD for seamless deployment.",
      tech: ["React", "Tailwind CSS", "Netlify", "Google Analytics"],
      icon: <ShoppingCart className="w-8 h-8" />,
      github: "https://github.com/MithunGowdaHC/DM-Trendura",
      demo: "https://trendura.netlify.app",
    },
  ]

  const digitalMarketingProjects = [
    {
      title: "Amazon PPC Campaign Optimization",
      description: `
    Optimized Amazon PPC campaigns for Bajaj products, increasing CTR by 18%, reducing CPC by 12%, and boosting conversions by 15% through strategic keyword and bidding adjustments.
    Streamlined weekly reporting using Bulk Operations in Excel, saving 8+ hours per week and accelerating campaign decisions.
    Tools Used: Amazon Ads Console, Bulk Operations, Drona, Power BI, Excel, A/B Testing.
  `,
      tech: ["Amazon Ads", "Excel", "Power BI", "A/B Testing"],
      icon: <BarChart className="w-8 h-8" />,
      github: "#",
      demo: "#",
    },
    {
      title: "Website Analytics & Portfolio Optimization",
      description: `
    Built and deployed a personal portfolio site using React and Netlify to showcase work and attract job opportunities.
    Integrated Google Analytics & Tag Manager to track user behavior and refine UX design based on insights.
    Improved average session duration by 22% by optimizing layout and CTA performance using GA4 insights.
  `,
      tech: ["React", "GA4", "Tag Manager", "Netlify"],
      icon: <Globe className="w-8 h-8" />,
      github: "#",
      demo: "#",
    },
  ]

  const experiences = [
    {
      company: "Hiveminds",
      role: "Digital Marketing Analyst",
      period: "Jan 2025 - May 2025",
      description:
        "Led Amazon Ads campaigns, automated reporting processes, and created high-converting creative campaigns that increased ROI by 40%.",
      location: "Bangalore, India",
    },
    {
      company: "Employability.life",
      role: "MERN Stack & DevOps Intern",
      period: "Jun 2024 - Sep 2024",
      description:
        "Worked on MERN stack applications and automated CI/CD workflows using Azure DevOps. Collaborated on multiple projects involving frontend development, backend APIs, and cloud deployment.",
      location: "Remote",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director at TechCorp",
      content:
        "Mithun is an extremely talented hybrid marketer-developer who always delivers results. His ability to bridge marketing and technology is remarkable.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Raj Patel",
      role: "Senior Developer at StartupXYZ",
      content:
        "Working with Mithun was a pleasure. His technical skills combined with marketing insights brought a unique perspective to our projects.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Chen",
      role: "Product Manager at InnovateLab",
      content:
        "Mithun's data-driven approach to both marketing and development makes him an invaluable asset to any team. Highly recommended!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-white/20 dark:border-slate-700/20 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
            >
              Mithun Gowda HC
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${
                    activeSection === item.id
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://drive.google.com/file/d/180XErGARWk5hjZbQ_CcvJbw4ouA37yGz/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-lg transition-all duration-300"
                >
                  <span className="flex items-center px-4 py-1">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </span>
                </Button>
              </a>
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button className="text-slate-600 dark:text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-white/20 dark:border-slate-700/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <a
                href="https://drive.google.com/file/d/180XErGARWk5hjZbQ_CcvJbw4ouA37yGz/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-lg transition-all duration-300"
                >
                  <span className="flex items-center justify-center px-4 py-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </span>
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated Background Elements */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/30 via-pink-200/30 to-blue-200/30 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Mithun Gowda HC
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              {"Digital Marketer & Full Stack Developer"}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {"I turn campaigns into clicks, and code into conversions."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="https://drive.google.com/file/d/180XErGARWk5hjZbQ_CcvJbw4ouA37yGz/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-900 hover:to-black text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:shadow-slate-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                {"Let's Connect"}
              </Button>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <ArrowDown className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 dark:bg-slate-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                    <img
                      src="/images/mithun-profile.jpg"
                      alt="Mithun Gowda HC - Digital Marketer & Frontend Developer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20"></div>
                </div>
              </motion.div>

              {/* About Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a final-year engineer turned digital marketer, blending creativity with analytics. I specialize in
                  Amazon Ads, Google Ads, and building responsive UIs using React. My unique background allows me to
                  bridge the gap between marketing strategy and technical implementation, delivering solutions that are
                  both data-driven and user-centric.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Bangalore, India</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Focus</h4>
                    <p className="text-gray-600 dark:text-gray-300">Digital Marketing & Development</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Marketing Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-800/50">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Marketing Expertise
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.marketing.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-900/50 dark:hover:to-pink-900/50 transition-colors border-0"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tech Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-800/50">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.tech.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-colors border-0"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "20+", label: "Campaigns Optimized" },
              { number: "5+", label: "Live Apps Built" },
              { number: "40%", label: "Average ROI Increase" },
              { number: "1+", label: "Years Experience" },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {metric.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my work spanning digital marketing tools, web applications, and innovative solutions.
            </p>
          </motion.div>

          {/* Web Development Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Web Development
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {webDevProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-indigo-900/30 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                          {project.icon}
                        </div>
                        <h3 className="text-2xl font-bold ml-4 dark:text-white">{project.title}</h3>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="px-3 py-1 border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-lg transition-all duration-300"
                            >
                              <span className="flex items-center px-4 py-1">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </span>
                            </Button>
                          </a>

                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              className="rounded-full bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-900 hover:to-black text-white shadow-lg hover:shadow-xl hover:shadow-slate-500/25 transition-all duration-300 hover:scale-105"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Digital Marketing Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Digital Marketing & Analytics
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {digitalMarketingProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-gradient-to-r from-green-100 via-teal-100 to-emerald-100 dark:from-green-900/30 dark:via-teal-900/30 dark:to-emerald-900/30 rounded-xl text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                          {project.icon}
                        </div>
                        <h3 className="text-2xl font-bold ml-4 dark:text-white">{project.title}</h3>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="px-3 py-1 border-green-300 dark:border-green-600 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white/50 dark:bg-slate-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey across marketing, development, and community engagement.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                        <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800/50">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                            Bachelor of Engineering
                          </h4>
                          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                            Malnad College of Engineering, Hassan
                          </p>
                        </div>
                        <div className="flex flex-col md:items-end">
                          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            2021 - 2025
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400">
                            <MapPin className="w-4 h-4 mr-2" />
                            Hassan, Karnataka
                          </div>
                        </div>
                      </div>

                      {/* Additional Details */}
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-purple-600" />
                            Key Achievements
                          </h5>
                          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Final Year Student (Expected 2025)
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Active in technical projects and internships
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              Focus on Full-Stack Development
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                            <Users className="w-4 h-4 mr-2 text-purple-600" />
                            Relevant Coursework
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Data Structures",
                              "Algorithms",
                              "Web Development",
                              "Database Systems",
                              "Software Engineering",
                              "Computer Networks",
                            ].map((course) => (
                              <Badge
                                key={course}
                                variant="secondary"
                                className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-300 border-0 text-xs"
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

 

{/* Skills & Certifications Section */}
<section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Skills & Certifications
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Professional expertise in digital marketing platforms and modern web technologies.
      </p>
    </motion.div>

    {/* Certifications - Horizontal Layout */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Professional Certifications
      </h3>
      
      <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
        {/* Amazon Ads Certification */}
        <div className="relative group flex-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Card className="relative p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 rounded-2xl h-full">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl mr-4">
                  <ShoppingCart className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Amazon Ads Certified</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Advanced advertising strategies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Sponsored Products", "Display Ads", "DSP", "Analytics"].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 text-orange-700 dark:text-orange-300 rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Google Ads Certification */}
        <div className="relative group flex-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Card className="relative p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 rounded-2xl h-full">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl mr-4">
                  <BarChart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Google Ads Certified</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Search & shopping expertise</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Search Ads", "Shopping", "Performance Max", "Analytics"].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>

    {/* Skills - Better Grid Layout */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Core Skills
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Marketing Skills */}
        <div>
          <div className="flex items-center mb-6">
            <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg mr-3">
              <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Marketing Skills
            </h4>
          </div>
          <div className="space-y-3">
            {skills.marketing.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg border border-purple-100 dark:border-purple-900/20 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md transition-all duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <div className="flex items-center mb-6">
            <div className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-lg mr-3">
              <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Technical Skills
            </h4>
          </div>
          <div className="space-y-3">
            {skills.tech.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg border border-cyan-100 dark:border-cyan-900/20 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-md transition-all duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 dark:bg-slate-900/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              {"Let's Connect"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {"Ready to collaborate? Drop me a message and let's create something amazing together."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-0">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 dark:text-white">Get in Touch</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {
                    "I'm always open to discussing new opportunities, creative projects, or potential collaborations. Whether you're looking for a digital marketer, Web developer, or someone who can bridge both worlds, let's talk!"
                  }
                </p>
              </div>

              <div className="flex space-x-6">
                <a
                  href="mailto:mithun@example.com"
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-900 hover:to-black text-white rounded-full hover:shadow-lg hover:shadow-slate-500/25 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/mithungowda10/"
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-900 hover:to-black text-white rounded-full hover:shadow-lg hover:shadow-slate-500/25 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/MithunGowdaHC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-900 hover:to-black text-white rounded-full hover:shadow-lg hover:shadow-slate-500/25 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>

              <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Response</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  I typically respond to messages within 24 hours. For urgent inquiries, feel free to connect with me on
                  LinkedIn.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 dark:bg-slate-950 text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Mithun Gowda HC
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Digital Marketer & Web Developer passionate about creating impactful solutions that drive results.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:mithungowdahc12a@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/mithungowda10/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/MithunGowdaHC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 dark:border-slate-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Mithun Gowda HC. All rights reserved. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-900 hover:to-black text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-slate-500/25 transition-all duration-300 z-50 flex items-center justify-center hover:scale-110"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  )
}
