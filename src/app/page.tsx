"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Zap,
  Award,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Download,
  X,
  Palette,
  Layout,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [loadingProject, setLoadingProject] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Changdev_Hirade_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleProjectClick = (projectTitle: string, demoUrl: string) => {
    setLoadingProject(projectTitle);
    setTimeout(() => {
      window.open(demoUrl, "_blank", "noopener,noreferrer");
      setLoadingProject(null);
    }, 300);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full opacity-10 animate-pulse-slow"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-secondary rounded-full opacity-10 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-accent rounded-full opacity-5 animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex relative items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for new opportunities
              <span className="absolute bottom-1 -right-20 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-soft flex items-center justify-center animate-floating">
                <Layout className="w-5 h-5 text-indigo-500" />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl lg:text-5xl font-bold leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Changdev Hirade</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-md lg:text-xl font-semibold text-slate-600 dark:text-slate-400"
            >
              MERN Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg relative text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed"
            >
              I craft modern web applications with React, Node.js, Express, and
              MongoDB. Passionate about creating clean, efficient, and
              user-friendly experiences that make a difference.
              <span className="absolute -top-8 right-2 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-soft flex items-center justify-center animate-floating">
                <Palette className="w-5 h-5 text-pink-500" />
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="btn-primary px-8 py-3 rounded-full text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300">
                View My Work
              </button>
              <button
                onClick={() => setShowResumeModal(true)}
                className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              >
                View Resume
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-80 lg:h-80 rounded-full bg-gradient-primary p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-animated opacity-20 animate-gradient-shift"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-4xl lg:text-6xl font-bold">
                      CH
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-soft-lg flex items-center justify-center animate-bounce-slow">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-soft-lg flex items-center justify-center animate-bounce-slow"
                style={{ animationDelay: "0.5s" }}
              >
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <div className="absolute top-1/2 -right-16 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-soft flex items-center justify-center animate-floating">
                <Globe className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Marquee Section */}
      <section className="py-12 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden"
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[
              "Communication",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Time Management",
              "Attention to Detail",
              "Leadership",
              "Creativity",
            ].map((skill, index) => (
              <div
                key={index}
                className="mx-8 text-lg font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                {skill}
              </div>
            ))}
            {[
              "Communication",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Time Management",
              "Attention to Detail",
              "Leadership",
              "Creativity",
            ].map((skill, index) => (
              <div
                key={index + 8}
                className="mx-8 text-lg font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section-padding relative">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" relative text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A passionate developer who loves turning ideas into reality
              through code
            </p>
            <span className="absolute top-1 right-1/3 w-10 h-10 bg-transparent dark:bg-slate-800 rounded-full  flex items-center justify-center animate-bounce-slow">
              <Code className="w-6 h-6 text-blue-600" />
            </span>
          </motion.div>

          <div className=" grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className=" relative text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I&apos;m a passionate MERN Stack Developer with a strong
                foundation in building full-stack web applications. My journey
                in web development started with a curiosity about how websites
                work, which led me to dive deep into modern JavaScript
                frameworks and libraries.
                <span
                  className="absolute -top-10 left-2 w-12 h-12 bg-transparent dark:bg-slate-800 rounded-full  flex items-center justify-center animate-bounce-slow"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Database className="w-6 h-6 text-purple-600" />
                </span>
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I specialize in creating responsive, user-friendly interfaces
                with React and building robust backend systems with Node.js and
                Express. I&apos;m experienced in working with MongoDB for
                database management and enjoy solving complex problems with
                elegant solutions.
              </p>

              <div className=" relative grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-soft hover-card">
                  <div className="text-3xl font-bold gradient-text mb-2">1</div>
                  <div className="text-slate-600 dark:text-slate-400">
                    Years Experience
                  </div>
                </div>
                <div className=" relative text-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-soft hover-card">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    20+
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    Projects Completed
                  </div>
                </div>
                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-transparent dark:bg-slate-800 rounded-full  flex items-center justify-center animate-floating">
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-soft-lg hover-card">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Professional Summary
                </h3>
                <div className="space-y-4">
                  {[
                    "1 years of experience including internship in web development",
                    "Proficient in React, Node.js, Express, and MongoDB",
                    "Experience with RESTful API design and implementation",
                    "Strong understanding of JavaScript and TypeScript",
                    "Familiar with version control systems like Git",
                    "Hands-on experience working on various website modules",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-400">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="section-padding bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm relative"
      >
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Skills & Expertise
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Languages",
                icon: <Code className="w-6 h-6" />,
                skills: ["JavaScript", "TypeScript", "HTML5", "CSS3/SCSS"],
              },
              {
                title: "Frontend",
                icon: <Smartphone className="w-6 h-6" />,
                skills: ["React.js", "Next.js", "Redux", "TailwindCSS"],
              },
              {
                title: "Backend",
                icon: <Zap className="w-6 h-6" />,
                skills: [
                  "Node.js",
                  "Express.js",
                  "RESTful APIs",
                  "JWT Authentication",
                ],
              },
              {
                title: "Databases",
                icon: <Database className="w-6 h-6" />,
                skills: ["MongoDB", "Mongoose", "Firebase", "SQL Basics"],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-card bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-soft-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-400">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding relative">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Experience
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              My professional journey and achievements
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="timeline"
            >
              {/* Junior Software Developer */}
              <div className="timeline-item">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-soft-lg hover-card">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                        Junior Software Developer
                      </h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        Paras Infotech
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-semibold">
                        Jan 2025 - Present
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Developed and maintained web applications using the MERN stack",
                      "Collaborated with the design team to implement responsive UI components",
                      "Built RESTful APIs for client-server communication",
                      "Participated in code reviews and implemented feedback",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 dark:text-slate-400">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Intern Web Developer */}
              <div className="timeline-item">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-soft-lg hover-card">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                        Intern Web Developer
                      </h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400">
                        Web Development Internship
                      </p>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-gradient-secondary text-white rounded-full text-sm font-semibold">
                        Feb 2024 - Aug 2024
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Worked on different website modules and components",
                      "Learned and improved technical skills through hands-on experience",
                      "Collaborated with senior developers on various web development projects",
                      "Gained practical experience with modern web technologies and best practices",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 dark:text-slate-400">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="section-padding bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm relative"
      >
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "iNotebook-Pro",
                description:
                  "A cloud-based note-taking application with user authentication and real-time updates",
                image: "/api/placeholder/400/250",
                tech: ["React", "Node.js", "Express", "MongoDB"],
                demo: "https://github.com/Changdev-2001", //not deployed
                code: "https://github.com/Changdev-2001/iNotebook-Mern-Stack",
              },
              {
                title: "Convert-All-Files",
                description:
                  "A file conversion utility supporting multiple formats with drag-and-drop interface",
                image: "/api/placeholder/400/250",
                tech: ["React", "Node.js", "Express", "FFmpeg"],
                demo: "https://convert-all-types-files.vercel.app/",
                code: "https://github.com/Changdev-2001/Convert-All-Files",
              },
              {
                title: "NewsApp",
                description:
                  "A news aggregator with category filtering, search, and personalized recommendations",
                image: "/api/placeholder/400/250",
                tech: ["React", "News API", "Bootstrap"],
                demo: "https://changdev-2001.github.io/newsapp",
                code: "https://github.com/Changdev-2001/newsapp",
              },
              {
                title: "Text-Analyzer",
                description:
                  "A comprehensive text utility app with various text manipulation and analysis features",
                image: "/api/placeholder/400/250",
                tech: ["React", "JavaScript", "CSS"],
                demo: "https://changdev-2001.github.io/text-formation",
                code: "https://github.com/Changdev-2001/text-formation",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="project-card bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-soft-lg cursor-pointer group"
                onClick={() => handleProjectClick(project.title, project.demo)}
              >
                <div className="h-48 bg-gradient-animated relative overflow-hidden group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 flex items-center justify-center transition-all duration-300">
                    <div className="text-center text-white group-hover:scale-110 transition-transform duration-300">
                      {loadingProject === project.title ? (
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                          <ExternalLink className="w-8 h-8" />
                        </div>
                      )}
                      <p className="text-sm opacity-90 group-hover:opacity-100 font-medium">
                        {loadingProject === project.title
                          ? "Opening..."
                          : "Click to View Demo"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="project-tech-tag px-3 py-1 bg-gradient-primary/10 text-slate-700 dark:text-slate-300 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className="flex gap-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors hover:scale-105 bg-white dark:bg-slate-700 px-3 py-2 rounded-lg hover:shadow-md"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Demo
                    </Link>
                    <Link
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors hover:scale-105 bg-white dark:bg-slate-700 px-3 py-2 rounded-lg hover:shadow-md"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Changdev-2001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding relative">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Let&apos;s work together to bring your ideas to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  Let&apos;s Connect
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  I&apos;m always open to discussing new opportunities,
                  interesting projects, or just having a chat about technology.
                  Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-soft hover-card">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      Email
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      changdevhirade0301@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-soft hover-card">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      Phone
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      +91 9689084883
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-soft hover-card">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      Location
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Pune, Maharashtra , India 412810
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/changdevhirade2001"
                  target="_blank"
                  className="w-12 h-12 bg-blue-600 dark:bg-blue-900 rounded-xl shadow-soft flex items-center justify-center hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6 text-slate-50 dark:text-slate-400" />
                </a>
                <a
                  href="https://github.com/Changdev-2001"
                  target="_blank"
                  className="w-12 h-12 bg-black dark:bg-black-800 rounded-xl shadow-soft flex items-center justify-center hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Github className="w-6 h-6 text-slate-50 dark:text-slate-400" />
                </a>
                <a
                  href="https://twitter.com/changdevhirade"
                  target="_blank"
                  className="w-12 h-12 bg-blue-400 dark:bg-blue-700 rounded-xl shadow-soft flex items-center justify-center hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Twitter className="w-6 h-6 text-slate-50 dark:text-slate-400" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-soft-lg hover-card"
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                Send Me a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary px-6 py-3 rounded-xl text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated opacity-10 animate-gradient-shift"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="wave-animation mx-2"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Changdev Hirade
            </h3>
            <p className="text-slate-400 mb-6">MERN Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-8"
          >
            <a
              href="https://linkedin.com/in/changdevhirade2001"
              target="_blank"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Changdev-2001"
              target="_blank"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/changdevhirade"
              target="_blank"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-slate-800 pt-8"
          >
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()} Changdev Hirade. All rights
              reserved.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                Resume Preview
              </h3>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              </button>
            </div>
            <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
              <div className="flex justify-center mb-6">
                <Image
                  width={1000}
                  height={1000}
                  src="/ResumePNG.png"
                  alt="Resume Preview"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
