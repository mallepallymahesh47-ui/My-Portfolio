import { useState } from 'react'
import { Icons } from './Icons'
import { personalInfo } from '../data/portfolio'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    try {
      const response = await fetch('https://formspree.io/f/xdabkrnd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSent(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 3000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again or contact me directly.')
    } finally {
      setSending(false)
    }
  }

  const contactMethods = [
    {
      icon: <Icons.Mail className="w-5 h-5" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Icons.Phone className="w-5 h-5" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <Icons.MapPin className="w-5 h-5" />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: <Icons.LinkedIn className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Mallepalli Mahesh',
      href: personalInfo.linkedin,
      color: 'from-blue-600 to-blue-700',
    },
  ]

  return (
    <section id="contact" className="relative" aria-label="Contact">
      <div className="section-wrapper">
        <ScrollReveal>
          <p className="section-subtitle">Let's connect</p>
          <h2 className="section-title mb-12">Get in Touch</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <ScrollReveal delay={100}>
              <p className="text-dark-500 dark:text-dark-400 text-base leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </ScrollReveal>

            {contactMethods.map((method, i) => (
              <ScrollReveal key={method.label} delay={150 + i * 80}>
                <div className="glass-card p-4 flex items-center gap-4 group hover:translate-y-0">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-dark-400 dark:text-dark-500 font-medium uppercase tracking-wide">
                      {method.label}
                    </p>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-semibold text-dark-700 dark:text-dark-200 hover:text-primary-500 transition-colors truncate block"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-dark-700 dark:text-dark-200 truncate">
                        {method.value}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Form */}
          <ScrollReveal className="lg:col-span-3" delay={200}>
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5 hover:translate-y-0">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-dark-700 dark:text-dark-200 mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-700/50 border border-dark-200/50 dark:border-dark-600/30 text-dark-800 dark:text-dark-100 placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-dark-700 dark:text-dark-200 mb-2">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-700/50 border border-dark-200/50 dark:border-dark-600/30 text-dark-800 dark:text-dark-100 placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-dark-700 dark:text-dark-200 mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-700/50 border border-dark-200/50 dark:border-dark-600/30 text-dark-800 dark:text-dark-100 placeholder-dark-400 dark:placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none text-sm"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className={`btn-primary w-full justify-center ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : sending ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Icons.Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
