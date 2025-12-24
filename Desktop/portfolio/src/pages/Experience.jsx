import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Briefcase, BookOpen, Trophy } from 'lucide-react'

export const Experience = () => {
  const [activeTab, setActiveTab] = useState('internships')

  const internships = [
    {
      title: 'Summer Internship',
      company: 'Self Learning Project',
      period: 'March 2025 - Present',
      description:
        'Building and implementing a comprehensive Ticket Booking System using C++ and advanced data structures.',
      achievements: [
        'Practical application of Queue and Stack data structures',
        'Implemented robust error handling',
        'Developed menu-driven user interface',
        'Enhanced problem-solving skills',
      ],
      icon: Briefcase,
    },
    {
      title: 'NGO Internship',
      company: 'Old Age Home Community Service',
      period: 'June 2024 - July 2024',
      description:
        'Volunteered at an old age home, contributing to community development and social responsibility.',
      achievements: [
        'Community service and elderly care',
        'Social responsibility development',
        'Team collaboration and empathy',
        'Understanding societal needs',
      ],
      icon: Briefcase,
    },
  ]

  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 – Generative AI',
      issuer: 'Oracle',
      date: '2025',
      description: 'Advanced certification in Oracle Cloud Infrastructure with focus on generative AI applications.',
    },
    {
      title: 'Build Generative AI Apps with No-Code Tools',
      issuer: 'Various',
      date: '2024',
      description: 'Hands-on training in building generative AI applications without coding.',
    },
    {
      title: 'ChatGPT Made Easy – AI Essentials',
      issuer: 'AI Learning Platform',
      date: '2024',
      description: 'Comprehensive course on ChatGPT, prompt engineering, and AI fundamentals.',
    },
  ]

  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Lovely Professional University',
      period: '2023 - 2027',
      cgpa: '6.0',
      description: 'Currently pursuing bachelor\'s degree with focus on cloud computing and AI.',
      courses: ['Data Structures', 'Algorithms', 'Database Management', 'Web Development'],
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'Narayana College',
      period: '2021 - 2023',
      cgpa: '98%',
      description: 'Completed intermediate education with excellent academic performance.',
    },
    {
      degree: 'School (10th Grade)',
      institution: 'Abhyas High School',
      period: '2006 - 2021',
      cgpa: '85%',
      description: 'Completed secondary education with strong foundation in STEM subjects.',
    },
  ]

  const achievements = [
    {
      title: '3rd Rank – Hackathon',
      organization: 'Lovely Professional University',
      date: '2024',
      description: 'Secured 3rd position in the university hackathon for innovative problem-solving.',
      icon: Trophy,
    },
    {
      title: '2nd Place – Quiz Competition',
      organization: 'Lovely Professional University',
      date: '2024',
      description: 'Achieved 2nd place in a competitive technical quiz competition.',
      icon: Trophy,
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

  const renderInternships = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {internships.map((exp, i) => {
        const Icon = exp.icon
        return (
          <motion.div key={i} variants={itemVariants}>
            <div className="relative pl-8 border-l-2 border-primary-500">
              <div className="absolute left-[-13px] top-0 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-dark-950"></div>

              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    Key Achievements:
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <span className="inline-block w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mt-2"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )

  const renderCertifications = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {certifications.map((cert, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="p-6 bg-white dark:bg-dark-800 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
              <Award className="text-yellow-600 dark:text-yellow-400" size={24} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">
                {cert.date}
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {cert.title}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
            {cert.issuer}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {cert.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )

  const renderEducation = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {education.map((edu, i) => (
        <motion.div key={i} variants={itemVariants}>
          <div className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute left-[-13px] top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-dark-950"></div>

            <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {edu.cgpa}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">CGPA</p>
                </div>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {edu.period}
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-4">{edu.description}</p>

              {edu.courses && (
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    Key Courses:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )

  const renderAchievements = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {achievements.map((achievement, i) => {
        const Icon = achievement.icon
        return (
          <motion.div
            key={i}
            variants={itemVariants}
            className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800/30"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-yellow-200 dark:bg-yellow-800/50 rounded-lg">
                <Icon className="text-yellow-700 dark:text-yellow-400" size={28} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-yellow-700 dark:text-yellow-300 uppercase font-bold">
                  {achievement.date}
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {achievement.title}
            </h3>
            <p className="text-yellow-700 dark:text-yellow-400 font-semibold mb-3">
              {achievement.organization}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {achievement.description}
            </p>
          </motion.div>
        )
      })}
    </motion.div>
  )

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
            Experience & Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Internships, certifications, education, and achievements
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {[
              { id: 'internships', label: 'Internships', icon: Briefcase },
              { id: 'certifications', label: 'Certifications', icon: Award },
              { id: 'education', label: 'Education', icon: BookOpen },
              { id: 'achievements', label: 'Achievements', icon: Trophy },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="content">
            {activeTab === 'internships' && renderInternships()}
            {activeTab === 'certifications' && renderCertifications()}
            {activeTab === 'education' && renderEducation()}
            {activeTab === 'achievements' && renderAchievements()}
          </div>
        </div>
      </section>
    </div>
  )
}
