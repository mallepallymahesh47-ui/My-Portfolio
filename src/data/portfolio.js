export const personalInfo = {
  name: 'Mallepalli Mahesh',
  role: 'Python Developer & GenAI Engineer',
  titles: ['Python Developer', 'GenAI Engineer', 'AI Enthusiast', 'GFG Campus Ambassador'],
  bio: `Hey! I'm Mallepalli Mahesh a B.Tech AI & ML student at Shadan College of Engineering and Technology, Hyderabad. Specialized in building intelligent applications using LangChain, LangGraph, Large Language Models, and RAG architectures.

I have a strong foundational understanding of Machine Learning and Deep Learning, and I apply these principles in practical AI systems. I specialize in Generative AI, I actively work with technologies like LangChain, LangGraph, vector databases, and modern AI frameworks.

I enjoy solving problems that people actually face and translating them into scalable, efficient applications. I don't just study AI — I build with it, I implement, experiment, and iterate until they work in real scenarios.

Currently exploring opportunities where I can contribute, learn, and grow in AI-driven product development.

✦ Beyond academics, I spend my time playing cricket, exploring science, and feeding my curiosity for new information...`,
  email: 'mallepallymahesh47@gmail.com',
  phone: '+91-9392564955',
  location: 'Hyderabad, India',
  github: 'https://github.com/mallepallymahesh47-ui',
  linkedin: 'https://www.linkedin.com/in/mallepalli-mahesh-7ba192230',
  profileImg: '/assets/profile.jpeg',
  gfgLogo: '/assets/gfg-logo.png',
  resumeUrl: '/assets/Mahesh_GEN AI.pdf',
}

