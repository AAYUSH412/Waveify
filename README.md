# 🌊 Waveify - Dynamic SVG Banner Generator

<div align="center">

![Waveify Banner](https://waveify.onrender.com/api/wave?color=%23007CF0&height=150&speed=4&width=1200&amplitude=30&frequency=3)

[![GitHub stars](https://img.shields.io/github/stars/aayushvaghela/Waveify?style=social)](https://github.com/aayushvaghela/Waveify/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/aayushvaghela/Waveify?style=social)](https://github.com/aayushvaghela/Waveify/network/members)
[![GitHub issues](https://img.shields.io/github/issues/aayushvaghela/Waveify)](https://github.com/aayushvaghela/Waveify/issues)
[![GitHub license](https://img.shields.io/github/license/aayushvaghela/Waveify)](https://github.com/aayushvaghela/Waveify/blob/main/LICENSE)

*Transform your GitHub READMEs with stunning animated SVG banners - no design skills required!*

[✨ Live Demo](https://waveify.onrender.com) • [📚 API Docs](./docs/API.md) • [🚀 Quick Start](#-quick-start) • [🤝 Contributing](./docs/CONTRIBUTING.md)

</div>

---

## 🎯 What is Waveify?

**Waveify** is a powerful SaaS platform that generates beautiful, animated SVG banners for GitHub README files. Since GitHub markdown doesn't support custom HTML or CSS styling, Waveify bridges this gap by providing dynamic SVG graphics delivered via URL that can be embedded directly into any markdown file.

### ✨ Key Features

- 🌊 **Animated Wave Patterns** - 10+ wave styles (sine, square, sawtooth, neon, glitch, plasma, etc.)
- ⌨️ **Typing Animations** - 8+ typing effects (classic, neon, rainbow, matrix, terminal, etc.)
- 💻 **Terminal Simulations** - Beautiful terminal interfaces with multiple themes
- 📊 **GitHub Stats Cards** - Animated profile statistics with modern themes
- ⏳ **Loading Animations** - Elegant loaders and spinners
- 🎨 **Full Customization** - Colors, sizes, speeds, and effects
- 🚀 **Zero Dependencies** - Just URL-based implementation
- ⚡ **Lightning Fast** - Optimized SVG delivery with caching
- 📱 **Responsive Design** - Works perfectly on all devices

---

## 🚀 Quick Start

### 1. Basic Wave Animation
```markdown
![Wave](https://waveify.onrender.com/api/wave?color=%23007CF0&height=150&width=1200)
```
![Wave Example](https://waveify.onrender.com/api/wave?color=%23007CF0&height=150&width=1200&amplitude=20&frequency=2)

### 2. Typing Animation
```markdown
![Typing](https://waveify.onrender.com/api/typing?text=Welcome%20to%20my%20project&fontSize=24&color=%23333)
```

### 3. Loading Animation
```markdown
![Loader](https://waveify.onrender.com/api/loader?type=dots&color=blue&speed=1.5)
```

### 4. Terminal Simulation
```markdown
![Terminal](https://waveify.onrender.com/api/terminal?commands=npm%20install%20waveify&theme=modern)
```

### 6. GitHub Stats Card
```markdown
![Stats](https://waveify.onrender.com/api/stats?username=yourusername&theme=dark)
```

---

## 🎨 API Examples

### Wave Animations

| Style | Example | URL |
|-------|---------|-----|
| **Classic Wave** | ![Classic](https://waveify.onrender.com/api/wave?color=%23007CF0&height=80&width=600&amplitude=15) | `/api/wave?color=%23007CF0` |
| **Sine Wave** | ![Sine](https://waveify.onrender.com/api/wave/sine?color=%23ff0066&height=80&width=600&frequency=3) | `/api/wave/sine?color=%23ff0066` |
| **Neon Wave** | ![Neon](https://waveify.onrender.com/api/wave/neon?color=%2300ff99&height=80&width=600) | `/api/wave/neon?color=%2300ff99` |
| **Glitch Wave** | ![Glitch](https://waveify.onrender.com/api/wave/glitch?color=%23ff3366&height=80&width=600) | `/api/wave/glitch?color=%23ff3366` |

### Typing Animations

| Style | Example | URL |
|-------|---------|-----|
| **Classic** | ![Classic Typing](https://waveify.onrender.com/api/typing?text=Hello%20World&fontSize=18&width=300&height=50) | `/api/typing?text=Hello%20World` |
| **Neon** | ![Neon Typing](https://waveify.onrender.com/api/typing/neon?text=Cyberpunk%20Style&fontSize=18&width=350&height=50) | `/api/typing/neon?text=Cyberpunk%20Style` |
| **Matrix** | ![Matrix Typing](https://waveify.onrender.com/api/typing/matrix?text=Follow%20the%20white%20rabbit&fontSize=16&width=400&height=50) | `/api/typing/matrix?text=Follow%20the%20white%20rabbit` |

### Terminal Simulations

| Theme | Example | URL |
|-------|---------|-----|
| **Modern** | ![Modern Terminal](https://waveify.onrender.com/api/terminal?commands=npm%20start&theme=modern&width=600&height=80) | `/api/terminal?theme=modern` |
| **Matrix** | ![Matrix Terminal](https://waveify.onrender.com/api/terminal?commands=ls%20-la&theme=matrix&width=600&height=80) | `/api/terminal?theme=matrix` |
| **Cyberpunk** | ![Cyberpunk Terminal](https://waveify.onrender.com/api/terminal?commands=hack%20mainframe&theme=cyberpunk&width=600&height=80) | `/api/terminal?theme=cyberpunk` |

### GitHub Stats Cards

| Theme | Example | URL |
|-------|---------|-----|
| **Dark** | ![Dark Stats](https://waveify.onrender.com/api/stats?username=octocat&theme=dark&width=400&height=200) | `/api/stats?theme=dark` |
| **Light** | ![Light Stats](https://waveify.onrender.com/api/stats?username=octocat&theme=light&width=400&height=200) | `/api/stats?theme=light` |
| **Auto** | ![Auto Stats](https://waveify.onrender.com/api/stats?username=octocat&theme=auto&width=400&height=200) | `/api/stats?theme=auto` |

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/aayushvaghela/Waveify.git
   cd Waveify
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The API will be available at `https://waveify.onrender.com`

### Frontend Setup

1. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

2. **Start the frontend development server**
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000`

---

## 📚 API Documentation

### Base URL
```
https://waveify.onrender.com/api
```

### Available Endpoints

#### 🌊 Wave API
- `GET /api/wave` - Default smooth wave
- `GET /api/wave/sine` - Mathematical sine wave
- `GET /api/wave/square` - Square wave pattern
- `GET /api/wave/sawtooth` - Sawtooth wave
- `GET /api/wave/pulse` - Pulse wave
- `GET /api/wave/triangle` - Triangle wave
- `GET /api/wave/fluid` - Fluid wave animation
- `GET /api/wave/glitch` - Glitch effect wave
- `GET /api/wave/neon` - Neon glow wave
- `GET /api/wave/plasma` - Plasma wave effect

#### ⌨️ Typing API
- `GET /api/typing` - Classic typing animation
- `GET /api/typing/neon` - Neon typing effect
- `GET /api/typing/glitch` - Glitch typing animation
- `GET /api/typing/rainbow` - Rainbow color typing
- `GET /api/typing/wave` - Wave text effect
- `GET /api/typing/matrix` - Matrix-style typing
- `GET /api/typing/terminal` - Terminal typing simulation
- `GET /api/typing/gradient` - Gradient color typing

#### 💻 Terminal API
- `GET /api/terminal` - Generate terminal command simulations
- `GET /api/terminal/modern` - Modern macOS-style terminal
- `GET /api/terminal/matrix` - Matrix-inspired green terminal
- `GET /api/terminal/cyberpunk` - Futuristic neon terminal
- `GET /api/terminal/retro` - Vintage CRT monitor style
- `GET /api/terminal/themes` - Available terminal themes
- `GET /api/terminal/examples` - Example command sets

#### ⏳ Loader API
- `GET /api/loader` - Generate loading animations
- `GET /api/loader/types` - Available loader types

#### 📊 Stats API
- `GET /api/stats` - Generate GitHub profile statistics
- `GET /api/stats/dark` - Dark theme stats card
- `GET /api/stats/light` - Light theme stats card  
- `GET /api/stats/auto` - Auto theme (system preference)
- `GET /api/stats/metrics` - Available metrics list
- `GET /api/stats/examples` - Usage examples

### Query Parameters

#### Wave Parameters
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `color` | string | `#007CF0` | Hex color code (URL encoded) |
| `height` | number | `150` | SVG height in pixels |
| `speed` | number | `4` | Animation speed in seconds |
| `width` | number | `1200` | SVG width in pixels |
| `amplitude` | number | `20` | Wave amplitude |
| `frequency` | number | `2` | Wave frequency/cycles |

#### Typing Parameters
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | string | `"Welcome to my project"` | Text to animate |
| `speed` | number | `50` | Typing speed (ms per character) |
| `color` | string | `#000000` | Text color |
| `fontSize` | number | `20` | Font size in pixels |
| `fontFamily` | string | `monospace` | Font family |
| `width` | number | `400` | SVG width |
| `height` | number | `60` | SVG height |
| `cursor` | boolean | `true` | Show blinking cursor |

---

## 🏗️ Project Structure

```
Waveify/
├── 📁 backend/                 # Node.js/Express API server
│   ├── 📄 server.js           # Main server file
│   ├── 📄 package.json        # Backend dependencies
│   ├── 📁 generators/         # SVG generation logic
│   │   ├── 📄 WaveGenerator.js
│   │   ├── 📄 TypingGenerator.js
│   │   ├── 📄 TerminalGenerator.js
│   │   └── 📄 LoaderGenerator.js
│   ├── 📁 routes/            # API route handlers
│   │   ├── 📄 wave.js
│   │   ├── 📄 typing.js
│   │   ├── 📄 terminal.js
│   │   ├── 📄 loader.js
│   │   └── 📄 health.js
│   └── 📁 utils/             # Utility functions
│       └── 📄 hometemplate.js
├── 📁 frontend/               # Next.js React frontend
│   ├── 📄 package.json       # Frontend dependencies
│   ├── 📁 app/               # Next.js app directory
│   ├── 📁 components/        # React components
│   └── 📁 public/            # Static assets
├── 📁 docs/                  # Documentation
│   ├── 📄 API.md             # API documentation
│   ├── 📄 PRD.md             # Product requirements
│   └── 📄 CONTRIBUTING.md    # Contributing guidelines
├── 📁 deploy/                # Deployment configs
└── 📄 README.md              # This file
```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. **Deploy Backend**
   ```bash
   cd backend
   vercel
   ```

2. **Deploy Frontend**
   ```bash
   cd frontend
   vercel
   ```

### Option 2: Docker

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

### Option 3: Traditional Hosting

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the backend**
   ```bash
   cd backend
   npm start
   ```

---

## 🎯 Use Cases

### GitHub README Enhancement
```markdown
### GitHub README Enhancement
```markdown
<!-- Project Header with Wave Animation -->
![Header](https://waveify.onrender.com/api/wave?color=%23667eea&height=200&width=1200&amplitude=30)

<!-- Dynamic Typing Introduction -->
![Typing](https://waveify.onrender.com/api/typing?text=Welcome%20to%20MyProject%20-%20The%20Future%20of%20Web%20Development&fontSize=22&style=gradient)

<!-- Installation Commands in Terminal Style -->
![Installation](https://waveify.onrender.com/api/terminal?text=npm%20install%20myproject&style=modern&width=600)

<!-- Loading Animation for Builds -->
![Build Status](https://waveify.onrender.com/api/loader?type=pulse&color=green&text=Build%20Passing)
```

<!-- Loading States for Dynamic Content -->
![Loading](https://waveify.onrender.com/api/loader?type=dots&color=purple&speed=1.2)
```

### Documentation Headers
```markdown
<!-- API Documentation Header -->
![API Docs](https://waveify.onrender.com/api/wave/neon?color=%2300ff88&height=120&text=API%20Documentation)

<!-- Terminal Examples -->
![Terminal Example](https://waveify.onrender.com/api/terminal?text=curl%20-X%20GET%20api.example.com/users&style=cyberpunk)
```

### Project Showcases
```markdown
<!-- Project Banner with Typing -->
![Project Banner](https://waveify.onrender.com/api/typing?text=Entering%20the%20Matrix...&fontSize=24&width=500&style=matrix)

<!-- Feature Highlights with Loaders -->
![Features](https://waveify.onrender.com/api/loader?type=bars&color=purple&text=10%2B%20APIs)

<!-- Tech Stack with Terminal Style -->
![Node.js](https://waveify.onrender.com/api/terminal?text=Node.js%20v18%2B&style=modern&color=green)
![React](https://waveify.onrender.com/api/terminal?text=React%2018.0&style=modern&color=blue)
![TypeScript](https://waveify.onrender.com/api/terminal?text=TypeScript%20Ready&style=modern&color=blue)
```

### Profile Customization
```markdown
<!-- Personal GitHub Profile -->
![Profile Header](https://waveify.onrender.com/api/wave/plasma?color=%23ff6b6b&height=180&width=1000)
![About Me](https://waveify.onrender.com/api/typing?text=Hi%20there!%20I'm%20a%20Full%20Stack%20Developer&fontSize=20&style=rainbow)
![My Stats](https://waveify.onrender.com/api/stats?username=yourusername&theme=auto&animation=countUp)
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Quick Start for Contributors

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   npm test
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Create a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation
- Ensure all tests pass
- Follow semantic commit messages

For detailed contributing guidelines, see [CONTRIBUTING.md](./docs/CONTRIBUTING.md).

---

## 📈 Roadmap

### Phase 1: Core Features ✅
- [x] Wave animations (10+ styles)
- [x] Typing animations (8+ effects)
- [x] Loading animations and spinners
- [x] Terminal simulations with themes
- [x] API documentation and examples

### Phase 2: Enhanced Features 🚧
- [x] Terminal themes (modern, matrix, cyberpunk, retro)
- [x] Advanced typing effects with customization
- [ ] Custom animation presets and templates
- [ ] Batch generation and export tools
- [ ] Enhanced error handling and validation
- [ ] Performance optimizations and caching

### Phase 3: Advanced Features 📋
- [ ] User accounts & saved configurations
- [ ] Custom fonts and typography support
- [ ] SVG optimization and compression
- [ ] Real-time collaboration features
- [ ] Analytics dashboard for usage metrics
- [ ] Enterprise features and white-labeling
- [ ] API rate limiting improvements

### Phase 4: Platform Expansion 🎯
- [ ] WordPress plugin for easy integration
- [ ] Browser extension for quick generation
- [ ] Mobile app for on-the-go creation
- [ ] Desktop application with offline support
- [ ] API marketplace and third-party integrations
- [ ] Documentation site with interactive examples

---

## 📊 Performance

- **Response Time**: < 200ms (90th percentile)
- **SVG Size**: Average 2-8KB per animation (optimized)
- **Cache Duration**: 1 hour for optimal performance
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Uptime**: 99.9% SLA target
- **Global CDN**: Optimized delivery worldwide
- **Concurrent Users**: Supports 1000+ simultaneous requests
- **API Endpoints**: 6 main APIs with 30+ sub-endpoints

---

## 🔒 Security

- **CORS Protection**: Configurable allowed origins
- **Rate Limiting**: IP-based request throttling
- **Input Validation**: All parameters sanitized
- **Content Security**: Helmet.js security headers
- **No Data Storage**: Stateless API design

---

## 📞 Support & Community

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/aayushvaghela/Waveify/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/aayushvaghela/Waveify/discussions)
- 📧 **Contact**: [aayushvaghela12@gmail.com](mailto:aayushvaghela12@gmail.com)
- 🐦 **Updates**: [@WaveifyAPI](https://twitter.com/WaveifyAPI)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by the developer community's need for better GitHub README tools
- Built with ❤️ using Node.js, Express, and modern web technologies
- Special thanks to all contributors and the open source community

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

![Footer Wave](https://waveify.onrender.com/api/wave?color=%23667eea&height=100&width=1200&amplitude=15&frequency=4)

*Made with ❤️ by [Aayush Vaghela](https://github.com/aayushvaghela)*

</div>