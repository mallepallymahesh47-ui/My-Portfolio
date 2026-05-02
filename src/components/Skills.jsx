import { useState } from 'react'
import { skills } from '../data/portfolio'
import ScrollReveal from './ScrollReveal'

/* Skill logo URLs from CDNs (SVG logos for crisp rendering at any size) */
const skillLogos = {
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'LangChain': 'https://avatars.githubusercontent.com/u/126733545?s=200',
  'LangGraph': 'https://avatars.githubusercontent.com/u/126733545?s=200',
  'LangSmith': 'https://avatars.githubusercontent.com/u/126733545?s=200',
  'LLMs / GPT': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openal/openal-original.svg',
  'RAG': 'https://img.icons8.com/color/96/000000/artificial-intelligence.png',
  'NLP': 'https://img.icons8.com/color/96/000000/natural-language-processing.png',
  'Transformers': 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
  'Prompt Engineering': 'https://img.icons8.com/color/96/000000/brain.png',
  'CrewAI': 'https://img.icons8.com/color/96/000000/teamwork.png',
  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'Streamlit': 'https://streamlit.io/images/brand/streamlit-mark-color.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'FAISS': 'https://img.icons8.com/color/96/000000/database.png',
  'Qdrant': 'https://img.icons8.com/color/96/000000/target.png',
  'ChromaDB': 'https://img.icons8.com/color/96/000000/rainbow.png',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Git & GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Hugging Face': 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'Postman': 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
}

/* Emoji fallbacks for skills without logos */
const skillEmojis = {
  'LLMs / GPT': '🤖',
  'RAG': '🔗',
  'NLP': '🗣️',
  'Prompt Engineering': '🪄',
  'CrewAI': '👥',
  'FAISS': '⚡',
  'Qdrant': '🎯',
  'ChromaDB': '🎨',
}
export default function Skills() {
  const [activeFilter, setActiveFilter] = useState(skills.categories[0]?.id || 'ai')

  const filteredSkills = skills.items.filter(s => s.category === activeFilter)

  return (
    <section id="skills" className="relative" aria-label="Skills">
      <div className="section-wrapper">
        <ScrollReveal>
          <p className="section-subtitle">What I work with</p>
          <h2 className="section-title mb-8">Skills & Technologies</h2>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Skill categories">
            {skills.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                role="tab"
                aria-selected={activeFilter === cat.id}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-700 border border-dark-200/50 dark:border-dark-700/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Grid with Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 50}>
              <div className="glass-card p-5 group cursor-default flex flex-col items-center text-center gap-3">
                {/* Logo or Emoji */}
                <div className="w-12 h-12 rounded-xl bg-dark-50 dark:bg-dark-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {skillLogos[skill.name] ? (
                    <img
                      src={skillLogos[skill.name]}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                      width="32"
                      height="32"
                    />
                  ) : (
                    <span className="text-2xl" role="img" aria-label={skill.name}>
                      {skillEmojis[skill.name] || '💡'}
                    </span>
                  )}
                </div>
                {/* Skill Name */}
                <h3 className="font-semibold text-sm text-dark-700 dark:text-dark-200">
                  {skill.name}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
