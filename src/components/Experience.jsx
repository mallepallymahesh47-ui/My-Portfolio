import { Icons } from './Icons'
import { experience, certifications, personalInfo } from '../data/portfolio'
import ScrollReveal from './ScrollReveal'

export default function Experience() {
  return (
    <section id="experience" className="relative" aria-label="Experience">
      <div className="section-wrapper">
        <ScrollReveal>
          <p className="section-subtitle">My journey</p>
          <h2 className="section-title mb-12">Experience & Certification</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Work Experience */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white">
                  <Icons.Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 dark:text-white">Work Experience</h3>
              </div>
            </ScrollReveal>

            <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800 space-y-8">
              {experience.map((exp, i) => (
                <ScrollReveal key={i} delay={100 + i * 100}>
                  <div className="relative glass-card p-6 hover:translate-y-0">
                    {/* Timeline dot */}
                    <div className="absolute -left-[calc(2rem+5px)] top-6 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-primary-100 dark:ring-dark-800" />

                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={personalInfo.gfgLogo}
                        alt={exp.company}
                        className="w-12 h-12 rounded-xl object-contain bg-white dark:bg-dark-700 p-1.5 border border-dark-200/30 dark:border-dark-600/30 flex-shrink-0"
                        loading="lazy"
                        width="48"
                        height="48"
                      />
                      <div>
                        <h4 className="font-bold text-dark-800 dark:text-white text-base">
                          {exp.title}
                        </h4>
                        <p className="text-primary-500 font-semibold text-sm">{exp.company}</p>
                        <p className="text-dark-400 text-xs mt-1">{exp.period}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-dark-500 dark:text-dark-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <ScrollReveal delay={200}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
                  <Icons.Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 dark:text-white">Certifications</h3>
              </div>
            </ScrollReveal>

            <div className="grid gap-3">
              {certifications.map((cert, i) => (
                <ScrollReveal key={i} delay={250 + i * 50}>
                  <div className="glass-card px-4 py-3 flex items-center gap-3 group hover:translate-y-0">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icons.Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="flex-1">
                      {typeof cert === 'string' ? (
                        <span className="text-sm text-dark-600 dark:text-dark-300 font-medium">{cert}</span>
                      ) : (
                        <>
                          {(() => {
                            const [titleText, providerText] = cert.title.split(' — ')
                            return (
                              <div>
                              <div className="font-bold text-base sm:text-lg text-dark-700 dark:text-dark-100">{titleText}</div>
                                {providerText && (
                                  <div className="text-sm text-dark-500 dark:text-dark-400 mt-1">{providerText}</div>
                                )}
                              </div>
                            )
                          })()}
                        </>
                      )}
                    </div>
                    {typeof cert === 'object' && cert.link && (
                      <button
                        onClick={() => window.open(cert.link, '_blank')}
                        className="ml-2 p-1.5 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors flex-shrink-0"
                        title="View Certificate"
                        aria-label="View certificate"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
