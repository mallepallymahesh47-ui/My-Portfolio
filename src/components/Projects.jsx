import { Icons } from './Icons'
import { projects } from '../data/portfolio'
import ScrollReveal from './ScrollReveal'

export default function Projects() {
  return (
    <section id="projects" className="relative" aria-label="Projects">
      <div className="section-wrapper">
        <ScrollReveal>
          <p className="section-subtitle">What I've built</p>
          <h2 className="section-title mb-12">Featured Projects</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <div className="glass-card overflow-hidden group h-full flex flex-col">
                {/* Card Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl" role="img" aria-label={project.title}>
                      {project.icon}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-btn w-8 h-8"
                          aria-label={`${project.title} GitHub`}
                        >
                          <Icons.GitHub className="w-4 h-4" />
                        </a>
                      )}
                      {project.youtube && (
                        <a
                          href={project.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-btn w-8 h-8"
                          aria-label={`${project.title} YouTube`}
                        >
                          <Icons.YouTube className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-btn w-8 h-8"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <Icons.ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium mb-3">
                      ★ Featured
                    </span>
                  )}

                  <h3 className="text-lg font-bold text-dark-800 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-0 flex-1 flex flex-col">
                  <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-badge text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover gradient line */}
                <div className="h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/mallepallymahesh47-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              <Icons.GitHub className="w-4 h-4" />
              See More on GitHub
              <Icons.ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
