# My Portfolio

> Modern personal portfolio built with **React 18 + Vite + Tailwind CSS**

## 🚀 Quick Start

```bash
# 1. Run the setup script (copies assets + installs deps)
setup.bat

# 2. Start the dev server
npm run dev

```

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── assets/           # Profile photo, GFG logo, resume (created by setup.bat)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Icons.jsx          # Inline SVG icons (zero bundle cost)
│   │   ├── Navbar.jsx         # Sticky nav with dark mode toggle
│   │   ├── Hero.jsx           # Hero with typing animation
│   │   ├── About.jsx          # Bio + highlight cards
│   │   ├── Skills.jsx         # Filterable skill grid with progress bars
│   │   ├── Projects.jsx       # Project cards with tech tags
│   │   ├── Experience.jsx     # Timeline + certifications
│   │   ├── Contact.jsx        # Contact form + info cards
│   │   ├── Footer.jsx         # Social links + scroll-to-top
│   │   ├── ScrollReveal.jsx   # Reusable scroll animation wrapper
│   │   └── ParticleBackground.jsx  # Interactive particle canvas
│   ├── data/
│   │   └── portfolio.js       # All personal data in one place
│   ├── hooks/
│   │   └── useAnimations.js   # Custom hooks (dark mode, InView, typing)
│   ├── App.jsx                # Main app with lazy loading
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind + custom utilities
├── index.html                 # SEO meta tags, fonts
├── tailwind.config.js         # Custom theme
├── vite.config.js             # Build optimization
└── package.json
```

## ✨ Features

- **Dark Mode** — System-aware with toggle, persisted in localStorage
- **Lazy Loading** — Below-fold sections load on demand
- **Scroll Animations** — Intersection Observer-based reveal
- **Typing Effect** — Animated role titles
- **Particle Background** — Interactive canvas with mouse interaction
- **Responsive** — Mobile-first design for all screen sizes
- **Zero Icon Library** — Inline SVGs for zero bundle overhead
- **SEO Optimized** — Full meta tags, OG tags, semantic HTML
