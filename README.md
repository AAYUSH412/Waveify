<div align="center">
  <img src="./frontend/public/Waveify_logo.png" alt="Waveify Logo" width="120" height="120">
  
  # 🌊 Waveify
  
  **Create Stunning Animated SVG Components for GitHub READMEs**
  
  [![GitHub stars](https://img.shields.io/github/stars/AAYUSH412/Waveify?style=for-the-badge&logo=github&logoColor=white&color=667eea)](https://github.com/AAYUSH412/Waveify/stargazers)
  [![GitHub forks](https://img.shields.io/github/forks/AAYUSH412/Waveify?style=for-the-badge&logo=github&logoColor=white&color=764ba2)](https://github.com/AAYUSH412/Waveify/network/members)
  [![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=vercel&logoColor=white&color=00b4d8)](https://waveify.onrender.com)
  [![API Status](https://img.shields.io/badge/API-Online-success?style=for-the-badge&logo=fastapi&logoColor=white&color=48bb78)](https://waveify.onrender.com/api)
  
  ![Waveify Wave Animation](https://waveify.onrender.com/api/wave/neon?color=%23667eea&height=160&width=1200&amplitude=30&frequency=2.5&speed=4)
</div>

## 🚀 Overview

**Waveify** is a comprehensive SaaS platform that enables developers to create stunning animated SVG components for GitHub README files, documentation, and web projects. Since GitHub markdown doesn't support custom HTML or CSS styling, Waveify bridges this gap by providing dynamic SVG graphics delivered via URL that can be embedded directly into any markdown file.

### ✨ Key Features

- 🌊 **15+ Wave Animations** - Professional wave patterns with advanced gradients
- ⌨️ **12+ Typing Effects** - Dynamic text animations with realistic typing simulation
- 💻 **8+ Terminal Themes** - Authentic terminal simulations with multiple color schemes
- ⏳ **25+ Loading Animations** - Modern loaders for enhanced user experience
- 🎨 **Advanced Customization** - Extensive color, size, and animation controls
- ⚡ **High Performance** - Sub-150ms response times with global CDN
- ♿ **Accessibility Compliant** - WCAG 2.1 AA standards with reduced motion support
- 📱 **Mobile Responsive** - Optimized for all devices and screen sizes

## 🎯 Quick Start

### 🖼️ Add Animations to Your README

Simply copy and paste these URLs into your markdown files:

#### Wave Animation
```markdown
![Waveify Wave](https://waveify.onrender.com/api/wave/neon?color=%23667eea&height=80&width=800)
```

#### Typing Animation
```markdown
![Typing Animation](https://waveify.onrender.com/api/typing?text=Welcome%20to%20my%20project!&color=%2300ff88&speed=100)
```

#### Terminal Simulation
```markdown
![Terminal](https://waveify.onrender.com/api/terminal?theme=matrix&commands=npm%20install,npm%20run%20dev)
```

#### Loading Animation
```markdown
![Loading](https://waveify.onrender.com/api/loader/pulse?color=%23ff6b6b&size=60)
```

### 🎮 Interactive Generator

Visit our [live demo](https://waveify.onrender.com) to:
- 🎨 Customize animations with real-time preview
- 📋 Copy ready-to-use markdown code
- 🔧 Access advanced configuration options
- 📖 Browse comprehensive documentation

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Framer Motion](https://framer.com/motion/)
- **UI Components**: [Radix UI](https://radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Language**: TypeScript
- **Package Manager**: pnpm

### Backend
- **Runtime**: Node.js with Express.js
- **API Architecture**: RESTful with SVG generation
- **Security**: Helmet, CORS, Rate Limiting
- **Performance**: Compression, Caching Headers
- **Deployment**: Railway, Render, Vercel ready

### Development Tools
- **Code Quality**: ESLint, Prettier
- **Type Safety**: TypeScript strict mode
- **Performance**: Web Vitals monitoring
- **Accessibility**: WCAG 2.1 AA compliance

## 📚 API Documentation

### Base URL
```
https://waveify.onrender.com/api
```

### Available Endpoints

| Animation Type | Endpoint | Description |
|----------------|----------|-------------|
| Wave | `/api/wave/{type}` | 15+ wave patterns with gradients |
| Typing | `/api/typing` | Dynamic text animations |
| Terminal | `/api/terminal` | Terminal simulations with themes |
| Loader | `/api/loader/{type}` | 25+ loading animations |

### Common Parameters

| Parameter | Description | Default | Example |
|-----------|-------------|---------|---------|
| `color` | Primary color (hex) | `#667eea` | `%23ff6b6b` |
| `width` | Component width | `800` | `1200` |
| `height` | Component height | `100` | `160` |
| `speed` | Animation speed | `3` | `5` |

> 📖 **Full API Documentation**: [docs/API.md](./docs/API.md)

## 🔧 Local Development

### Prerequisites
- Node.js 18.0 or higher
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AAYUSH412/Waveify.git
   cd Waveify
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   cd frontend
   pnpm install
   
   # Backend
   cd ../backend
   npm install
   ```

3. **Environment setup**
   ```bash
   # Frontend
   cd frontend
   cp .env.example .env.local
   
   # Backend
   cd ../backend
   cp .env.example .env.local
   ```

4. **Start development servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   pnpm dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000/api

### Project Structure

```
Waveify/
├── frontend/                 # Next.js React application
│   ├── app/                 # App router pages
│   ├── components/          # Reusable UI components
│   │   ├── generator-components/  # Animation generators
│   │   ├── ui/             # Base UI components
│   │   └── home/           # Landing page sections
│   ├── lib/                # Utilities and configurations
│   └── public/             # Static assets
├── backend/                 # Express.js API server
│   ├── generators/         # SVG animation generators
│   ├── routes/             # API route handlers
│   └── utils/              # Backend utilities
├── docs/                   # Documentation
└── .github/                # GitHub templates
```

## 🧪 Testing

```bash
# Frontend tests
cd frontend
pnpm test

# Backend tests
cd backend
npm test

# E2E tests
pnpm test:e2e
```

## 🚀 Deployment

### Production Deployment

The project is configured for deployment on multiple platforms:

- **Primary**: [Railway](https://railway.app) - Backend & Database
- **Frontend**: [Vercel](https://vercel.com) - Optimized for Next.js
- **Alternative**: [Render](https://render.com) - Full-stack deployment

### Deployment Commands

```bash
# Build for production
npm run build

# Preview production build
npm run start
```

> 📖 **Deployment Guide**: [backend/DEPLOYMENT_CHECKLIST.md](./backend/DEPLOYMENT_CHECKLIST.md)

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### Quick Contribution Guide

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure accessibility compliance
- Test on multiple devices/browsers

> 📖 **Detailed Guide**: [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md)

## 📖 Documentation

- [📋 Product Requirements](./docs/PRD.md)
- [🔌 API Reference](./docs/API.md)
- [🤝 Contributing Guide](./docs/CONTRIBUTING.md)
- [💡 Generator Ideas](./docs/GENERATOR_IDEAS.md)

## 🌟 Showcase

### Featured in Projects

<div align="center">
  
  ![Usage Example](https://waveify.onrender.com/api/typing?text=Used%20by%20100%2B%20GitHub%20repositories&color=%2300ff88&speed=80)
  
</div>

Projects using Waveify animations:
- Open source libraries
- Personal portfolios
- Project documentation
- GitHub profiles

> Add your project by creating a PR!

## 📊 Performance

- ⚡ **API Response Time**: < 150ms (95th percentile)
- 🚀 **Lighthouse Score**: 95+ for all metrics
- 📱 **Mobile Performance**: Optimized for all devices
- 🌍 **Global CDN**: Sub-100ms worldwide latency

## 🔒 Security

- 🛡️ **Rate Limiting**: Protection against abuse
- 🔐 **CORS Configuration**: Secure cross-origin requests
- 🚫 **Input Validation**: Sanitized user inputs
- 📊 **Monitoring**: Real-time security monitoring

## 📈 Roadmap

### Q1 2025
- [ ] 🎨 Advanced color palette system
- [ ] 📊 GitHub stats integration
- [ ] 🌐 Multiple language support
- [ ] 🔧 Custom theme builder

### Q2 2025
- [ ] 🤖 AI-powered design suggestions
- [ ] 📱 Mobile app companion
- [ ] 🎯 Analytics dashboard
- [ ] 🔗 Third-party integrations

> See our [project board](https://github.com/AAYUSH412/Waveify/projects) for detailed progress

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://framer.com/motion/) for smooth animations
- [Radix UI](https://radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Next.js](https://nextjs.org/) for the amazing React framework

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/AAYUSH412/Waveify/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/AAYUSH412/Waveify/discussions)
- 📧 **Email**: [aayushvaghela12@gmail.com](mailto:aayushvaghela12@gmail.com)
- 💬 **Community**: [Join our Discord](#) (Coming Soon)

---

<div align="center">
  
  ![Footer Wave](https://waveify.onrender.com/api/wave/gradient?color=%23667eea&height=80&width=1200&amplitude=20&frequency=1.5)
  
  **Made with ❤️ by [Aayush Vaghela](https://github.com/AAYUSH412)**
  
  ⭐ **Star this repo if you find it useful!** ⭐
  
</div>