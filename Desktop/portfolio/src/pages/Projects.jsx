import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export const Projects = () => {
  const projects = [
    {
      title: 'AI Projects (GitHub)',
      description:
        'A collection of AI experiments, models and demos — visit my GitHub profile for full source and notebooks.',
      tech: ['AI', 'Python', 'ML', 'React'],
      image: '🤖',
      github: 'https://github.com/Shashankreddy20',
      highlights: [
        'Model experiments',
        'Notebooks & demos',
        'Scripts and utilities',
        'Active development',
      ],
    },
    {
      title: 'Ticket Booking System',
      description:
        'A comprehensive ticket booking system demonstrating advanced data structure concepts. Features queue-based ticket requests and stack-based cancellation operations with robust error handling and intuitive menu-driven interface.',
      tech: ['C++', 'Data Structures', 'Queue', 'Stack'],
      image: '🎫',
      github: 'https://github.com/bokkashashank/ticket-booking',
      highlights: [
        'Queue for ticket requests',
        'Stack for cancellations',
        'Error handling',
        'Menu-driven UI',
      ],
    },
    {
      title: 'AI Chatbot',
      description:
        'An intelligent chatbot powered by natural language processing. Uses rule-based responses and NLTK for understanding user queries. Designed to provide helpful responses across multiple domains.',
      tech: ['Python', 'NLTK', 'AI', 'NLP'],
      image: '🤖',
      github: 'https://github.com/bokkashashank/ai-chatbot',
      highlights: [
        'NLP-based processing',
        'Rule-based responses',
        'Intent recognition',
        'Context awareness',
      ],
    },
    {
      title: 'OS-Based Resource Management (IoT)',
      description:
        'An advanced IoT system focusing on intelligent resource management. Implements scheduling optimization, power management, and data synchronization for energy-efficient operations.',
      tech: ['IoT', 'C++', 'Linux', 'Resource Management'],
      image: '⚡',
      github: 'https://github.com/bokkashashank/iot-resource-manager',
      highlights: [
        'Scheduling optimization',
        'Power management',
        'Data sync',
        'Energy efficiency',
      ],
    },
    {
      title: 'Personal Portfolio',
      description:
        'Modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and full contact form integration. Designed for recruiters and clients.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: '💼',
      github: 'https://github.com/bokkashashank/portfolio',
      highlights: [
        'React + Vite',
        'Dark mode support',
        'Responsive design',
        'Contact form',
      ],
    },
    {
      title: 'Database Management System',
      description:
        'A comprehensive database management system with CRUD operations. Demonstrates solid understanding of database design, SQL optimization, and data integrity.',
      tech: ['MySQL', 'SQL', 'Database Design', 'C++'],
      image: '🗄️',
      github: 'https://github.com/bokkashashank/dbms',
      highlights: [
        'CRUD operations',
        'SQL optimization',
        'Data integrity',
        'Indexing',
      ],
    },
    {
      title: 'Cloud Infrastructure Project',
      description:
        'Hands-on project exploring cloud infrastructure with Docker and AWS. Demonstrates containerization, deployment, and cloud resource management.',
      tech: ['Docker', 'AWS', 'Linux', 'Cloud'],
      image: '☁️',
      github: 'https://github.com/bokkashashank/cloud-infra',
      highlights: [
        'Docker containerization',
        'AWS deployment',
        'Scaling strategies',
        'Monitoring',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="pt-20 min-h-screen pb-20">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-transparent dark:from-dark-900 dark:to-dark-950">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            A selection of projects showcasing my skills and expertise
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image/Icon */}
                <div className="h-40 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6 space-y-1">
                    {project.highlights.map((highlight, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-dark-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors font-semibold text-sm"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                      title="View Project"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              More Projects Coming Soon
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I'm actively working on new and exciting projects. Follow my GitHub to stay updated!
            </p>
            <a
              href="https://github.com/bokkashashank"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary shadow-lg hover:shadow-xl"
            >
              <Github size={18} /> View All on GitHub
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
