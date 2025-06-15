# 🌊 Waveify - Dynamic SVG Banner Generator

<div align="center">

![Waveify Banner](http://localhost:4000/api/wave?color=%23007CF0&height=150&speed=4&width=1200&amplitude=30&frequency=3)

[![GitHub stars](https://img.shields.io/github/stars/aayushvaghela/Waveify?style=social)](https://github.com/aayushvaghela/Waveify/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/aayushvaghela/Waveify?style=social)](https://github.com/aayushvaghela/Waveify/network/members)
[![GitHub issues](https://img.shields.io/github/issues/aayushvaghela/Waveify)](https://github.com/aayushvaghela/Waveify/issues)
[![GitHub license](https://img.shields.io/github/license/aayushvaghela/Waveify)](https://github.com/aayushvaghela/Waveify/blob/main/LICENSE)

*Transform your GitHub READMEs with stunning animated SVG banners - no design skills required!*

[✨ Live Demo](http://localhost:4000) • [📚 API Docs](./docs/API.md) • [🚀 Quick Start](#-quick-start) • [🤝 Contributing](./docs/CONTRIBUTING.md)

</div>

---

## 🎯 What is Waveify?

**Waveify** is a powerful SaaS platform that generates beautiful, animated SVG banners for GitHub README files. Since GitHub markdown doesn't support custom HTML or CSS styling, Waveify bridges this gap by providing dynamic SVG graphics delivered via URL that can be embedded directly into any markdown file.

### ✨ Key Features

- 🌊 **Animated Wave Patterns** - 10+ wave styles (sine, square, sawtooth, neon, glitch, etc.)
- ⌨️ **Typing Animations** - 8+ typing effects (classic, neon, rainbow, matrix, etc.)
- 🏷️ **Dynamic Badges** - Custom badges with animations and modern styling
- ⏳ **Loading Animations** - Elegant loaders and spinners
- 🎨 **Full Customization** - Colors, sizes, speeds, and effects
- 🚀 **Zero Dependencies** - Just URL-based implementation
- ⚡ **Lightning Fast** - Optimized SVG delivery with caching
- 📱 **Responsive Design** - Works perfectly on all devices

---

## 🚀 Quick Start

### 1. Basic Wave Animation
```markdown
![Wave](http://localhost:4000/api/wave?color=%23007CF0&height=150&width=1200)
```
![Wave Example](http://localhost:4000/api/wave?color=%23007CF0&height=150&width=1200&amplitude=20&frequency=2)

### 2. Typing Animation
```markdown
![Typing](http://localhost:4000/api/typing?text=Welcome%20to%20my%20project&fontSize=24&color=%23333)
```

### 3. Custom Badge
```markdown
![Badge](http://localhost:4000/api/badge?label=Status&message=Awesome&color=brightgreen&style=modern)
```

### 4. Loading Animation
```markdown
![Loader](http://localhost:4000/api/loader?type=dots&color=blue&speed=1.5)
```

---

## 🎨 API Examples

### Wave Animations

| Style | Example | URL |
|-------|---------|-----|
| **Classic Wave** | ![Classic](http://localhost:4000/api/wave?color=%23007CF0&height=80&width=600&amplitude=15) | `/api/wave?color=%23007CF0` |
| **Sine Wave** | ![Sine](http://localhost:4000/api/wave/sine?color=%23ff0066&height=80&width=600&frequency=3) | `/api/wave/sine?color=%23ff0066` |
| **Neon Wave** | ![Neon](http://localhost:4000/api/wave/neon?color=%2300ff99&height=80&width=600) | `/api/wave/neon?color=%2300ff99` |
| **Glitch Wave** | ![Glitch](http://localhost:4000/api/wave/glitch?color=%23ff3366&height=80&width=600) | `/api/wave/glitch?color=%23ff3366` |

### Typing Animations

| Style | Example | URL |
|-------|---------|-----|
| **Classic** | ![Classic Typing](http://localhost:4000/api/typing?text=Hello%20World&fontSize=18&width=300&height=50) | `/api/typing?text=Hello%20World` |
| **Neon** | ![Neon Typing](http://localhost:4000/api/typing/neon?text=Cyberpunk%20Style&fontSize=18&width=350&height=50) | `/api/typing/neon?text=Cyberpunk%20Style` |
| **Matrix** | ![Matrix Typing](http://localhost:4000/api/typing/matrix?text=Follow%20the%20white%20rabbit&fontSize=16&width=400&height=50) | `/api/typing/matrix?text=Follow%20the%20white%20rabbit` |

### Dynamic Badges

| Style | Example | URL |
|-------|---------|-----|
| **Modern** | ![Modern Badge](http://localhost:4000/api/badge?label=Build&message=Passing&color=success&style=modern) | `/api/badge?style=modern` |
| **Gradient** | ![Gradient Badge](http://localhost:4000/api/badge?label=Version&message=v1.0.0&color=blue&style=gradient) | `/api/badge?style=gradient` |
| **Neon** | ![Neon Badge](http://localhost:4000/api/badge?label=Status&message=Online&color=green&style=neon) | `/api/badge?style=neon` |

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

   The API will be available at `http://localhost:4000`

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
http://localhost:4000/api
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

#### 🏷️ Badge API
- `GET /api/badge` - Generate custom badges
- `GET /api/badge/styles` - Available badge styles
- `GET /api/badge/colors` - Available badge colors

#### ⏳ Loader API
- `GET /api/loader` - Generate loading animations
- `GET /api/loader/types` - Available loader types

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
│   │   ├── 📄 BadgeGenerator.js
│   │   └── 📄 LoaderGenerator.js
│   ├── 📁 routes/            # API route handlers
│   │   ├── 📄 wave.js
│   │   ├── 📄 typing.js
│   │   ├── 📄 badge.js
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
<!-- Project Header -->
![Header](http://localhost:4000/api/wave?color=%23667eea&height=200&width=1200&amplitude=30)

<!-- Project Stats -->
![Build Status](http://localhost:4000/api/badge?label=Build&message=Passing&color=success)
![Version](http://localhost:4000/api/badge?label=Version&message=v2.1.0&color=blue)
![License](http://localhost:4000/api/badge?label=License&message=MIT&color=green)

<!-- Dynamic Typing -->
![Typing](http://localhost:4000/api/typing?text=Welcome%20to%20MyProject%20-%20The%20Future%20of%20Web%20Development&fontSize=22)

<!-- Loading States -->
![Loading](http://localhost:4000/api/loader?type=dots&color=purple&speed=1.2)
```

### Documentation Headers
```markdown
![API Docs](http://localhost:4000/api/wave/neon?color=%2300ff88&height=120&text=API%20Documentation)
```

### Project Banners
```markdown
![Project Banner](http://localhost:4000/api/typing/matrix?text=Entering%20the%20Matrix...&fontSize=24&width=500)
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
- [x] Wave animations
- [x] Typing animations  
- [x] Basic badges
- [x] Loading animations
- [x] API documentation

### Phase 2: Enhanced Features 🚧
- [ ] More animation types
- [ ] Custom themes
- [ ] Animation presets
- [ ] Batch generation
- [ ] API rate limiting

### Phase 3: Advanced Features 📋
- [ ] User accounts & saved configurations
- [ ] Custom fonts support
- [ ] SVG optimization
- [ ] Analytics dashboard
- [ ] Enterprise features

### Phase 4: Platform Expansion 🎯
- [ ] WordPress plugin
- [ ] Browser extension
- [ ] Mobile app
- [ ] Desktop application
- [ ] API marketplace

---

## 📊 Performance

- **Response Time**: < 200ms (90th percentile)
- **SVG Size**: Average 2-5KB per animation
- **Cache Duration**: 1 hour for optimal performance
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Uptime**: 99.9% SLA target

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
- 📧 **Contact**: [aayush@waveify.com](mailto:aayush@waveify.com)
- 💬 **Community**: [Discord Server](https://discord.gg/waveify)
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

![Footer Wave](http://localhost:4000/api/wave?color=%23667eea&height=100&width=1200&amplitude=15&frequency=4)

*Made with ❤️ by [Aayush Vaghela](https://github.com/aayushvaghela)*

</div>