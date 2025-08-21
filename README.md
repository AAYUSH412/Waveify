# 🌊 Waveify - Animated SVG Components for Developers

<div align="center">

![Waveify Banner](https://waveify.onrender.com/api/wave/neon?color=%23667eea&height=160&width=1200&amplitude=30&frequency=2.5&speed=4)

[![GitHub stars](https://img.shields.io/github/stars/AAYUSH412/Waveify?style=social)](https://github.com/AAYUSH412/Waveify/stargazers)
[![Live Demo](https://img.shields.io/badge/🌐_Live-Demo-blue?style=for-the-badge)](https://waveify.onrender.com)
[![API Docs](https://img.shields.io/badge/📚_API-Docs-green?style=for-the-badge)](./docs/API.md)

**Create stunning animated SVG components for GitHub READMEs with zero design skills required**

*Transform your repositories with professional-grade animations using simple URLs*

</div>

---

## ⚡ Why Waveify?

GitHub markdown doesn't support custom HTML/CSS, but **Waveify bridges this gap** by providing dynamic SVG animations via URL embedding. Built with **Next.js 15**, **React 19**, and **TypeScript** for enterprise-grade performance.

### 🎯 Core Features

| Component | Description | Examples |
|-----------|-------------|----------|
| **🌊 Wave Animations** | 15+ mathematical wave patterns | `sine`, `neon`, `glitch`, `plasma`, `fluid` |
| **⌨️ Typing Effects** | 12+ realistic typing simulations | `classic`, `matrix`, `rainbow`, `terminal` |
| **💻 Terminal Themes** | 8+ authentic terminal interfaces | `modern`, `cyberpunk`, `retro`, `github-dark` |
| **⏳ Loading Animations** | 25+ elegant spinners & loaders | `dots`, `pulse`, `wave`, `DNA-helix` |

**Key Benefits:**
- ⚡ **<150ms Response Time** - Lightning-fast API delivery
- � **Zero Design Skills** - Professional results out-of-the-box  
- � **URL-Based Integration** - Just paste and go
- 📱 **Mobile Optimized** - Perfect rendering on all devices
- ♿ **Accessibility Compliant** - WCAG 2.1 AA standards

## 🚀 Quick Start

Copy and paste these URLs directly into your markdown files:

### 🌊 Wave Animations
```markdown
<!-- Professional wave header -->
![Wave](https://waveify.onrender.com/api/wave?color=%23667eea&height=150&width=1200)

<!-- Cyberpunk neon wave -->
![Neon](https://waveify.onrender.com/api/wave/neon?color=%2300ff99&height=120&width=800)

<!-- Digital glitch effect -->
![Glitch](https://waveify.onrender.com/api/wave/glitch?color=%23ff3366&height=100&width=600)
```

### ⌨️ Typing Effects  
```markdown
<!-- Welcome message -->
![Typing](https://waveify.onrender.com/api/typing?text=Welcome%20to%20my%20project&fontSize=24)

<!-- Matrix style -->
![Matrix](https://waveify.onrender.com/api/typing/matrix?text=Follow%20the%20white%20rabbit&fontSize=18)
```

### 💻 Terminal Commands
```markdown
<!-- Installation command -->
![Terminal](https://waveify.onrender.com/api/terminal?commands=npm%20install%20myproject&theme=modern)

<!-- Build status -->
![Build](https://waveify.onrender.com/api/terminal?commands=npm%20run%20build&theme=github-dark)
```

### ⏳ Loading States
```markdown
<!-- Loading animation -->
![Loader](https://waveify.onrender.com/api/loader?type=dots&color=blue&speed=1.5)

<!-- Build status -->
![Status](https://waveify.onrender.com/api/loader?type=pulse&color=green&text=Build%20Passing)
```

---

## 📚 API Reference

**Base URL:** `https://waveify.onrender.com/api`

### Essential Endpoints

| API | Endpoint | Description |
|-----|----------|-------------|
| **Waves** | `/wave`, `/wave/neon`, `/wave/glitch` | Animated wave patterns |
| **Typing** | `/typing`, `/typing/matrix`, `/typing/neon` | Typing animations |
| **Terminal** | `/terminal?theme=modern&commands=...` | Terminal simulations |
| **Loaders** | `/loader?type=dots&color=blue` | Loading animations |

### Key Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `color` | string | `#667eea` | Hex color (URL encoded: `%23667eea`) |
| `width` | number | `800` | SVG width (400-2000) |
| `height` | number | `120` | SVG height (50-500) |
| `speed` | number | `4` | Animation speed in seconds |
| `text` | string | - | Text content for typing/terminal |
| `theme` | string | `modern` | Theme for terminal/typing |

> 💡 **Pro Tip:** URL encode your hex colors (`#667eea` → `%23667eea`)

**[📖 Full API Documentation](./docs/API.md)**

## 🛠️ Development Setup

### Prerequisites
- **Node.js 18+** and **npm/pnpm**
- **Git** for version control

### Backend Setup
```bash
# Clone and setup backend
git clone https://github.com/AAYUSH412/Waveify.git
cd Waveify/backend
npm install
npm run dev    # Starts on http://localhost:3001
```

### Frontend Setup  
```bash
# Setup Next.js frontend
cd ../frontend
pnpm install
pnpm dev      # Starts on http://localhost:3000
```

### Tech Stack
- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Node.js, Express.js, SVG Generation Engine
- **Deployment:** Vercel (Frontend), Render (Backend)
- **Performance:** <150ms API response, 60fps animations

---

## 🎯 Real-World Examples

### Project Headers
```markdown
<!-- Professional project banner -->
![Header](https://waveify.onrender.com/api/wave?color=%23667eea&height=180&width=1200&amplitude=25)

<!-- Project introduction -->
![Intro](https://waveify.onrender.com/api/typing?text=Building%20the%20future%20of%20web%20development&fontSize=22)
```

### Documentation
```markdown
<!-- API section header -->
![API Docs](https://waveify.onrender.com/api/wave/neon?color=%2300ff88&height=120&width=800)

<!-- Command examples -->
![Install](https://waveify.onrender.com/api/terminal?commands=npm%20install%20@mylib/package&theme=modern)
![Usage](https://waveify.onrender.com/api/terminal?commands=import%20{%20Component%20}%20from%20'@mylib/package'&theme=github-dark)
```

### Profile Enhancement
```markdown
<!-- Personal GitHub profile -->
![Profile](https://waveify.onrender.com/api/wave/plasma?color=%23ff6b6b&height=150&width=1000)
![About](https://waveify.onrender.com/api/typing?text=Full%20Stack%20Developer%20%7C%20Open%20Source%20Enthusiast&fontSize=20)

<!-- Tech stack showcase -->
![Node.js](https://waveify.onrender.com/api/terminal?commands=node%20--version&theme=modern&width=300)
![React](https://waveify.onrender.com/api/terminal?commands=npx%20create-react-app&theme=modern&width=300)
```

---

## 🏗️ Project Architecture

```
Waveify/
├── 📁 backend/                    # Node.js API Server
│   ├── 📄 server.js              # Express.js main server
│   ├── 📁 generators/            # SVG generation engines
│   │   ├── 📄 WaveGenerator.js   # Mathematical wave algorithms
│   │   ├── 📄 TypingGenerator.js # Typing animation logic
│   │   ├── 📄 TerminalGenerator.js # Terminal simulation
│   │   └── 📄 LoaderGenerator.js # Loading animations
│   └── 📁 routes/               # API endpoints
│       ├── 📄 wave.js           # Wave API routes
│       ├── 📄 typing.js         # Typing API routes
│       └── 📄 terminal.js       # Terminal API routes
├── 📁 frontend/                  # Next.js React App
│   ├── 📁 app/                  # Next.js 15 App Router
│   ├── 📁 components/           # React components
│   │   ├── 📁 ui/              # shadcn/ui components
│   │   ├── � animate-ui/      # Animation components
│   │   └── � generator-components/ # Generator UI
│   └── 📁 lib/                 # Utilities and configs
└── 📁 docs/                    # Documentation
    ├── 📄 API.md               # Complete API reference
    ├── 📄 PRD.md              # Product requirements
    └── 📄 CONTRIBUTING.md     # Contribution guide
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/yourusername/Waveify.git
cd Waveify

# 3. Create a feature branch
git checkout -b feature/awesome-feature

# 4. Make your changes and test
npm test

# 5. Commit and push
git commit -m "✨ Add awesome feature"
git push origin feature/awesome-feature

# 6. Open a Pull Request
```

**Development Guidelines:**
- Follow existing code style and TypeScript patterns
- Add tests for new features
- Update documentation for API changes
- Ensure all tests pass before submitting

**[📋 Full Contributing Guide](./docs/CONTRIBUTING.md)**

---

## 📈 Roadmap & Performance

### Current Status ✅
- **15+ Wave Types** - Professional mathematical animations
- **12+ Typing Effects** - Realistic typing simulations  
- **8+ Terminal Themes** - Authentic terminal interfaces
- **25+ Loading Animations** - Modern spinners and loaders
- **Enterprise Performance** - <150ms response times, 99.9% uptime

### Upcoming Features �
- [ ] **User Accounts** - Save custom configurations
- [ ] **Batch Generation** - Multiple components at once
- [ ] **Custom Fonts** - Typography customization
- [ ] **WordPress Plugin** - Easy CMS integration
- [ ] **Browser Extension** - Quick generation tools

### Technical Metrics
| Metric | Performance |
|--------|-------------|
| **API Response Time** | <150ms (95th percentile) |
| **SVG File Size** | 2-8KB (optimized) |
| **Concurrent Users** | 1000+ supported |
| **Uptime** | 99.9% SLA |
| **Cache Duration** | 1 hour optimal |

---

## � Links & Resources

### 🌟 Main Links
- **🌐 Live Platform:** [waveify.onrender.com](https://waveify.onrender.com)
- **📚 API Documentation:** [API.md](./docs/API.md)
- **🐛 Report Issues:** [GitHub Issues](https://github.com/AAYUSH412/Waveify/issues)
- **💬 Discussions:** [GitHub Discussions](https://github.com/AAYUSH412/Waveify/discussions)

### �‍💻 Developer
- **Portfolio:** [aayush-vaghela.vercel.app](https://aayush-vaghela.vercel.app/)
- **LinkedIn:** [linkedin.com/in/aayush-vaghela](https://www.linkedin.com/in/aayush-vaghela/)
- **GitHub:** [@AAYUSH412](https://github.com/AAYUSH412)
- **Email:** [aayushvaghela12@gmail.com](mailto:aayushvaghela12@gmail.com)

---

## � License

**MIT License** - feel free to use Waveify in your projects!

**[View License](./LICENSE)**

---

<div align="center">

### ⭐ Star this repo if Waveify enhanced your project!

![Footer Wave](https://waveify.onrender.com/api/wave/neon?color=%23667eea&height=100&width=1200&amplitude=15&frequency=4&speed=5)

**Made with ❤️ by [Aayush Vaghela](https://github.com/AAYUSH412)**

*Transform your GitHub presence with animated SVG components*

[![GitHub](https://img.shields.io/badge/GitHub-AAYUSH412-blue?style=for-the-badge&logo=github)](https://github.com/AAYUSH412)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-aayush--vaghela-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/aayush-vaghela/)

</div>