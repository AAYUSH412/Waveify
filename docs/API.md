# 🌊 Waveify API Documentation

![Waveify](https://waveify.onrender.com/api/wave/neon?color=%23667eea&height=160&width=1200&amplitude=30&frequency=2.5&speed=4)

Welcome to the Waveify API! Generate beautiful, animated SVG components for your GitHub READMEs and web projects.

## 📋 Table of Contents

- [🌊 Wave Animation API](#-wave-animation-api)
  - [✨ Professional Features](#-professional-features)
  - [Available Endpoints](#available-endpoints)
  - [Query Parameters](#query-parameters)
  - [🎨 Professional Color Schemes](#-professional-color-schemes)
  - [🔧 Technical Features](#-technical-features)
  - [🎯 Best Practices](#-best-practices)
  - [🚀 Advanced Usage Examples](#-advanced-usage-examples)
- [⌨️ Typing Animation API](#️-typing-animation-api)
- [⏳ Loader Animation API](#-loader-animation-api)
- [💻 Terminal Simulation API](#-terminal-simulation-api)
- [📊 GitHub Profile Stats API](#-github-profile-stats-api)
- [🔧 Troubleshooting](#-troubleshooting)

## Base URL
```
https://waveify.onrender.com/api
```

---

## 🌊 Wave Animation API

Generate stunning animated wave patterns with professional-grade visual effects and modern design principles. Each wave type features advanced gradients, multi-layered depth effects, optimized 60fps animations, and accessibility compliance.

### ✨ Professional Features
- **🎨 Advanced Gradient Systems**: Dynamic multi-color gradients with breathing animations
- **🌊 Multi-Layered Depth**: Professional depth effects with ambient backgrounds
- **⚡ 60fps Performance**: Smooth animations optimized for all devices
- **♿ Accessibility-Compliant**: Reduced motion support for better UX
- **📱 Mobile-Responsive**: GitHub README optimized for all screen sizes
- **🎯 Mathematical Precision**: Harmonically-accurate wave generation

### Available Endpoints

#### 1. Professional Default Wave
```http
GET /api/wave
```
**Enhanced curved wave with professional visual effects**
- Multi-layered gradient system with breathing animations
- Ambient background with radial depth effects
- Professional glow and subtle shadow effects
- Accessibility-compliant with reduced motion support

#### 2. Mathematically Precise Sine Wave
```http
GET /api/wave/sine
```
**Advanced sine wave with harmonic overtones**
- 120-point precision for ultra-smooth curves
- Harmonic overtones and micro-variations for natural flow
- Dynamic gradient translation effects
- Enhanced color palette with automatic brightness adjustment

#### 3. Digital Square Wave
```http
GET /api/wave/square
```
**Modern digital aesthetics with rounded corners**
- Digital morphing with smooth corner transitions
- Pixel-perfect edge highlighting
- Multiple pulse layers for depth
- Professional digital glow effects

#### 4. Organic Sawtooth Wave
```http
GET /api/wave/sawtooth
```
**Curved sawtooth with smooth organic motion**
- Bezier curve control points for natural flow
- Layered animation with skew transformations
- Enhanced gradient with translation effects
- Professional glow with color separation

#### 5. High-Performance Pulse Wave
```http
GET /api/wave/pulse
```
**Configurable duty cycle with smooth transitions**
- Customizable pulse width (duty cycle)
- Professional gradient system
- Smooth translation animations
- Perfect for digital/technical projects

#### 6. Dynamic Triangle Wave
```http
GET /api/wave/triangle
```
**Morphing triangle with roundness control**
- Dynamic roundness morphing between sharp and curved
- Multi-gradient depth system
- Natural variation with phase-shifted amplitudes
- Enhanced skew transformations

#### 7. Organic Fluid Wave
```http
GET /api/wave/fluid
```
**Natural motion with viscosity simulation**
- Advanced organic curves with natural flow dynamics
- Multi-layered viscosity and turbulence effects
- Natural depth gradients with ambient backgrounds
- Surface tension highlights for realism
- Natural turbulence with displacement mapping

#### 8. Cyberpunk Glitch Wave
```http
GET /api/wave/glitch
```
**Digital distortion with RGB channel separation**
- Real-time glitch effects with random distortions
- RGB channel separation for authentic digital artifacts
- High-frequency animation for chaotic motion
- Color matrix transformations for digital corruption

#### 9. Energy Plasma Wave
```http
GET /api/wave/plasma
```
**Multi-frequency energy waves with plasma effects**
- Combined sine waves for complex plasma patterns
- Rotating radial gradients for energy effects
- Multi-layer glow system for atmospheric depth
- Dynamic color transitions

#### 10. Spectacular Neon Wave
```http
GET /api/wave/neon
```
**Cyberpunk neon tube with electrical effects**
- Multi-layer neon glow system (inner, electric, atmospheric, halo)
- White-hot core with electrical discharge simulation
- High-frequency flutter for authentic neon tube effect
- Electrical spark effects with random variations
- Motion blur for energy trails

### Query Parameters

| Parameter | Type | Default | Range | Description |
|-----------|------|---------|-------|-------------|
| `color` | string | `#007CF0` | Any hex color | Primary color (URL encoded). Automatically generates complementary gradients |
| `height` | number | `150` | 50-500 | SVG height in pixels. Responsive scaling maintained |
| `speed` | number | `4` | 0.5-10 | Animation duration in seconds. Lower = faster |
| `width` | number | `1200` | 400-2000 | SVG width in pixels. GitHub README optimized |
| `amplitude` | number | `20` | 5-100 | Wave amplitude. Controls vertical wave height |
| `frequency` | number | `2` | 0.5-8 | Wave frequency/cycles. Number of wave periods |
| `pulseWidth` | number | `0.3` | 0.1-0.9 | Pulse width ratio (pulse waves only). Duty cycle percentage |

### Professional Example URLs

```bash
# Professional header wave with enhanced depth
https://waveify.onrender.com/api/wave?color=%23007CF0&height=180&speed=5&width=1200&amplitude=25&frequency=2.5

# Ultra-smooth sine wave with harmonic precision
https://waveify.onrender.com/api/wave/sine?color=%23667eea&height=200&speed=3&amplitude=35&frequency=3

# Digital square wave for tech projects
https://waveify.onrender.com/api/wave/square?color=%2300ff41&height=160&speed=2&amplitude=28&frequency=4

# Organic fluid motion for natural themes
https://waveify.onrender.com/api/wave/fluid?color=%234ecdc4&height=220&speed=6&amplitude=40&frequency=2

# Cyberpunk glitch effect
https://waveify.onrender.com/api/wave/glitch?color=%23ff0080&height=150&speed=0.8&amplitude=45&frequency=3

# Energy plasma for gaming projects
https://waveify.onrender.com/api/wave/plasma?color=%23ff6b6b&height=180&speed=4&amplitude=30&frequency=2.5

# Spectacular neon for cyberpunk aesthetics
https://waveify.onrender.com/api/wave/neon?color=%2300ffff&height=200&speed=3&amplitude=35&frequency=2
```

### 🎨 Professional Color Schemes

#### Corporate/Business
```bash
# Professional blue gradient
https://waveify.onrender.com/api/wave?color=%23667eea&height=160&speed=4&amplitude=22

# Modern purple
https://waveify.onrender.com/api/wave/sine?color=%238B5CF6&height=180&speed=5&amplitude=28

# Clean gray
https://waveify.onrender.com/api/wave/fluid?color=%236B7280&height=150&speed=6&amplitude=20
```

#### Tech/Development
```bash
# GitHub green
https://waveify.onrender.com/api/wave/square?color=%2328a745&height=160&speed=3&amplitude=25

# Tech cyan
https://waveify.onrender.com/api/wave/glitch?color=%2306B6D4&height=150&speed=1.5&amplitude=30

# Electric blue
https://waveify.onrender.com/api/wave/neon?color=%230ea5e9&height=180&speed=4&amplitude=32
```

#### Creative/Artistic
```bash
# Sunset orange
https://waveify.onrender.com/api/wave/plasma?color=%23f97316&height=200&speed=5&amplitude=35

# Pink gradient
https://waveify.onrender.com/api/wave/fluid?color=%23ec4899&height=180&speed=6&amplitude=30

# Vibrant purple
https://waveify.onrender.com/api/wave/triangle?color=%23a855f7&height=160&speed=4&amplitude=28
```

### 🔧 Technical Features

#### Advanced Gradient Systems
- **Auto-Brightness Calculation**: Automatically generates lighter and darker shades from your primary color
- **Multi-Stop Gradients**: Complex gradients with 3-5 color stops for professional depth
- **Animated Gradient Translation**: Dynamic movement effects for enhanced visual appeal
- **Radial Depth Gradients**: Ambient background effects with natural falloff

#### Performance Optimization
- **60fps Smooth Animation**: Optimized animation curves for consistent frame rates
- **Lightweight SVG**: Compressed output with minimal DOM complexity
- **Hardware Acceleration**: CSS transforms optimized for GPU acceleration
- **Scalable Vector Graphics**: Perfect rendering at any size without quality loss

#### Accessibility & UX
- **Reduced Motion Support**: Automatically respects `prefers-reduced-motion` settings
- **ARIA Labels**: Proper accessibility labels for screen readers
- **High Contrast**: Enhanced visibility across different display settings
- **Mobile Responsive**: Optimized for GitHub mobile viewing

#### Mathematical Precision
- **Harmonic Accuracy**: Mathematically correct wave functions
- **120-Point Precision**: Ultra-smooth curves with high sampling rates
- **Phase Relationships**: Proper wave phase management for natural motion
- **Frequency Control**: Accurate frequency representation

### 🎯 Best Practices

#### For GitHub READMEs
```bash
# Optimal dimensions for README headers
https://waveify.onrender.com/api/wave?width=1200&height=150-200

# Moderate animation speeds for better readability
https://waveify.onrender.com/api/wave?speed=4-6

# Professional amplitudes that don't overwhelm content
https://waveify.onrender.com/api/wave?amplitude=20-35
```

#### Color Selection
```bash
# Use brand colors for consistency
https://waveify.onrender.com/api/wave?color=%23yourBrandColor

# Consider contrast with surrounding content
# Light backgrounds: use darker colors (#333, #555)
# Dark backgrounds: use lighter colors (#fff, #f0f0f0)

# Professional palette suggestions:
# Blue: #007CF0, #667eea, #4285f4
# Green: #28a745, #00D26A, #4ecdc4
# Purple: #8B5CF6, #a855f7, #764ba2
```

#### Performance Tips
```bash
# Cache-friendly URLs (parameters in consistent order)
https://waveify.onrender.com/api/wave?color=%23007CF0&height=150&speed=4&width=1200

# Use moderate frequencies for better performance
frequency=1-4 (recommended)

# Optimal speeds for smooth animation
speed=3-6 (seconds)
```

#### Wave Type Selection Guide
- **Default Wave**: Professional headers, business presentations
- **Sine Wave**: Mathematical/scientific projects, clean aesthetics
- **Square Wave**: Tech/digital projects, coding portfolios
- **Fluid Wave**: Organic/natural themes, creative projects
- **Glitch Wave**: Gaming, cyberpunk, digital art projects
- **Neon Wave**: Cyberpunk aesthetics, night themes, gaming
- **Plasma Wave**: Energy themes, sci-fi projects, gaming
- **Triangle Wave**: Geometric designs, architectural projects
- **Sawtooth Wave**: Industrial themes, mechanical projects
- **Pulse Wave**: Digital/electronic projects, tech documentation

### 🚀 Advanced Usage Examples

#### Multi-Wave Compositions
```markdown
<!-- Layered wave effect using multiple images -->
![Top Wave](https://waveify.onrender.com/api/wave/neon?color=%2300ffff&height=100&amplitude=20)
![Bottom Wave](https://waveify.onrender.com/api/wave/fluid?color=%23ff0080&height=100&amplitude=25)
```

#### Responsive Design
```markdown
<!-- Different waves for different screen sizes -->
<picture>
  <source media="(max-width: 768px)" srcset="https://waveify.onrender.com/api/wave?width=800&height=120">
  <img src="https://waveify.onrender.com/api/wave?width=1200&height=150" alt="Wave Banner">
</picture>
```

#### Dynamic Color Matching
```bash
# Match your project's primary color
https://waveify.onrender.com/api/wave?color=%23${yourProjectColor}

# Create complementary effects
https://waveify.onrender.com/api/wave/sine?color=%23${complementaryColor}
```

---

## ⌨️ Typing Animation API

Create dynamic typing animations with various modern styles and professional effects. Features full emoji support, smooth cursor animations, and optimized visual effects.

### ✨ Recent Improvements
- **🎯 Professional Look**: Reduced blur effects for cleaner appearance
- **😀 Full Emoji Support**: Unicode emojis render as high-quality SVG images
- **🎬 Smooth Animations**: Enhanced cursor blinking and character transitions
- **⚡ Optimized Performance**: Lightweight SVG with improved rendering

### Available Endpoints

#### 1. Classic Typing
```http
GET /api/typing
GET /api/typing/classic
```
Clean, professional typing effect with smooth character transitions.

#### 2. Neon Typing
```http
GET /api/typing/neon
```
Futuristic neon glow effect with subtle blur (optimized for professional look).

#### 3. Glitch Typing
```http
GET /api/typing/glitch
```
Cyberpunk-style glitch effects with controlled distortions.

#### 4. Rainbow Typing
```http
GET /api/typing/rainbow
```
Animated rainbow gradient that shifts through colors smoothly.

#### 5. Wave Typing
```http
GET /api/typing/wave
```
Gentle wave motion effect with floating character animations.

#### 6. Matrix Typing
```http
GET /api/typing/matrix
```
Matrix-style green text with minimal blur for clean readability.

#### 7. Terminal Typing
```http
GET /api/typing/terminal
```
Realistic terminal interface with window controls and prompt.

#### 8. Gradient Typing
```http
GET /api/typing/gradient
```
Smooth gradient colors with customizable color combinations.

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | string | `"Welcome to my project"` | Text to animate (supports emojis 😀🚀✨) |
| `speed` | number | `50` | Typing speed (ms per character) |
| `color` | string | `#000000` | Text color (hex) |
| `backgroundColor` | string | `transparent` | Background color |
| `fontSize` | number | `20` | Font size in pixels |
| `fontFamily` | string | `monospace` | Font family |
| `width` | number | `400` | SVG width in pixels |
| `height` | number | `60` | SVG height in pixels |
| `cursor` | boolean | `true` | Show animated cursor |
| `cursorColor` | string | `#000000` | Cursor color |
| `type` | string | `classic` | Animation type |
| `prompt` | string | `"$ "` | Terminal prompt (terminal type only) |
| `gradientColors` | string | `"#667eea,#764ba2"` | Comma-separated gradient colors |

### Example URLs

```bash
# Classic typing with professional cursor
https://waveify.onrender.com/api/typing?text=Hello+World&speed=100&color=%23333333

# Emoji support demonstration
https://waveify.onrender.com/api/typing?text=🚀+Welcome+to+my+project+✨+%20+&speed=80&fontSize=24

# Neon typing effect (optimized blur)
https://waveify.onrender.com/api/typing/neon?text=CYBER+SECURITY+🔒+%20+&speed=80&color=%2300ffff

# Glitch typing with smooth effects
https://waveify.onrender.com/api/typing/glitch?text=SYSTEM+ERROR+⚠️+%20+&speed=60&color=%23ff0040

# Rainbow typing with emojis
https://waveify.onrender.com/api/typing/rainbow?text=COLORFUL+TEXT+🌈+%20+&speed=70

# Matrix style with clean look
https://waveify.onrender.com/api/typing/matrix?text=Welcome+to+the+Matrix+💊+%20+&speed=90

# Terminal style with emojis
https://waveify.onrender.com/api/typing/terminal?text=npm+install+awesome-project+📦+%20+&prompt=dev@computer:~$+

# Gradient typing with modern colors
https://waveify.onrender.com/api/typing/gradient?text=Beautiful+Gradient+🎨+%20+&gradientColors=%23ff6b6b,%234ecdc4

# Wave typing with floating effect
https://waveify.onrender.com/api/typing/wave?text=Smooth+Wave+Motion+🌊+%20+&speed=75&color=%23007CF0
```

### 🎯 Professional Examples

#### Corporate/Business Use
```bash
# Professional welcome message
https://waveify.onrender.com/api/typing?text=Welcome+to+TechCorp+Solutions&fontSize=22&color=%23333

# Clean project description
https://waveify.onrender.com/api/typing/gradient?text=Building+the+Future+🚀+%20+&gradientColors=%23667eea,%23764ba2
```

#### Developer/Tech Projects
```bash
# Code-focused messaging
https://waveify.onrender.com/api/typing/terminal?text=git+push+origin+main+✅+%20+&prompt=developer@macbook:~$+%20+&cursor=true

# Matrix-style for cybersecurity
https://waveify.onrender.com/api/typing/matrix?text=Secure+Systems+🔐&speed=85
```

#### Creative/Gaming Projects
```bash
# Neon gaming style
https://waveify.onrender.com/api/typing/neon?text=Level+Up+Your+Game+🎮&color=%23ff00ff

# Glitch effect for tech art
https://waveify.onrender.com/api/typing/glitch?text=Digital+Art+Creation+🎨&speed=70
```

### 🔧 Technical Features

#### Emoji Support System
- **Unicode Detection**: Advanced regex pattern covering all emoji Unicode ranges
- **High-Quality Rendering**: Emojis displayed as SVG images via Twemoji CDN
- **Fallback System**: Automatic code point generation for unlisted emojis
- **50+ Pre-mapped Emojis**: Common emojis with optimized code points

#### Professional Animation System
- **Smooth Cursor**: Enhanced blinking with professional timing (45%-95% opacity cycles)
- **Reduced Blur**: Optimized `stdDeviation` from 0.3 to 0.1 for cleaner appearance
- **Consistent Timing**: Standardized animation delays across all variants
- **Performance Optimized**: Lightweight SVG with minimal DOM impact

#### Accessibility Features
- **Reduced Motion Support**: Respects `prefers-reduced-motion` media query
- **Screen Reader Friendly**: Proper SVG structure with semantic markup
- **High Contrast Options**: Professional color combinations available
- **Responsive Design**: Automatic width calculation based on content

#### Browser Compatibility
- ✅ **GitHub**: Perfect rendering in README files
- ✅ **All Modern Browsers**: Chrome, Firefox, Safari, Edge
- ✅ **Mobile Devices**: Responsive on all screen sizes
- ✅ **CDN Optimized**: Fast delivery with 1-hour caching

### 🎨 Style Specifications

| Style | Blur Level | Cursor Type | Best For |
|-------|------------|-------------|----------|
| **Classic** | None | Clean `▌` | Professional documents |
| **Neon** | Minimal (0.1) | Glowing `▊` | Tech/Gaming projects |
| **Matrix** | Minimal (0.1) | Green `▊` | Cybersecurity/Hacking |
| **Glitch** | None | Jittery `▌` | Creative/Art projects |
| **Rainbow** | None | Colorful `▌` | Fun/Creative content |
| **Wave** | None | Floating `▌` | Smooth/Elegant designs |
| **Terminal** | None | Blinking `▌` | Developer portfolios |
| **Gradient** | None | Gradient `▌` | Modern/Corporate |

---

## ⏳ Loader Animation API

Generate elegant loading animations and spinners perfect for indicating loading states, progress indicators, and dynamic content in your projects.

### Main Endpoint
```http
GET /api/loader
```

### Type-Specific Endpoints
```http
GET /api/loader/dots           # Animated dots loader
GET /api/loader/spinner        # Spinning circle loader  
GET /api/loader/pulse          # Pulsing circle loader
GET /api/loader/bars           # Animated bars loader
GET /api/loader/wave           # Wave-style loader
GET /api/loader/orbit          # Orbital animation loader
```

### Additional Endpoints
```http
GET /api/loader/types          # Get available loader types
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | string | `dots` | Loader animation type |
| `color` | string | `#007CF0` | Primary color (hex) |
| `secondaryColor` | string | `#00B4D8` | Secondary color for gradients |
| `size` | number | `40` | Loader size in pixels |
| `speed` | number | `1.0` | Animation speed multiplier |
| `width` | number | `200` | SVG width in pixels |
| `height` | number | `200` | SVG height in pixels |
| `thickness` | number | `3` | Line thickness for applicable loaders |
| `count` | number | `3` | Number of elements (dots, bars, etc.) |
| `background` | string | `transparent` | Background color |

### Available Loader Types

#### 🔵 Dots Loader
- **Style:** Three bouncing dots
- **Animation:** Sequential bounce effect
- **Parameters:** `count` (number of dots), `color`, `speed`
- **Best for:** Button loading states, form submissions

#### 🌀 Spinner Loader  
- **Style:** Rotating circle with gradient
- **Animation:** Smooth 360° rotation
- **Parameters:** `thickness`, `color`, `secondaryColor`
- **Best for:** Page loading, data fetching

#### 💓 Pulse Loader
- **Style:** Expanding and contracting circle
- **Animation:** Rhythmic pulse effect
- **Parameters:** `color`, `speed`, `size`
- **Best for:** Heartbeat indicators, sync status

#### 📊 Bars Loader
- **Style:** Animated vertical bars
- **Animation:** Height oscillation
- **Parameters:** `count` (number of bars), `color`, `speed`
- **Best for:** Audio visualizers, processing indicators

#### 🌊 Wave Loader
- **Style:** Flowing wave animation
- **Animation:** Continuous wave motion
- **Parameters:** `color`, `amplitude`, `frequency`
- **Best for:** Data streaming, continuous processes

#### 🪐 Orbit Loader
- **Style:** Orbiting particles around center
- **Animation:** Circular orbital motion
- **Parameters:** `count` (number of orbiters), `color`, `speed`
- **Best for:** Complex operations, system initialization

### Example URLs

```bash
# Basic dots loader
https://waveify.onrender.com/api/loader?type=dots&color=%23007CF0&speed=1.2

# Gradient spinner
https://waveify.onrender.com/api/loader/spinner?color=%23ff6b6b&secondaryColor=%234ecdc4&thickness=4

# Large pulse loader
https://waveify.onrender.com/api/loader/pulse?color=%239b59b6&size=60&speed=0.8

# Custom bars loader
https://waveify.onrender.com/api/loader/bars?color=%23f39c12&count=5&speed=1.5&height=100

# Wave loader with custom colors
https://waveify.onrender.com/api/loader/wave?color=%2327ae60&secondaryColor=%232ecc71&width=300

# Orbit loader for complex operations
https://waveify.onrender.com/api/loader/orbit?color=%233498db&count=4&speed=2.0&size=50
```

### Usage Examples

#### In Markdown
```markdown
<!-- Loading State for API Calls -->
![Loading](https://waveify.onrender.com/api/loader?type=spinner&color=%23007CF0)

<!-- Button Loading State -->
![Button Loading](https://waveify.onrender.com/api/loader/dots?color=%23ffffff&size=20&width=100&height=30)

<!-- Page Loading Indicator -->
![Page Loading](https://waveify.onrender.com/api/loader/wave?color=%23667eea&width=400&height=60)
```

#### In HTML
```html
<!-- Loading overlay -->
<img src="https://waveify.onrender.com/api/loader/pulse?color=%23ff4757&size=80" alt="Loading...">

<!-- Inline loading indicator -->
<img src="https://waveify.onrender.com/api/loader/dots?color=%23333&size=16" style="vertical-align: middle;">
```

#### React/JSX
```jsx
// Loading component
function LoadingSpinner({ isLoading, color = "#007CF0" }) {
  if (!isLoading) return null;
  
  return (
    <img 
      src={`https://waveify.onrender.com/api/loader/spinner?color=${encodeURIComponent(color)}&size=40`}
      alt="Loading..."
      style={{ display: 'block', margin: '20px auto' }}
    />
  );
}

// Button with loading state
<button disabled={loading}>
  {loading ? (
    <img src="https://waveify.onrender.com/api/loader/dots?color=%23ffffff&size=16&width=40&height=16" alt="" />
  ) : (
    "Submit"
  )}
</button>
```

#### CSS Integration
```css
.loading-container {
  background: url('https://waveify.onrender.com/api/loader/wave?color=%23e0e0e0&width=200&height=4') 
              no-repeat center;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-loading::after {
  content: '';
  background: url('https://waveify.onrender.com/api/loader/spinner?color=%23ffffff&size=16') 
              no-repeat center;
  width: 16px;
  height: 16px;
  margin-left: 8px;
}
```

---

## 💻 Terminal Simulation API

Create stunning, professional terminal interfaces with realistic command-line simulations. Features enhanced themes, modern UI/UX design principles, intelligent command simulation, and accessibility support. Perfect for showcasing installation commands, development workflows, and adding a sophisticated developer aesthetic to your documentation.

### ✨ Professional Features
- **🎨 12 Professional Themes**: From corporate-grade designs to cyberpunk aesthetics
- **🧠 Intelligent Command Simulation**: Realistic outputs for 50+ modern dev tools
- **♿ Accessibility-Compliant**: High contrast, reduced motion, screen reader support
- **📱 Responsive Design**: Optimized for GitHub README and all screen sizes
- **⚡ 60fps Animations**: Smooth typing effects with professional timing
- **🔧 Advanced Typography**: Enhanced font stacks and spacing systems

### Available Endpoints

#### 1. Professional Themes (New)
```http
GET /api/terminal                    # Enhanced modern theme (default)
GET /api/terminal/professional       # Corporate-grade design
GET /api/terminal/ocean             # Deep blue gradients with wave effects
GET /api/terminal/sunset            # Warm gradients with golden hour effects
GET /api/terminal/monochrome        # High contrast minimalist design
```

#### 2. Enhanced Classic Themes
```http
GET /api/terminal/modern            # Enhanced macOS-style terminal
GET /api/terminal/matrix            # Classic green-on-black hacker aesthetic
GET /api/terminal/cyberpunk         # Futuristic neon terminal with RGB effects
GET /api/terminal/retro             # Vintage CRT monitor with scanlines
GET /api/terminal/glass             # Modern glassmorphism effect
GET /api/terminal/neon              # Electric neon tube effects
GET /api/terminal/minimal           # Clean, distraction-free design
```

#### 3. GitHub Integration Themes
```http
GET /api/terminal/github-dark       # GitHub dark mode compatible
GET /api/terminal/github-light      # GitHub light mode compatible
```

### Additional Endpoints
```http
GET /api/terminal/themes            # List all available themes with previews
GET /api/terminal/commands          # Modern dev tool command examples
GET /api/terminal/examples          # Professional usage examples
```

### Enhanced Query Parameters

| Parameter | Type | Default | Range/Options | Description |
|-----------|------|---------|---------------|-------------|
| `commands` | string/array | `"npm install"` | Any valid commands | Commands to simulate (separated by `;`) |
| `theme` | string | `modern` | See theme list below | Professional terminal theme |
| `width` | number | `800` | 320-2400 | Terminal width in pixels (responsive) |
| `height` | number | `400` | 160-1200 | Terminal height in pixels |
| `fontSize` | number | `14` | 8-32 | Font size with enhanced typography |
| `speed` | number | `50` | 5-300 | Typing speed (ms per character) |
| `prompt` | string | `"$ "` | Any string | Command prompt style |
| `title` | string | `"Terminal"` | Any string | Terminal window title |
| `cursor` | boolean | `true` | true/false | Show animated cursor |
| `showHeader` | boolean | `true` | true/false | Show terminal window header |
| `githubMode` | boolean | `false` | true/false | Optimize for GitHub README |
| `commandType` | string | `"auto"` | auto/npm/git/docker/test/dev/deploy/system | Command simulation type |
| `borderRadius` | number | `12` | 0-20 | Corner radius for modern look |
| `padding` | number | `16` | 4-32 | Internal padding |
| `lineHeight` | number | `1.4` | 1.2-2.0 | Line spacing |
| `showLineNumbers` | boolean | `false` | true/false | Show line numbers |
| `enableScanlines` | boolean | `true` | true/false | Retro CRT scanline effect |
| `showTimestamp` | boolean | `false` | true/false | Show command timestamps |
| `highContrast` | boolean | `false` | true/false | Accessibility high contrast |
| `reducedMotion` | boolean | `false` | true/false | Respect reduced motion preference |

### 🎨 Professional Theme Gallery

#### 💼 Professional Theme (New)
- **Design:** Corporate-grade slate blue design with enhanced depth
- **Typography:** Professional font stacks with optimal spacing
- **Colors:** Sophisticated blue-gray palette with subtle gradients
- **Features:** Drop shadows, professional typography, accessibility-compliant
- **Best for:** Business documentation, corporate projects, professional portfolios

#### 🌊 Ocean Theme (New)
- **Design:** Deep blue gradients with wave-like header effects
- **Typography:** Clean, maritime-inspired color scheme
- **Colors:** Ocean blue palette with cyan accents
- **Features:** Fluid gradients, wave animations, calming aesthetics
- **Best for:** Data science projects, maritime applications, calming interfaces

#### 🌅 Sunset Theme (New)
- **Design:** Warm gradients with golden hour effects
- **Typography:** Readable orange-brown color scheme
- **Colors:** Sunset palette with warm amber accents
- **Features:** Gradient backgrounds, warm glow effects, cozy aesthetics
- **Best for:** Creative projects, photography portfolios, warm branding

#### ⚫ Monochrome Theme (New)
- **Design:** High contrast black and white minimalist design
- **Typography:** Maximum readability with stark contrast
- **Colors:** Pure black and white with gray accents
- **Features:** Ultimate accessibility, minimal distraction, professional focus
- **Best for:** Accessibility-first projects, minimalist designs, high contrast needs

#### 🖥️ Enhanced Modern Theme
- **Design:** Refined macOS-style terminal with professional polish
- **Typography:** System font stacks with enhanced readability
- **Colors:** Clean dark background with crisp white text
- **Features:** Realistic window controls, subtle shadows, modern aesthetics
- **Best for:** Documentation, tutorials, modern development workflows

#### 🔰 Matrix Theme
- **Design:** Classic green-on-black hacker aesthetic with glow effects
- **Typography:** Monospace with authentic terminal feel
- **Colors:** Bright green text with subtle glow on pure black
- **Features:** Retro font styling, phosphor glow, nostalgic appeal
- **Best for:** Cybersecurity projects, hacker themes, retro computing

#### 🌆 Cyberpunk Theme
- **Design:** Futuristic neon terminal with RGB channel separation
- **Typography:** Digital font with glitch effects
- **Colors:** Electric cyan and magenta with neon glow
- **Features:** RGB glitch effects, neon glow, digital corruption
- **Best for:** Gaming projects, sci-fi themes, cyberpunk aesthetics

#### � Glass Theme
- **Design:** Modern glassmorphism with backdrop blur effects
- **Typography:** Clean, floating text with transparency
- **Colors:** Translucent backgrounds with subtle tinting
- **Features:** Backdrop blur, transparency effects, modern depth
- **Best for:** Modern UI showcases, glassmorphism designs, contemporary aesthetics

### 🚀 Intelligent Command Simulation

#### Modern Development Tools (Auto-Detected)
```bash
# Bun (Ultra-fast package manager)
bun install, bun dev, bun build

# Vite (Next-gen frontend tooling)
vite dev, vite build, vite preview

# Deno (Secure TypeScript runtime)
deno run, deno test, deno deploy

# Rust/Cargo (Systems programming)
cargo run, cargo build, cargo test

# Go (Fast compilation)
go run, go build, go test

# pnpm (Efficient package manager)
pnpm install, pnpm dev, pnpm build
```

#### Enhanced Package Managers
```bash
# npm (Node Package Manager)
npm install, npm run dev, npm test, npm build

# Yarn (Fast package manager)
yarn install, yarn dev, yarn test

# pip (Python packages)
pip install, pip upgrade, pip list
```

#### Git & Version Control
```bash
# Git commands with realistic output
git clone, git add, git commit, git push, git pull
git status, git log, git branch, git merge
```

#### Docker & Containerization
```bash
# Docker commands
docker build, docker run, docker ps, docker logs
docker-compose up, docker-compose down
```

#### Testing Frameworks
```bash
# Jest, Vitest, Cypress, Playwright
npm test, yarn test, npx jest, npx cypress
```

### Professional Example URLs

#### Business & Corporate
```bash
# Professional theme for business documentation
https://waveify.onrender.com/api/terminal/professional?commands=npm%20install%20%40company%2Fui-kit;npm%20run%20build&title=Enterprise%20Setup

# Clean setup instructions
https://waveify.onrender.com/api/terminal/monochrome?commands=git%20clone%20repo;cd%20repo;npm%20install&showTimestamp=true
```

#### Modern Development Workflows
```bash
# Bun with ocean theme
https://waveify.onrender.com/api/terminal/ocean?commands=bun%20install;bun%20dev&title=Modern%20Dev%20Setup&fontSize=16

# Vite development with sunset theme
https://waveify.onrender.com/api/terminal/sunset?commands=npm%20create%20vite%40latest;cd%20my-app;npm%20install;npm%20run%20dev

# Deno with professional theme
https://waveify.onrender.com/api/terminal/professional?commands=deno%20run%20--allow-net%20server.ts&prompt=deno%3E%20
```

#### GitHub README Optimization
```bash
# GitHub dark mode compatible
https://waveify.onrender.com/api/terminal/github-dark?commands=npm%20install%20my-package;npm%20start&githubMode=true&width=700

# GitHub light mode compatible  
https://waveify.onrender.com/api/terminal/github-light?commands=pip%20install%20my-package;python%20main.py&githubMode=true
```

#### Creative & Gaming Projects
```bash
# Cyberpunk aesthetic for gaming
https://waveify.onrender.com/api/terminal/cyberpunk?commands=initialize%20systems;load%20game%20engine;run%20simulation&title=GAME_TERMINAL

# Matrix style for cybersecurity
https://waveify.onrender.com/api/terminal/matrix?commands=nmap%20-sS%20target;hydra%20-l%20admin%20-P%20wordlist.txt%20ssh%3A%2F%2Ftarget&prompt=root%40matrix%23%20

# Glass effect for modern UI
https://waveify.onrender.com/api/terminal/glass?commands=npm%20run%20dev;open%20http%3A%2F%2Flocalhost%3A3000&borderRadius=16
```

### 🔧 Advanced Usage Examples

#### Multi-Step Installation Guide
```markdown
<!-- Step 1: Repository Setup -->
![Setup](https://waveify.onrender.com/api/terminal/professional?commands=git%20clone%20https%3A%2F%2Fgithub.com%2Fuser%2Frepo.git;cd%20repo&title=Repository%20Setup)

<!-- Step 2: Dependencies -->
![Install](https://waveify.onrender.com/api/terminal/ocean?commands=npm%20install;npm%20run%20build&title=Install%20Dependencies)

<!-- Step 3: Development -->
![Dev](https://waveify.onrender.com/api/terminal/sunset?commands=npm%20run%20dev&title=Start%20Development)
```

#### Responsive Terminal Display
```html
<!-- Large screens -->
<picture>
  <source media="(min-width: 768px)" 
          srcset="https://waveify.onrender.com/api/terminal/professional?commands=npm%20start&width=800&height=400">
  <!-- Mobile screens -->
  <img src="https://waveify.onrender.com/api/terminal/professional?commands=npm%20start&width=600&height=300" 
       alt="Terminal">
</picture>
```

#### Accessibility-First Design
```bash
# High contrast for accessibility
https://waveify.onrender.com/api/terminal/monochrome?commands=npm%20test&highContrast=true&fontSize=16

# Reduced motion for vestibular disorders
https://waveify.onrender.com/api/terminal/professional?commands=npm%20install&reducedMotion=true&speed=0
```

#### Custom Branding
```bash
# Custom colors with professional theme
https://waveify.onrender.com/api/terminal/professional?commands=npm%20run%20deploy&customColors={"accent":"%23ff6b6b","success":"%234ecdc4"}

# Corporate terminal with branding
https://waveify.onrender.com/api/terminal/professional?commands=npm%20run%20enterprise&title=CompanyName%20Terminal&borderRadius=8
```

### 🎯 Best Practices

#### For GitHub READMEs
```bash
# Use GitHub-optimized themes
theme=github-dark or theme=github-light

# Enable GitHub mode for better rendering
githubMode=true

# Optimal dimensions for README
width=700-800, height=300-400

# Professional command examples
commands=git%20clone%20repo;npm%20install;npm%20start
```

#### Accessibility Guidelines
```bash
# Always provide alt text
alt="Installation Terminal Commands"

# Use high contrast when needed
highContrast=true for better visibility

# Respect motion preferences
reducedMotion=true for sensitive users

# Adequate font sizes
fontSize=14-16 for good readability
```

#### Performance Optimization
```bash
# Cache-friendly parameter order
commands -> theme -> width -> height -> other options

# Use modern themes for better performance
professional, ocean, sunset, monochrome themes are optimized

# Moderate animation speeds
speed=50-100 for smooth but not distracting animation
```

#### Command Selection Guide
- **Installation:** `npm install`, `yarn add`, `pip install`
- **Development:** `npm run dev`, `yarn dev`, `bun dev`
- **Building:** `npm run build`, `yarn build`, `cargo build`
- **Testing:** `npm test`, `yarn test`, `cargo test`
- **Git Workflow:** `git clone`, `git add .`, `git commit`, `git push`
- **Docker:** `docker build`, `docker run`, `docker-compose up`

### 🚀 Advanced Features

#### Intelligent Output Generation
The terminal automatically generates realistic outputs for:
- Package installation with progress bars and dependency trees
- Git operations with commit hashes and branch information
- Build processes with compilation steps and file outputs
- Test results with pass/fail statistics
- Server startup with port and URL information

#### Modern Typography System
- **Font Stack:** SF Mono, Monaco, Inconsolata, Roboto Mono, Source Code Pro
- **Letter Spacing:** Optimized 0.05em for better readability
- **Text Rendering:** optimizeLegibility for crisp text display
- **Font Weights:** Strategic use of 400, 450, 500, 600 for hierarchy

#### Accessibility Compliance
- **WCAG 2.1 AA Compliant:** High contrast ratios and readable fonts
- **Reduced Motion:** Respects `prefers-reduced-motion` media query
- **Screen Reader Friendly:** Proper SVG structure with semantic markup
- **Keyboard Navigation:** Focus indicators and logical tab order

---

## 📊 GitHub Profile Stats API

Generate beautiful, animated GitHub profile statistics with live data from the GitHub API. Features modern themes, customizable metrics, and stunning visual effects perfect for README profiles and project showcases.

### Main Endpoint
```http
GET /api/stats
```

### Theme-Specific Endpoints
```http
GET /api/stats/dark             # Dark theme (default)
GET /api/stats/light            # Light theme for light backgrounds
GET /api/stats/auto             # Auto theme (system preference)
```

### Additional Endpoints
```http
GET /api/stats/metrics          # Get available metrics and options
GET /api/stats/examples         # Get usage examples and templates
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `username` | string | **required** | GitHub username (e.g., "octocat") |
| `metrics` | array/string | `['commits', 'prs', 'issues', 'stars']` | Metrics to display (comma-separated or array) |
| `theme` | string | `dark` | Visual theme (`dark`, `light`, `auto`) |
| `animation` | string | `countUp` | Animation style (`countUp`, `slideIn`, `pulse`) |
| `width` | number | `800` | SVG width in pixels |
| `height` | number | `400` | SVG height in pixels |
| `showAvatar` | boolean | `true` | Display user's GitHub avatar |
| `gradientType` | string | `ocean` | Background gradient style |

### Available Metrics

| Metric | Icon | Description | Data Source |
|--------|------|-------------|-------------|
| `commits` | 💻 | Estimated total commits | Calculated from public repos |
| `prs` | 🔄 | Pull requests created | Estimated from repository activity |
| `issues` | ⚡ | Issues opened | Estimated from repository activity |
| `stars` | ⭐ | Total stars earned | Sum of all repository stars |
| `repos` | 📁 | Public repositories | Direct from GitHub API |
| `followers` | 👥 | GitHub followers | Direct from GitHub API |

### Themes & Visual Features

#### 🌙 Dark Theme (Default)
- **Background:** Dark gradient with grid pattern overlay
- **Colors:** Modern dark palette with blue/purple accents
- **Effects:** Glow effects, animated gradients, smooth transitions
- **Typography:** Modern sans-serif with monospace for usernames

#### ☀️ Light Theme
- **Background:** Light gradient with subtle shadows
- **Colors:** Clean light palette with professional contrast
- **Effects:** Drop shadows, elegant typography, smooth animations
- **Typography:** Professional sans-serif with excellent readability

#### 🤖 Auto Theme
- **Behavior:** Automatically adapts to system/browser preference
- **Fallback:** Defaults to dark theme for maximum compatibility
- **Detection:** Uses CSS media queries for theme detection

### Animation Types

#### 📈 CountUp Animation (Default)
- Number values animate from 0 to final value
- Staggered timing for visual appeal
- Smooth easing functions
- Perfect for showcasing growth metrics

#### 🎭 SlideIn Animation
- Elements slide in from left with opacity fade
- Sequential timing for each metric card
- Professional presentation style
- Great for formal documentation

#### 💫 Pulse Animation
- Gentle pulsing effect on metric cards
- Subtle attention-grabbing animation
- Continuous loop for dynamic feel
- Ideal for live dashboards

### Features

#### 🎨 Enhanced Visual Elements (v2.0)
- **Modern Language Chart:** Revolutionary design with authentic programming language colors
  - Real-world language colors: JavaScript (#f7df1e), TypeScript (#3178c6), Python (#3776ab), etc.
  - Animated progress bars with gradient fills and moving shimmer effects  
  - Crown emoji for the top language with subtle animation
  - Sparkle effects and decorative elements around high-usage languages
  - Glassmorphism card design with rounded corners and drop shadows
  - Smooth entrance animations with staggered timing for each language
- **Professional Avatar Integration:** Profile pictures with animated gradient borders and glow effects
- **Enhanced Metric Cards:** Beautiful cards with emoji icons, animated counters, and subtle hover effects
- **Smart Footer Stats:** Location, follower count, and total stars with smooth fade-in animations
- **Responsive Design:** Intelligent layout that adapts to different screen sizes and orientations

#### 📊 Data Integration
- **Real-time Data:** Fetches latest information from GitHub API
- **Smart Caching:** 30-minute cache for optimal performance
- **Error Handling:** Graceful error states with helpful messages
- **Rate Limiting:** Built-in protection against API limits

#### 🚀 Performance
- **Lightweight SVG:** Vector graphics for crisp display at any size
- **Fast Rendering:** Optimized SVG generation with minimal overhead
- **CDN Ready:** Perfect for embedding in READMEs and websites
- **Browser Compatible:** Works in all modern browsers and GitHub

### 🔧 Advanced Features (v3.0)

#### 📊 Smart Data Processing
- **Enhanced Language Detection:** Sophisticated algorithm analyzing repository activity and file distributions
- **Contribution Analysis:** Advanced contribution pattern recognition with streak calculations
- **Activity Estimation:** Smart algorithms providing accurate commit and PR estimations
- **Real-time Sync:** Live data fetching with intelligent 30-minute caching

#### 🛡️ Enterprise-Grade Reliability
- **Beautiful Error States:** Elegant error handling with helpful guidance and modern styling
- **Rate Limiting Protection:** Intelligent GitHub API usage with automatic fallback strategies
- **Performance Optimization:** Sub-200ms generation time with optimized SVG output
- **Scalability:** Designed to handle high traffic with CDN compatibility

#### 🎯 Responsive & Accessible Design
- **Mobile Optimized:** Perfect display on all screen sizes and orientations
- **Retina Ready:** Crisp SVG graphics at any resolution and device pixel ratio
- **GitHub Compatible:** Specially optimized for README.md display with proper spacing
- **Cross-Browser:** Works flawlessly in all modern browsers and GitHub's renderer

### Example URLs (Updated for v3.0)

```bash
# Revolutionary modern stats (default - larger size)
https://waveify.onrender.com/api/stats?username=octocat

# Premium light theme with custom metrics
https://waveify.onrender.com/api/stats/light?username=octocat&metrics=stars,repos,followers,commits

# Large showcase card with cinematic animations
https://waveify.onrender.com/api/stats?username=octocat&width=960&height=540&animation=slideIn

# Compact card without avatar for mobile
https://waveify.onrender.com/api/stats?username=octocat&showAvatar=false&width=700&height=360

# Focus on specific achievements
https://waveify.onrender.com/api/stats?username=octocat&metrics=stars,followers&width=600&height=320

# Auto-adaptive theme with pulse animations
https://waveify.onrender.com/api/stats/auto?username=octocat&animation=pulse
```

### Usage Examples (Best Practices)

#### In GitHub README.md
```markdown
## 📊 My GitHub Statistics

<!-- Modern default card -->
![GitHub Stats](https://waveify.onrender.com/api/stats?username=your-username)

<!-- Light theme for repositories with light README themes -->
![GitHub Stats](https://waveify.onrender.com/api/stats/light?username=your-username)

<!-- Custom metrics focusing on achievements -->
![GitHub Stats](https://waveify.onrender.com/api/stats?username=your-username&metrics=stars,repos,followers&width=800&height=400)

<!-- Compact mobile-friendly version -->
![GitHub Stats](https://waveify.onrender.com/api/stats?username=your-username&showAvatar=false&width=650&height=320)
```

#### In HTML/Documentation
```html
<!-- Premium dark theme with animations -->
<img src="https://waveify.onrender.com/api/stats?username=your-username&animation=slideIn" 
     alt="GitHub Statistics" 
     style="max-width: 100%; height: auto; border-radius: 12px;" />

<!-- Light theme for professional websites -->
<img src="https://waveify.onrender.com/api/stats/light?username=your-username&width=900&height=480" 
     alt="GitHub Profile Statistics" 
     style="box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />

<!-- Responsive card with fallback -->
<picture>
  <source media="(prefers-color-scheme: dark)" 
          srcset="https://waveify.onrender.com/api/stats/dark?username=your-username">
  <img src="https://waveify.onrender.com/api/stats/light?username=your-username" 
       alt="GitHub Stats" />
</picture>
```

#### React/Next.js Integration
```jsx
// Modern React component with theme support
function GitHubStats({ username, theme = 'dark', className = '' }) {
  const statsUrl = `https://waveify.onrender.com/api/stats/${theme}?username=${username}&animation=countUp`;
  
  return (
    <div className={`github-stats-container ${className}`}>
      <img 
        src={statsUrl}
        alt={`${username}'s GitHub Statistics`}
        className="github-stats-image"
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          borderRadius: '16px',
          boxShadow: theme === 'light' 
            ? '0 4px 20px rgba(0,0,0,0.1)' 
            : '0 4px 20px rgba(0,0,0,0.3)'
        }}
        loading="lazy"
      />
    </div>
  );
}

// Usage examples
<GitHubStats username="octocat" theme="dark" />
<GitHubStats username="your-username" theme="light" className="my-4" />
```

#### Vue.js Integration
```vue
<template>
  <div class="github-stats-wrapper">
    <img 
      :src="statsUrl"
      :alt="`${username}'s GitHub Statistics`"
      class="github-stats"
      @load="onStatsLoad"
      @error="onStatsError"
    />
  </div>
</template>

<script>
export default {
  props: {
    username: { type: String, required: true },
    theme: { type: String, default: 'dark' },
    metrics: { type: Array, default: () => ['commits', 'prs', 'issues', 'stars'] }
  },
  computed: {
    statsUrl() {
      const baseUrl = `https://waveify.onrender.com/api/stats/${this.theme}`;
      const params = new URLSearchParams({
        username: this.username,
        metrics: this.metrics.join(','),
        animation: 'countUp'
      });
      return `${baseUrl}?${params}`;
    }
  },
  methods: {
    onStatsLoad() {
      this.$emit('stats-loaded');
    },
    onStatsError() {
      this.$emit('stats-error');
    }
  }
}
</script>

<style scoped>
.github-stats {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  transition: transform 0.3s ease;
}

.github-stats:hover {
  transform: translateY(-4px);
}
</style>
```

#### Advanced Implementation Examples

#### 🎯 Portfolio Showcase
```markdown
<!-- Large premium card for portfolios -->
![Portfolio GitHub Stats](https://waveify.onrender.com/api/stats?username=your-username&width=960&height=520&animation=slideIn&metrics=stars,repos,followers,commits)
```

#### 📱 Mobile-Optimized Cards
```markdown
<!-- Responsive mobile-friendly version -->
![Mobile GitHub Stats](https://waveify.onrender.com/api/stats?username=your-username&width=680&height=360&showAvatar=false)
```

#### 🎨 Theme-Adaptive Display
```markdown
<!-- Auto theme that respects system preferences -->
![Adaptive GitHub Stats](https://waveify.onrender.com/api/stats/auto?username=your-username&animation=pulse)
```

#### 📊 Metrics-Focused Display
```markdown
<!-- Highlighting specific achievements -->
![Achievement Stats](https://waveify.onrender.com/api/stats?username=your-username&metrics=stars,followers&width=600&height=300)
```

### Error Handling & Troubleshooting

The API provides beautiful, informative error SVGs when issues occur:

- **🚫 Invalid Username:** Elegant error card with "User not found" message and suggested actions
- **⏱️ API Rate Limits:** Graceful handling with retry suggestions and estimated wait times
- **🌐 Network Issues:** Timeout handling with fallback content and connectivity guidance
- **❌ Invalid Parameters:** Clear error messages with usage hints and parameter corrections
- **🔒 Private Profiles:** Respectful messaging for private or restricted accounts

### Performance & Optimization

#### ⚡ Speed Optimizations
- **Caching Strategy:** Intelligent 30-minute server-side cache with selective refresh
- **API Efficiency:** Optimized GitHub API calls with intelligent batching and rate limiting
- **SVG Optimization:** Efficient SVG generation with minimal bandwidth usage (typically <50KB)
- **CDN Compatibility:** Perfect for high-traffic implementations with CDN distribution

#### 📈 Scalability Features  
- **Load Balancing:** Designed to handle high concurrent requests
- **Error Recovery:** Automatic retry mechanisms for transient failures
- **Resource Management:** Efficient memory usage and garbage collection
- **Monitoring:** Built-in performance metrics and health checks

---

## �💻 Terminal Command Simulator API

Create realistic terminal interfaces with animated command sequences, intelligent command simulation, and multiple stunning themes. Features GitHub dark/light mode support, modern visual effects, and enhanced command output simulation for showcasing development workflows.

### Main Endpoint
```http
GET /api/terminal
```

### Theme-Specific Endpoints
```http
GET /api/terminal/modern        # Clean macOS-style terminal (default)
GET /api/terminal/matrix        # Matrix-inspired green terminal
GET /api/terminal/cyberpunk     # Futuristic neon terminal
GET /api/terminal/retro         # Vintage CRT monitor style
GET /api/terminal/glass         # Modern glassmorphism effect
GET /api/terminal/neon          # Cyberpunk neon glow terminal
GET /api/terminal/minimal       # Clean minimal light theme
GET /api/terminal/github-dark   # GitHub dark mode compatible
GET /api/terminal/github-light  # GitHub light mode compatible
```

### Additional Endpoints
```http
GET /api/terminal/themes        # Get available themes with descriptions
GET /api/terminal/examples      # Get example command sets by category
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `commands` | array/string | `["npm install", "npm run dev", "echo \"Hello World\""]` | Commands to execute (JSON array or comma-separated) |
| `theme` | string | `modern` | Terminal theme (see available themes below) |
| `speed` | number | `50` | Typing speed in milliseconds per character |
| `cursor` | boolean | `true` | Show animated cursor |
| `prompt` | string | `"$ "` | Command prompt string |
| `width` | number | `800` | Terminal width in pixels |
| `height` | number | `400` | Terminal height in pixels |
| `fontSize` | number | `14` | Font size in pixels |
| `showHeader` | boolean | `true` | Show terminal header with window controls |
| `title` | string | `"Terminal"` | Terminal window title |
| `githubMode` | boolean | `false` | Enable GitHub light/dark mode compatibility |
| `commandType` | string | `auto` | Command simulation type (auto, package-manager, git, docker, system, testing, development, deployment) |

### Available Themes

#### 🖥️ Modern Themes
- **`modern`** *(default)* - Clean, professional terminal with macOS-style window controls and subtle shadows
  - **Features:** Window controls, catppuccin-inspired colors, modern typography, subtle shadows
  - **Colors:** Dark gray (#1e1e2e) background with light text (#cdd6f4)
  - **Font:** SF Mono, Monaco, system monospace

- **`glass`** - Modern glassmorphism effect with transparency and blur
  - **Features:** Glass effect, backdrop blur, transparency, modern styling
  - **Colors:** Transparent background with glass-like overlay
  - **Font:** SF Mono with glass visual effects

- **`minimal`** - Clean minimal light theme for professional documentation
  - **Features:** Light background, minimal styling, clean typography
  - **Colors:** Light gray (#fafafa) background with dark text
  - **Font:** SF Mono, modern monospace

#### 🔋 Matrix-Inspired
- **`matrix`** - Matrix-inspired terminal with green glowing text
  - **Features:** Neon green text, glowing effects, bold monospace, classic hacker aesthetic
  - **Colors:** Black background with bright green text (#00ff41)
  - **Font:** Courier New monospace with glow effects

#### ⚡ Cyberpunk Themes
- **`cyberpunk`** - Futuristic cyberpunk terminal with neon pink/cyan colors
  - **Features:** Neon glow, glitch animations, animated borders, corner accents
  - **Colors:** Dark blue/black with pink and cyan highlights
  - **Font:** Courier New with intense glow effects

- **`neon`** - Intense neon glow terminal with vibrant colors
  - **Features:** Multi-color neon effects, intense glows, cyberpunk styling
  - **Colors:** Black background with multiple neon colors
  - **Font:** Courier New with rainbow neon effects

#### 📺 Retro
- **`retro`** - Vintage CRT monitor terminal with amber text
  - **Features:** Retro styling, amber text, classic terminal feel
  - **Colors:** Dark background with amber/yellow text (#eee085)
  - **Font:** Courier New monospace

#### 🐙 GitHub Themes
- **`github-dark`** - GitHub dark mode compatible terminal
  - **Features:** GitHub primer colors, dark theme, professional styling
  - **Colors:** GitHub dark (#0d1117) with GitHub text colors
  - **CSS Class:** `gh-dark-mode-only` for GitHub README compatibility

- **`github-light`** - GitHub light mode compatible terminal
  - **Features:** GitHub primer colors, light theme, clean professional styling
  - **Colors:** White background (#ffffff) with GitHub dark text
  - **CSS Class:** `gh-light-mode-only` for GitHub README compatibility

### Enhanced Command Simulation

The terminal now features **intelligent command simulation** with realistic outputs for different command types:

#### 📦 Package Manager Commands
- **npm/yarn/pnpm install** - Shows package installation progress, warnings, and completion
- **npm run dev/build** - Simulates development server startup or build process
- **yarn commands** - Shows yarn-specific progress indicators and emojis

#### 🔧 Git Commands
- **git clone** - Shows realistic clone progress with object counting
- **git add/commit/push** - Displays commit hashes and change statistics
- **git status** - Shows branch status and modified files

#### 🐳 Docker Commands
- **docker build** - Shows multi-step build process with layer caching
- **docker run** - Displays container startup and port binding
- **docker ps** - Shows running container information

#### 🖥️ System Commands
- **ls/ls -la** - Shows realistic file listings with permissions
- **cat package.json** - Displays formatted JSON content
- **mkdir/touch/cd** - Silent success (realistic behavior)

#### 🧪 Testing Commands
- **npm test/jest** - Shows test suite execution with pass/fail status
- **cypress** - Displays browser test automation progress

#### 🚀 Deployment Commands
- **vercel deploy** - Shows deployment progress and live URLs
- **netlify deploy** - Displays build and deployment status
- **heroku** - Shows app creation and deployment

### Command Input Formats

#### JSON Array (Recommended)
```bash
?commands=["npm install", "npm run dev", "git status"]
```

#### Comma-Separated String
```bash
?commands=npm install,npm run dev,git status
```

#### Pipe-Separated String
```bash
?commands=npm install|npm run dev|git status
```

### Example URLs

```bash
# Modern terminal with realistic npm simulation
https://waveify.onrender.com/api/terminal?commands=["npm install", "npm run dev"]&theme=modern

# GitHub dark mode compatible terminal
https://waveify.onrender.com/api/terminal/github-dark?commands=["git clone https://github.com/user/repo.git", "cd repo", "npm install"]

# GitHub light mode compatible terminal
https://waveify.onrender.com/api/terminal/github-light?commands=["docker build -t myapp .", "docker run -p 3000:3000 myapp"]

# Glass effect terminal with deployment commands
https://waveify.onrender.com/api/terminal/glass?commands=["vercel deploy", "echo 'Deployment complete!'"]&width=900&height=350

# Matrix theme with system commands
https://waveify.onrender.com/api/terminal/matrix?commands=["ls -la", "cat package.json", "whoami"]&speed=30

# Cyberpunk terminal with Docker workflow
https://waveify.onrender.com/api/terminal/cyberpunk?commands=["docker build -t myapp .", "docker run -p 3000:3000 myapp"]&cursor=true

# Neon terminal with testing commands
https://waveify.onrender.com/api/terminal/neon?commands=["npm test", "jest --coverage", "cypress run"]&fontSize=16

# Minimal light theme for documentation
https://waveify.onrender.com/api/terminal/minimal?commands=["npm run build", "npm run deploy"]&showHeader=false

# Custom command type simulation
https://waveify.onrender.com/api/terminal?commands=["git add .", "git commit -m 'feat: new feature'", "git push origin main"]&commandType=git&speed=40

# Large terminal without header for README
https://waveify.onrender.com/api/terminal?commands=["yarn install", "yarn dev"]&width=1000&height=300&showHeader=false&theme=glass
```

### Enhanced Command Categories & Examples

#### 🚀 Full Development Workflow
```bash
["git clone https://github.com/user/awesome-project.git", "cd awesome-project", "npm install", "npm run dev", "git add .", "git commit -m 'feat: add new feature'", "git push origin main"]
```

#### 📦 Package Management
```bash
["npm install --save react next", "yarn add typescript @types/node", "pnpm install --frozen-lockfile"]
```

#### 🐳 Docker Development
```bash
["docker build -t myapp:latest .", "docker run -p 3000:3000 -p 5432:5432 myapp", "docker ps", "docker logs myapp"]
```

#### 🌐 Modern Deployment
```bash
["vercel build", "vercel deploy --prod", "netlify build", "netlify deploy --prod"]
```

#### 🧪 Testing & Quality Assurance
```bash
["npm test -- --coverage", "jest --watch --verbose", "cypress run --spec 'cypress/integration/**/*'", "npm run lint"]
```

#### 📁 System Administration
```bash
["ls -la /var/log", "cd /home/user/projects", "mkdir -p new-project/src", "touch README.md .gitignore", "cat package.json | jq '.dependencies'"]
```

#### 🔧 Build & Development Tools
```bash
["npm run build", "npm run analyze", "webpack --mode production", "vite build --mode production"]
```

### GitHub README Integration

#### Dark Mode Only (GitHub Dark Theme)
```markdown
![Terminal](https://waveify.onrender.com/api/terminal/github-dark?commands=["npm install", "npm start"]&width=600&height=200)
```

#### Light Mode Only (GitHub Light Theme)
```markdown
![Terminal](https://waveify.onrender.com/api/terminal/github-light?commands=["npm install", "npm start"]&width=600&height=200)
```

#### Adaptive (Works in both modes)
```markdown
![Terminal](https://waveify.onrender.com/api/terminal?commands=["npm install", "npm start"]&githubMode=true&width=600&height=200)
```

### Usage Examples

#### In Markdown
```markdown
![Development Workflow](https://waveify.onrender.com/api/terminal?commands=["npm install", "npm run dev"]&theme=modern&width=700)
![Docker Setup](https://waveify.onrender.com/api/terminal/cyberpunk?commands=["docker build -t app .", "docker run app"]&height=250)
![Git Workflow](https://waveify.onrender.com/api/terminal/github-dark?commands=["git add .", "git commit -m 'update'", "git push"]&width=800)
```

#### In HTML
```html
<img src="https://waveify.onrender.com/api/terminal?commands=['npm install', 'npm start']&theme=glass" alt="Terminal" style="border-radius: 8px;">
<img src="https://waveify.onrender.com/api/terminal/neon?commands=['ls', 'pwd']&fontSize=16" alt="Neon Terminal">
```

#### React/JSX
```jsx
<img 
  src="https://waveify.onrender.com/api/terminal?commands=['npm run build', 'vercel deploy']&theme=minimal" 
  alt="Build Process" 
  style={{ borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
/>
```

---

## ⏳ Enhanced Loading Animation API

Generate beautiful, performant loading indicators with professional-grade animations, accessibility compliance, and advanced visual effects.

### ✨ Professional Features
- **🎨 20+ Animation Types**: From basic dots to advanced liquid morphing
- **♿ Accessibility Compliant**: Reduced motion and high contrast support
- **⚡ Performance Optimized**: GPU-accelerated animations under 4KB
- **🎪 Visual Effects**: Glow effects, gradients, and smooth easing
- **📱 GitHub Optimized**: Perfect for README files and documentation

### Endpoint
```http
GET /api/loader
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | string | `dots` | Animation type (see comprehensive list below) |
| `color` | string | `blue` | Animation color (hex, rgb, or named colors) |
| `speed` | number | `1.5` | Animation speed in seconds (0.1-10) |
| `size` | number | `40` | Size in pixels (10-200) |
| `width` | number | `100` | SVG width in pixels (50-2000) |
| `height` | number | `40` | SVG height in pixels (20-1000) |
| `backgroundColor` | string | `transparent` | Background color |
| **Enhanced Options** | | | |
| `easing` | string | `easeInOut` | Animation easing (`linear`, `easeIn`, `easeOut`, `easeInOut`, `bounce`) |
| `glowEffect` | boolean | `false` | Enable glow effects for premium aesthetics |
| `shadowIntensity` | number | `0.3` | Shadow strength (0-1) |
| `theme` | string | `modern` | Visual theme (`modern`, `retro`, `neon`, `minimal`) |
| **Accessibility Options** | | | |
| `reducedMotion` | boolean | `false` | Force reduced motion for accessibility |
| `highContrast` | boolean | `false` | Enable high contrast mode |
| `respectSystemPreferences` | boolean | `true` | Auto-detect user accessibility preferences |
| `ariaLabel` | string | `auto` | Custom accessibility label |

### 🎨 Complete Loader Types

#### 🔵 Basic Loaders
- `dots` - Three animated dots with gradient effects
- `spinner` - Rotating circle loader with smooth transitions
- `bars` - Animated bars with easing
- `pulse` - Pulsing circle with glow effects
- `wave` - Animated wave with fluid motion

#### 🌟 Advanced Modern Loaders
- `gradient` - Gradient progress bar with shimmer
- `orbit` - Orbital animation with gradient trails
- `neon-pulse` - Neon glowing pulse effect
- `triangles` - Rotating triangular elements
- `ripple` - Ripple wave effect with multiple layers

#### 🚀 Professional New Loaders
- `skeleton` - Loading placeholders with shimmer animation
- `liquid` - Morphing liquid animation with filter effects
- `dna-helix` - Rotating DNA double helix with base pairs
- `matrix-rain` - Falling matrix characters with glow
- `glassmorphism` - Glass effect spinner with blur
- `particle-system` - Dynamic particle effects
- `typewriter` - Text typing animation effect
- `heart-beat` - Heart pulse animation
- `breathing` - Breathing circle animation

#### 📝 Text-Based Loaders (Perfect for GitHub)
- `coming-soon` - "COMING SOON" with gradient animation
- `building` - "🔨 Building..." with progress bar
- `work-in-progress` - "🚧 WORK IN PROGRESS 🚧"
- `loading-text` - "Loading..." with animated dots

### 🎨 Enhanced Color System

#### Basic Colors
- `blue`, `green`, `red`, `orange`, `yellow`, `purple`, `pink`, `cyan`, `gray`, `black`, `white`

#### Semantic Colors
- `success`, `error`, `warning`, `info`

#### Brand Colors
- `github`, `twitter`, `linkedin`

#### Theme Colors
- `neon`, `cyberpunk`, `retro`

#### Custom Colors
- Any hex color code (`#667eea`)
- RGB values (`rgb(102, 126, 234)`)

### 🎪 Visual Themes

#### Modern Theme (`theme=modern`)
- Clean gradients and smooth animations
- Professional color palette
- Optimized for business applications

#### Retro Theme (`theme=retro`)
- Vintage aesthetics with warm colors
- Classic animation styles
- Perfect for retro projects

#### Neon Theme (`theme=neon`)
- Bright, glowing effects
- Cyberpunk aesthetics
- High-energy visual appeal

#### Minimal Theme (`theme=minimal`)
- Clean, simple designs
- Reduced visual complexity
- Perfect for documentation

### 🚀 Example URLs

#### 🔵 Basic Loaders
```bash
# Enhanced dots with glow effect
https://waveify.onrender.com/api/loader?type=dots&color=blue&speed=1.5&glowEffect=true

# Professional spinner with custom theme
https://waveify.onrender.com/api/loader?type=spinner&color=green&speed=2&size=50&theme=modern

# Bars with custom easing
https://waveify.onrender.com/api/loader?type=bars&color=%23ff6b6b&speed=1.2&easing=bounce

# Pulse with shadow effects
https://waveify.onrender.com/api/loader?type=pulse&color=purple&speed=2&size=60&shadowIntensity=0.5

# Wave with custom dimensions
https://waveify.onrender.com/api/loader?type=wave&color=cyan&speed=1.8&width=120&height=50
```

#### 🌟 Advanced Modern Loaders
```bash
# Gradient with shimmer effect
https://waveify.onrender.com/api/loader?type=gradient&color=%23667eea&width=200&height=8&glowEffect=true

# Orbital with neon theme
https://waveify.onrender.com/api/loader?type=orbit&color=%234facfe&speed=2&theme=neon

# Neon pulse with custom glow
https://waveify.onrender.com/api/loader?type=neon-pulse&color=%2300ffff&speed=1.5&glowEffect=true&shadowIntensity=0.8

# Triangles with retro theme
https://waveify.onrender.com/api/loader?type=triangles&color=%23ff9a9e&speed=2&theme=retro

# Ripple with multiple layers
https://waveify.onrender.com/api/loader?type=ripple&color=%23764ba2&speed=2.5&size=80
```

#### 🚀 Professional New Loaders
```bash
# Skeleton loading placeholder
https://waveify.onrender.com/api/loader?type=skeleton&width=250&height=80&color=%23e5e7eb

# Liquid morphing animation
https://waveify.onrender.com/api/loader?type=liquid&color=%23667eea&size=60&glowEffect=true&speed=2

# DNA helix for scientific projects
https://waveify.onrender.com/api/loader?type=dna-helix&color=%2300ff00&size=50&speed=3

# Matrix rain effect
https://waveify.onrender.com/api/loader?type=matrix-rain&color=%2300ff00&width=150&height=100&speed=1.5

# Glassmorphism spinner
https://waveify.onrender.com/api/loader?type=glassmorphism&color=%23ffffff&size=50&speed=2

# Particle system animation
https://waveify.onrender.com/api/loader?type=particle-system&color=%23ff6b6b&width=100&height=100&speed=1.8

# Heart beat animation
https://waveify.onrender.com/api/loader?type=heart-beat&color=%23ff1744&size=40&speed=1.2

# Breathing circle effect
https://waveify.onrender.com/api/loader?type=breathing&color=%234fc3f7&size=50&speed=2.5
```

#### 📝 Text-Based Loaders (Great for GitHub READMEs)
```bash
# Coming soon with gradient
https://waveify.onrender.com/api/loader?type=coming-soon&color=%23667eea

# Building status with progress
https://waveify.onrender.com/api/loader?type=building&color=%23f59e0b&width=200

# Work in progress banner
https://waveify.onrender.com/api/loader?type=work-in-progress&color=%23ef4444

# Loading text with custom color
https://waveify.onrender.com/api/loader?type=loading-text&color=%23007CF0&speed=1.8
```

#### ♿ Accessibility-Enhanced Examples
```bash
# High contrast for accessibility
https://waveify.onrender.com/api/loader?type=dots&highContrast=true&ariaLabel=Processing%20request

# Reduced motion for sensitive users
https://waveify.onrender.com/api/loader?type=pulse&reducedMotion=true&color=%23007CF0

# System preferences aware
https://waveify.onrender.com/api/loader?type=spinner&respectSystemPreferences=true&glowEffect=true
```

### 🎨 Advanced Configuration Examples

#### Professional Business Use
```bash
# Corporate spinner with subtle glow
https://waveify.onrender.com/api/loader?type=spinner&color=%23007CF0&theme=modern&glowEffect=true&shadowIntensity=0.2&size=45

# Executive dashboard loader
https://waveify.onrender.com/api/loader?type=gradient&color=%23667eea&width=300&height=6&easing=easeInOut&glowEffect=true
```

#### Creative Projects
```bash
# Artistic liquid animation
https://waveify.onrender.com/api/loader?type=liquid&color=%23ff6b6b&size=80&speed=1.5&theme=neon&glowEffect=true

# Cyberpunk matrix effect
https://waveify.onrender.com/api/loader?type=matrix-rain&color=%2300ff00&width=200&height=120&theme=cyberpunk&speed=2
```

#### GitHub Profile Enhancement
```bash
# Profile banner loader
https://waveify.onrender.com/api/loader?type=skeleton&width=400&height=60&color=%23e5e7eb&speed=1.2

# Repository status indicator
https://waveify.onrender.com/api/loader?type=building&color=%2322c55e&width=250&height=40&glowEffect=true
```

### GitHub README Examples

```markdown
<!-- Coming Soon Section -->
![Coming Soon](https://waveify.onrender.com/api/loader?type=coming-soon)

<!-- Work in Progress -->
![Work in Progress](https://waveify.onrender.com/api/loader?type=work-in-progress)

<!-- Building Status -->
![Building](https://waveify.onrender.com/api/loader?type=building)

<!-- Loading with custom color -->
![Loading](https://waveify.onrender.com/api/loader?type=loading-text&color=%23007CF0)

<!-- Modern gradient loader -->
![Gradient Loader](https://waveify.onrender.com/api/loader?type=gradient&color=%23667eea&width=300&height=6)

<!-- Neon pulse effect -->
![Neon Pulse](https://waveify.onrender.com/api/loader?type=neon-pulse&color=%2300ffff&size=30)

<!-- Orbital animation -->
![Orbit Loader](https://waveify.onrender.com/api/loader?type=orbit&color=%23ff6b6b&speed=1.8)
```

---

## ❤️ Health Check API

Monitor API status and health.

### Endpoint
```http
GET /api/health
```

### Response
```json
{
  "status": "OK",
  "timestamp": "2025-06-15T12:00:00.000Z",
  "uptime": 3600,
  "version": "1.0.0"
}
```

---

## 🎨 Usage Examples

### In GitHub README

```markdown
<!-- Wave animation -->
![Wave](https://waveify.onrender.com/api/wave/sine?color=%2300d4ff&height=100&amplitude=25)

<!-- Typing animation -->
![Typing SVG](https://waveify.onrender.com/api/typing/neon?text=Welcome+to+my+awesome+project&color=%2300ffff)

<!-- Loading animation -->
![Loading](https://waveify.onrender.com/api/loader?type=dots&color=blue)
```

### In HTML

```html
<!-- Wave background -->
<img src="https://waveify.onrender.com/api/wave/fluid?color=%23667eea&height=200&width=800" alt="Wave Background">

<!-- Typing header -->
<img src="https://waveify.onrender.com/api/typing/gradient?text=Hello+World&fontSize=24" alt="Typing Animation">

<!-- Terminal command showcase -->
<img src="https://waveify.onrender.com/api/terminal?commands=[\"npm install\", \"npm run dev\"]&theme=modern&width=600&height=200" alt="Modern Terminal">
<img src="https://waveify.onrender.com/api/terminal/matrix?commands=[\"echo 'Hello Matrix'\"]&width=400&height=150" alt="Matrix Terminal">
```

---

## 🎯 Quick Reference

### Common URL Patterns

#### Wave Animations
```bash
# Basic smooth wave
/api/wave?color=%23007CF0&height=150&width=1200&amplitude=20&frequency=2&speed=4

# Neon effect wave
/api/wave/neon?color=%2300ff99&height=120&width=800&amplitude=25&frequency=3

# Glitch wave with effects
/api/wave/glitch?color=%23ff3366&height=180&width=1000&amplitude=35&frequency=2.5
```

#### Typing Animations
```bash
# Classic typing
/api/typing?text=Hello%20World&fontSize=20&color=%23333333&speed=100

# Matrix style typing
/api/typing/matrix?text=Welcome%20to%20the%20Matrix&fontSize=18&speed=80

# Gradient typing effect
/api/typing/gradient?text=Beautiful%20Text&gradientColors=%23667eea,%23764ba2
```

#### Loading Animations
```bash
# Spinning loader
/api/loader/spinner?color=%23007CF0&size=40&thickness=3

# Bouncing dots
/api/loader/dots?color=%23ff6b6b&count=3&speed=1.2&size=8

# Wave loader
/api/loader/wave?color=%2327ae60&width=300&height=60&frequency=2
```

#### Terminal Simulations
```bash
# Modern macOS terminal
/api/terminal/modern?commands=npm%20install&width=600&height=200

# Matrix hacker terminal
/api/terminal/matrix?commands=ls%20-la;whoami&user=neo&host=matrix

# Cyberpunk neon terminal
/api/terminal/cyberpunk?commands=hack%20--target%20mainframe&title=CyberNet
```

#### GitHub Stats Cards
```bash
# Dark theme stats
/api/stats?username=octocat&theme=dark&metrics=commits,prs,stars,repos

# Light theme with animation
/api/stats/light?username=octocat&animation=countUp&width=800&height=400

# Auto theme with custom metrics
/api/stats/auto?username=octocat&metrics=stars,followers,repos&showAvatar=true
```

### URL Encoding Reference

| Character | Encoded | Usage |
|-----------|---------|--------|
| `#` | `%23` | Hex colors (#007CF0 → %23007CF0) |
| ` ` (space) | `%20` or `+` | Text with spaces |
| `&` | `%26` | Ampersand in text |
| `%` | `%25` | Percent symbol |
| `+` | `%2B` | Plus symbol |
| `=` | `%3D` | Equals symbol |
| `?` | `%3F` | Question mark |
| `/` | `%2F` | Forward slash |
| `:` | `%3A` | Colon |
| `;` | `%3B` | Semicolon |
| `<` | `%3C` | Less than |
| `>` | `%3E` | Greater than |
| `[` | `%5B` | Left bracket |
| `]` | `%5D` | Right bracket |
| `{` | `%7B` | Left brace |
| `}` | `%7D` | Right brace |
| `\|` | `%7C` | Pipe symbol |

### Best Practices

#### Performance Optimization
- Use appropriate dimensions (avoid oversized SVGs)
- Cache responses when possible (1-hour default)
- Use compressed parameters when available
- Consider using CDN for frequent requests

#### Design Guidelines
- Choose colors with sufficient contrast
- Test animations at different speeds
- Ensure readability across themes
- Optimize for GitHub's rendering engine

#### Common Pitfalls
- Always URL-encode special characters
- Test with different text lengths
- Verify color accessibility
- Check mobile responsiveness
- Validate SVG syntax in complex scenarios

---

## � Troubleshooting

### Common Issues & Solutions

#### Wave Animation Issues

**🚫 Problem**: Wave doesn't appear in GitHub README
```bash
# ❌ Wrong: Special characters not encoded
https://waveify.onrender.com/api/wave?color=#007CF0

# ✅ Correct: Properly URL encoded
https://waveify.onrender.com/api/wave?color=%23007CF0
```

**🚫 Problem**: Animation is too fast/slow
```bash
# ❌ Wrong: Extreme speed values
speed=0.1  # Too fast, causes performance issues
speed=50   # Too slow, appears static

# ✅ Correct: Optimal speed range
speed=3-6  # Recommended for smooth, readable animations
```

**🚫 Problem**: Wave amplitude too large for container
```bash
# ❌ Wrong: Amplitude larger than height
height=100&amplitude=150  # Wave gets clipped

# ✅ Correct: Amplitude proportional to height
height=150&amplitude=25   # Proper proportion (15-20% of height)
```

#### Color & Display Issues

**🚫 Problem**: Poor contrast with background
```bash
# Consider your README theme:
# Light theme: Use darker colors
color=%23333333, %23555555, %23007CF0

# Dark theme: Use lighter colors  
color=%23ffffff, %23f0f0f0, %2300ffff
```

**🚫 Problem**: Colors don't match brand
```bash
# Use your exact brand hex codes
# Example for popular frameworks:
# React: %2361dafb
# Vue: %234fc08d  
# Node.js: %23339933
# Python: %233776ab
```

#### Performance Issues

**🚫 Problem**: SVG takes too long to load
```bash
# ❌ Wrong: Oversized dimensions
width=4000&height=800

# ✅ Correct: GitHub-optimized dimensions
width=1200&height=150-200  # Standard README width
```

**🚫 Problem**: Animation stutters
```bash
# ❌ Wrong: Too many wave cycles
frequency=20  # Creates too many calculation points

# ✅ Correct: Optimal frequency range
frequency=1-4  # Smooth performance with good visual appeal
```

#### Mobile & Responsive Issues

**🚫 Problem**: Wave doesn't scale properly on mobile
```markdown
<!-- ❌ Wrong: Fixed dimensions only -->
![Wave](https://waveify.onrender.com/api/wave?width=1200&height=150)

<!-- ✅ Correct: Responsive approach -->
<picture>
  <source media="(max-width: 768px)" srcset="https://waveify.onrender.com/api/wave?width=800&height=120">
  <img src="https://waveify.onrender.com/api/wave?width=1200&height=150" alt="Wave">
</picture>
```

### HTTP Status Codes

| Code | Meaning | Solution |
|------|---------|----------|
| 200 | Success | ✅ Everything working correctly |
| 400 | Bad Request | Check parameter syntax and encoding |
| 429 | Rate Limited | Wait before making more requests |
| 500 | Server Error | Try again later or contact support |

### Parameter Validation

#### Color Validation
```bash
# ✅ Valid color formats
%23007CF0     # Standard hex
%23f00        # Short hex
%23FF0000     # Uppercase hex

# ❌ Invalid formats
blue          # Named colors not supported
rgb(0,0,255)  # RGB format not supported
007CF0        # Missing %23 encoding
```

#### Numeric Range Validation
```bash
# Width: 400-2000px (GitHub README optimized)
width=1200    # ✅ Recommended
width=100     # ❌ Too small, poor quality
width=5000    # ❌ Too large, slow loading

# Height: 50-500px
height=150    # ✅ Standard
height=25     # ❌ Too small
height=1000   # ❌ Too large

# Speed: 0.5-10 seconds
speed=4       # ✅ Good balance
speed=0.1     # ❌ Too fast
speed=30      # ❌ Too slow

# Amplitude: 5-100px
amplitude=25  # ✅ Proportional
amplitude=2   # ❌ Barely visible
amplitude=200 # ❌ May get clipped
```

### Browser Compatibility

#### SVG Support
- ✅ **Chrome**: Full support for all features
- ✅ **Firefox**: Full support for all features  
- ✅ **Safari**: Full support for all features
- ✅ **Edge**: Full support for all features
- ⚠️ **IE11**: Basic support (animations may be limited)

#### GitHub Rendering
- ✅ **Desktop**: Perfect rendering of all wave types
- ✅ **Mobile**: Optimized for GitHub mobile app
- ✅ **Email**: Static fallback for email notifications
- ✅ **RSS**: Compatible with feed readers

### Debug Tips

#### Test Your URLs
```bash
# 1. Test in browser first
https://waveify.onrender.com/api/wave?color=%23007CF0&height=150

# 2. Check the raw SVG output
curl "https://waveify.onrender.com/api/wave?color=%23007CF0"

# 3. Validate SVG syntax
# Copy output to: https://validator.w3.org/
```

#### Performance Testing
```bash
# Check response time
curl -w "@curl-format.txt" -o /dev/null "https://waveify.onrender.com/api/wave"

# Monitor network tab in browser DevTools
# Should see: 200 OK, Content-Type: image/svg+xml, ~2-5KB size
```

#### Common Encoding Issues
```bash
# ❌ Common mistakes
color=#007CF0           # Missing URL encoding
text=Hello World        # Spaces need encoding  
speed=4.5&color=blue    # Invalid color format

# ✅ Correct format
color=%23007CF0         # Properly encoded hex
text=Hello%20World      # Encoded spaces
speed=4.5&color=%23007CF0 # Valid parameters
```

### Getting Help

#### Quick Diagnostics
1. **Copy your exact URL** and test it directly in browser
2. **Check the browser console** for any error messages
3. **Verify parameter spelling** and value ranges
4. **Test with minimal parameters** first, then add complexity

#### Error Messages
```json
// Typical error response format
{
  "error": "Invalid color format",
  "message": "Color must be a valid hex code",
  "code": 400
}
```

#### Support Channels
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/aayushvaghela/Waveify/issues)
- 💬 **Questions**: [GitHub Discussions](https://github.com/aayushvaghela/Waveify/discussions)
- 📧 **Direct Contact**: Available through GitHub profile
- 📊 **Service Status**: [Health Check](https://waveify.onrender.com/health)

---

## �🔗 Related Resources

- **Main Website**: [https://waveify.onrender.com](https://waveify.onrender.com)
- **GitHub Repository**: [https://github.com/aayushvaghela/Waveify](https://github.com/aayushvaghela/Waveify)
- **Live Examples**: [https://waveify.onrender.com/examples](https://waveify.onrender.com/examples)
- **Status Page**: [https://waveify.onrender.com/health](https://waveify.onrender.com/health)

---

**Made with ❤️ by the Waveify Team**

