import React from 'react'
import { motion } from 'framer-motion'

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C++', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'C', level: 85 },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 78 },
        { name: 'Git', level: 90 },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Communication', level: 85 },
        { name: 'Adaptability', level: 90 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: { duration: 1, ease: 'easeOut' },
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
            Skills & Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            A comprehensive overview of my technical and professional skills
          </motion.p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {skillCategories.map((category, categoryIdx) => (
              <motion.div
                key={categoryIdx}
                variants={itemVariants}
                className="p-8 rounded-lg bg-white dark:bg-dark-800 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-3 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                        <motion.div
                          variants={progressVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                          style={{
                            width: `${skill.level}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Frameworks & Libraries
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Additional technologies and frameworks I work with
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[
              'React',
              'Vite',
              'Tailwind CSS',
              'Framer Motion',
              'Express.js',
              'Node.js',
              'NLTK',
              'Data Structures',
              'Apache CloudStack',
              'Linux',
              'RESTful APIs',
              'Responsive Design',
            ].map((tech, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-4 rounded-lg bg-white dark:bg-dark-800 text-center font-semibold text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md hover:scale-105 transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg p-12 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Areas of Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-3 text-primary-100">Backend Development</h4>
                <p className="text-primary-50">
                  Building scalable, efficient backend systems with C++, Python, and Node.js.
                  Experience with databases and server optimization.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-primary-100">Frontend Development</h4>
                <p className="text-primary-50">
                  Creating responsive, interactive user interfaces with React and modern CSS.
                  Focused on user experience and performance.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-primary-100">Cloud & DevOps</h4>
                <p className="text-primary-50">
                  Hands-on experience with AWS, Docker, and cloud infrastructure. Understanding
                  of deployment and scaling.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-primary-100">AI & Data Science</h4>
                <p className="text-primary-50">
                  Building AI applications with Python, NLTK, and exploring generative AI.
                  Passionate about machine learning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
