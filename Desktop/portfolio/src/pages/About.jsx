import React from 'react'
import { motion } from 'framer-motion'
import { Code, Cloud, Brain, Users } from 'lucide-react'

export const About = () => {
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
      transition: { duration: 0.8 },
    },
  }

  const highlights = [
    {
      icon: Code,
      title: 'Strong Technical Foundation',
      description: 'Proficient in C++, Python, and JavaScript with solid understanding of data structures and algorithms.',
    },
    {
      icon: Cloud,
      title: 'Cloud & Systems Expert',
      description: 'Hands-on experience with AWS, Docker, and Apache CloudStack. Interested in scalable system design.',
    },
    {
      icon: Brain,
      title: 'AI & ML Enthusiast',
      description: 'Exploring machine learning and NLP. Built an AI chatbot and passionate about generative AI.',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Strong communication skills with experience in collaborative projects and internships.',
    },
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-transparent dark:from-dark-900 dark:to-dark-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Computer Science Engineering Student passionate about Cloud & AI
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Hello! 👋
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I'm Bokka Shashank, a passionate Computer Science Engineering student at
                Lovely Professional University. I'm driven by the desire to solve complex
                problems and build solutions that make a real impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                My journey in tech started with a strong foundation in C++ and has evolved
                to include Python and JavaScript. I'm particularly fascinated by cloud
                technologies and artificial intelligence, which I actively explore through
                projects and certifications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond coding, I'm a firm believer in continuous learning, teamwork, and
                rational thinking. I enjoy collaborating with others to bring ideas to life.
              </p>
            </motion.div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {highlights.map((highlight, i) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-8 rounded-lg bg-white dark:bg-dark-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg p-12 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-8">Quick Facts</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-4xl font-bold mb-2">2+</p>
                <p className="text-primary-100">Years of Learning</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-primary-100">Technical Skills</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">5+</p>
                <p className="text-primary-100">Completed Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">3</p>
                <p className="text-primary-100">Certifications</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">2</p>
                <p className="text-primary-100">Internships</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">6.0</p>
                <p className="text-primary-100">CGPA</p>
              </div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 p-8 rounded-lg bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Interests & Values
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Technical Interests
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Cloud Computing, Artificial Intelligence, Machine Learning, System Design,
                  Data Structures
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Core Values
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Continuous Learning, Problem Solving, Team Collaboration, Rational Thinking,
                  Adaptability
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  What I'm Looking For
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Opportunities to work on impactful projects, learn from experienced
                  professionals, and contribute to innovative solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
