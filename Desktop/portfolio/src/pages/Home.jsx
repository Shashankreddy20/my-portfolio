import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Mail } from 'lucide-react'

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center z-10"
        >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent">
              Bokka Shashank
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8"
          >
            Computer Science Engineering Student | Cloud & AI Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Passionate about building scalable applications with modern technologies.
            Expertise in C++, Python, and JavaScript with hands-on experience in cloud
            platforms and AI systems. Always learning, always growing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary shadow-lg hover:shadow-xl"
            >
              ⬇️ Download Resume
            </a>
            <Link to="/contact" className="btn btn-outline">
              Contact Me <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-400"
          >
            <a
              href="https://github.com/bokkashashank"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-100 dark:bg-dark-900 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-all"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:shashank@example.com"
              className="p-3 rounded-lg bg-gray-100 dark:bg-dark-900 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 transition-all"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Element */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl opacity-10 blur-2xl"
        ></motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Projects', value: '5+' },
              { label: 'Years Learning', value: '2+' },
              { label: 'Skills', value: '15+' },
              { label: 'Certifications', value: '3' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-white dark:bg-dark-800 shadow-sm"
              >
                <p className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <Link to="/contact" className="btn btn-primary shadow-lg hover:shadow-xl">
              Get In Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
