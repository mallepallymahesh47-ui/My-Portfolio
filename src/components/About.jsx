import { Icons } from './Icons'
import { personalInfo } from '../data/portfolio'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="relative" aria-label="About me">
      <div className="section-wrapper">
        <ScrollReveal>
          <p className="section-subtitle">Get to know me</p>
          <h2 className="section-title mb-12">About Me</h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="glass-card p-6 md:p-10 hover:translate-y-0 max-w-4xl mx-auto">
            {/* Bio paragraphs with proper spacing */}
            <div className="text-dark-600 dark:text-dark-300 leading-relaxed text-base space-y-4">
              {personalInfo.bio.split('\n\n').map((paragraph, i) => (
                <p key={i} className={paragraph.startsWith('✦') ? 'text-primary-500 dark:text-primary-400 italic font-medium' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Info row */}
            <div className="mt-8 pt-6 border-t border-dark-200/50 dark:border-dark-600/30 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <Icons.MapPin className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-xs text-dark-400 dark:text-dark-500 font-medium uppercase tracking-wide">Location</p>
                  <p className="font-semibold text-dark-700 dark:text-dark-200 text-sm">{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Icons.Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-dark-400 dark:text-dark-500 font-medium uppercase tracking-wide">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-semibold text-dark-700 dark:text-dark-200 text-sm hover:text-primary-500 transition-colors truncate block max-w-[200px]"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                  <Icons.Phone className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs text-dark-400 dark:text-dark-500 font-medium uppercase tracking-wide">Phone</p>
                  <p className="font-semibold text-dark-700 dark:text-dark-200 text-sm">{personalInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
