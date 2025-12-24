import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Initialize EmailJS (replace with your public key)
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'loading', 'success', 'error'
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Validate form
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setStatus('error')
        setMessage('Please fill in all fields')
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setStatus('error')
        setMessage('Please enter a valid email address')
        return
      }

      // Send email via EmailJS
      const templateParams = {
        to_email: 'shashank@example.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      )

      setStatus('success')
      setMessage('Message sent successfully! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })

      // Clear message after 5 seconds
      setTimeout(() => {
        setStatus(null)
        setMessage('')
      }, 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      setMessage(
        'Failed to send message. Please try again or contact me directly at shashank@example.com'
      )
    }
  }

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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shashank@example.com',
      href: 'mailto:shashank@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9999999999',
      href: 'tel:+919999999999',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Punjab, India',
      href: null,
    },
  ]

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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Have a question or want to work together? Let me know!
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h2>

              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <motion.div key={i} variants={itemVariants}>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors group"
                      >
                        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-colors">
                          <Icon className="text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-1">
                            {info.label}
                          </p>
                          <p className="text-lg font-bold text-gray-900 dark:text-white">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-800">
                        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                          <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-1">
                            {info.label}
                          </p>
                          <p className="text-lg font-bold text-gray-900 dark:text-white">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )
              })}

              {/* Social Links */}
              <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200 dark:border-dark-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {[
                    {
                      name: 'GitHub',
                      url: 'https://github.com/bokkashashank',
                      icon: '🐙',
                    },
                    {
                      name: 'LinkedIn',
                      url: 'https://linkedin.com/in/bokka-shashank',
                      icon: '💼',
                    },
                    {
                      name: 'Twitter',
                      url: 'https://twitter.com/bokkashashank',
                      icon: '🐦',
                    },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 dark:bg-dark-800 rounded-lg flex items-center justify-center text-2xl hover:bg-primary-600 hover:scale-110 transition-all"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 bg-white dark:bg-dark-800 rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Send Me a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 resize-none transition-all"
                    required
                  />
                </div>

                {/* Status Messages */}
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      status === 'success'
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
                        : status === 'error'
                        ? 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400'
                        : 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400'
                    }`}
                  >
                    {status === 'success' ? (
                      <CheckCircle size={20} />
                    ) : status === 'error' ? (
                      <AlertCircle size={20} />
                    ) : (
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    )}
                    <span className="text-sm font-semibold">{message}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    status === 'loading'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'btn btn-primary hover:shadow-lg'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Other Ways to Connect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out to me through any of these channels. I typically
              respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://linkedin.com/in/bokka-shashank"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://github.com/bokkashashank"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                🐙 GitHub
              </a>
              <a
                href="mailto:shashank@example.com"
                className="btn btn-secondary"
              >
                📧 Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