export const skills = {
  categories: [
    { id: 'ai', label: 'AI / GenAI' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools' },
  ],
  items: [
    { name: 'Python', category: 'backend', level: 95 },
    { name: 'LangChain', category: 'ai', level: 92 },
    { name: 'LangGraph', category: 'ai', level: 88 },
    { name: 'LangSmith', category: 'ai', level: 85 },
    { name: 'LLMs / GPT', category: 'ai', level: 90 },
    { name: 'RAG', category: 'ai', level: 90 },
    { name: 'Transformers', category: 'ai', level: 82 },
    { name: 'Prompt Engineering', category: 'ai', level: 93 },
    { name: 'CrewAI', category: 'ai', level: 80 },
    { name: 'FastAPI', category: 'backend', level: 88 },
    { name: 'Streamlit', category: 'tools', level: 90 },
    { name: 'FAISS', category: 'databases', level: 85 },
    { name: 'Qdrant', category: 'databases', level: 80 },
    { name: 'MongoDB', category: 'databases', level: 78 },
    { name: 'MySQL', category: 'databases', level: 80 },
    { name: 'Git & GitHub', category: 'tools', level: 88 },
    { name: 'Hugging Face', category: 'tools', level: 85 },
    { name: 'VS Code', category: 'tools', level: 90 },
    { name: 'Postman', category: 'tools', level: 82 },
  ],
}

export const projects = [
  {
    title: 'Dental Voice Assistant',
    description: 'An AI-powered voice assistant for dental clinics that handles appointment booking, patient queries, and clinic information through natural voice conversations using LangChain and speech recognition.',
    tech: ['Python', 'LangChain', 'Deep Gram', 'LLM', 'FastAPI', 'Twilio', 'OpenAI'],
    github: 'https://github.com/mallepallymahesh47-ui/Dental-Voice-Assistant-Project',
    youtube: 'https://youtube.com/shorts/DA-OEB7pHQg?si=9jzwPomfpKIHneja',
    demo: null,
    featured: true,
    icon: '📞',
  },
  {
    title: 'Transaction Assistant Q&A',
    description: 'A conversational AI system that answers questions about financial transactions using RAG architecture. Leverages vector databases for semantic search across transaction records with natural language understanding.',
    tech: ['Python', 'LangChain', 'RAG', 'FAISS', 'React', 'Groq LLM'],
    github: 'https://github.com/mallepallymahesh47-ui/Transaction-Assistant',
    youtube: 'https://youtu.be/e53Ef-Pnr80?si=PZSrQm3wIBtE5ghm',
    demo: null,
    featured: true,
    icon: '💳',
  },
  {
    title: 'Chat with SQL Databases',
    description: 'An intelligent agent that converts natural language questions into SQL queries, executes them against databases, and returns human-readable answers. Built with LangChain SQL Agent and supports multiple database types.',
    tech: ['Python', 'LangChain', 'SQL Agent', 'MySQL', 'Streamlit', 'Groq LLM'],
    github: 'https://github.com/mallepallymahesh47-ui/Chat-With-SQL-Database',
    youtube: 'https://youtu.be/ElRegzjyEbs?si=PaIu2cE6KjT2NCMj',
    demo: null,
    featured: true,
    icon: '🗃️',
  },
  {
    title: 'YouTube-Blog-Generator',
    description: 'A LangGraph-based multi-agent system that converts YouTube videos into comprehensive blog posts.',
    tech: ['Python', 'LangGraph', 'LangChain', 'Ollama', 'RAG', 'Streamlit'],
    github: 'https://github.com/mallepallymahesh47-ui/YouTube-Blog-Generator',
    demo: null,
    featured: false,
    icon: '🔬',
  },
  {
    title: 'Multi Document Q&A with RAG',
    description: 'Upload any document and ask questions in natural language. Uses Retrieval Augmented Generation with vector embeddings for accurate, context-aware answers from document content.',
    tech: ['Python', 'LangChain', 'LangSmith', 'Qdrant', 'Hugging Face', 'Streamlit'],
    github: 'https://github.com/mallepallymahesh47-ui/ICKAS---Intelligent-Contextual-Knowledge-Augmentation-System',
    demo: null,
    featured: false,
    icon: '📚',
  },
  {
    title: 'URL & YouTube Summarizer API',
    description: 'The URL & YouTube Summarizer API allows you to input any website link or YouTube URL and get a concise, structured summary in seconds.',
    tech: ['Python', 'LangChain', 'Postman', 'FastAPI', 'Ollama'],
    github: 'https://github.com/mallepallymahesh47-ui/URL-YouTube-Summarizer-API-to-fix-that.',
    demo: null,
    featured: false,
    icon: '🔗',
  },

]

export const experience = [
  {
    type: 'work',
    title: 'Campus Mantri (Ambassador)',
    company: 'GeeksforGeeks',
    period: 'Jan 2026 – July 2026',
    description: [
      'Led tech events on campus',
      'Organized competitive programming contests and hackathons',
      'Promoted coding culture and drove 150+ sign-ups on the GFG platform',
    ],
  },
]

export const education = [
  {
    degree: 'B.Tech in Artificial Intelligence & Machine Learning',
    institution: 'Shadan College of Engineering & Technology',
    period: '2022 – 2026',
    grade: 'CGPA: 7.2',
    location: 'Hyderabad, India',
  },
]

export const certifications = [
  {
    title: 'Generative AI with LangChain & Huggingface — Udemy',
    link: 'https://www.udemy.com/certificate/UC-80b3fa57-8ac9-40d0-94b8-2ed7e606a01c/?lid=emvrli3qn146&utm_source=braze&utm_medium=email&utm_campaign=250611_Student-MX_EM-Lifecycle_Course-Completion-MVP_T1&utm_method=lifecycle-nurture&utm_funnel=engagement&utm_audience=mx&utm_tactic=progress&utm_content=udemy_braze.1cb6d7b71b9ac5f2f9c5c49038dcb84c', 
  },
  {
    title: 'Tata-GenAI Powered Data Analytics Job Simulation — Forage',
    link: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_69e49d0fa52ab4c038f224f9_1776663797688_completion_certificate.pdf',
  },
  {
    title: 'Claude in Amazon Bedrock  — Anthropic',
    link: 'https://verify.skilljar.com/c/iusm3n3u87fk',
  },
  {
    title: 'LangGraph Ambient Agents  — LangChain Academy',
    link: 'https://academy.langchain.com/certificates/nnjf4iuteg',
  },
  {
    title: 'Introduction to LangGraph — LangChain Academy',
    link: 'https://academy.langchain.com/certificates/yzniaglfjl',
  },
  {
    title: 'Python UpSkill — GeeksforGeeks',
    link: 'https://www.geeksforgeeks.org/certificate/b0d9627afbff5e0f49b53d5025bb5991?utm_source=socials&utm_medium=cc_link?utm_source=socials&utm_medium=cc_link',
  },
  {
    title: 'Oracle Certified Generative AI Professional — Oracle Academy',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=263E55E8EC3308BEEE130250CEDA21D9414F567A583AA7B67558ADD363DBF9D6',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
