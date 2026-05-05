import { Icons } from './Icons'
import { personalInfo } from '../data/portfolio'
import { useTypingEffect } from '../hooks/useAnimations'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.titles, 80, 50, 2000)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/5 to-transparent rounded-full" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="section-wrapper w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <p className="text-dark-500 dark:text-dark-400 text-lg mb-2 font-medium">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-800 dark:text-white leading-tight whitespace-nowrap">
                  Mallepalli <span className="gradient-text">Mahesh</span>
                </h1>
              </div>

              {/* Typing title */}
              <div className="flex items-center gap-2 text-lg sm:text-xl text-dark-600 dark:text-dark-300">
                <Icons.Code className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-mono">
                  {typedText}
                  <span className="inline-block w-0.5 h-5 bg-primary-500 ml-0.5 animate-typing" />
                </span>
              </div>

              {/* Bio */}
              <p className="text-dark-500 dark:text-dark-400 text-base leading-relaxed max-w-lg">
                I have a strong foundation in ML & Deep Learning, and I specialize in Generative AI — building real-world solutions with LangChain, LLMs, and RAG architectures.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#projects" className="btn-primary">
                  <Icons.Code className="w-4 h-4" />
                  View Projects
                </a>
                <a
                  href="/assets/Mahesh_GEN_AI.pdf"
                  download="Mahesh_GEN_AI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Icons.Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="GitHub Profile"
                >
                  <Icons.GitHub className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="LinkedIn Profile"
                >
                  <Icons.LinkedIn className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="icon-btn"
                  aria-label="Send Email"
                >
                  <Icons.Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Profile Image */}
          <ScrollReveal className="order-1 lg:order-2 flex justify-center" delay={200}>
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-2xl scale-110 animate-pulse-slow" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Rotating gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-primary-400 p-1 animate-[spin_8s_linear_infinite]">
                  <div className="w-full h-full rounded-full bg-white dark:bg-dark-900" />
                </div>
                {/* Photo */}
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <img
                    src={personalInfo.profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-[center_20%]"
                    loading="eager"
                    width="384"
                    height="384"
                  />
                </div>
                {/* Floating tech badges */}
                <div className="absolute -top-2 -right-2 px-3 py-1.5 rounded-xl bg-white dark:bg-dark-700 shadow-lg border border-dark-200/30 dark:border-dark-600/30 text-sm font-semibold animate-float">
                  🐍 Python
                </div>
                <div className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-xl bg-white dark:bg-dark-700 shadow-lg border border-dark-200/30 dark:border-dark-600/30 text-sm font-semibold animate-float-delayed">
                  🤖 GenAI
                </div>
                <div className="absolute top-1/2 -right-6 px-3 py-1.5 rounded-xl bg-white dark:bg-dark-700 shadow-lg border border-dark-200/30 dark:border-dark-600/30 text-sm font-semibold animate-float hidden sm:block">
                  ⛓️ LangChain
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-400 animate-bounce">
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-dark-300 dark:border-dark-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary-500 rounded-full animate-[slideDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
