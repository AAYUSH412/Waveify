# 🌊 Waveify API Documentation

![Waveify](https://waveify.onrender.com/api/wave?color=%23FFD43B&height=140&width=1200&speed=3&amplitude=22&frequency=3&waveType=square)

Welcome to the Waveify API! Generate beautiful, animated SVG components for your GitHub READMEs and web projects.

## 📋 Table of Contents

- [🌊 Wave Animation API](#-wave-animation-api)
- [⌨️ Typing Animation API](#️-typing-animation-api)
- [🏷️ Badge Generator API](#️-badge-generator-api)
- [⏳ Loader Animation API](#-loader-animation-api)
- [💻 Terminal Simulation API](#-terminal-simulation-api)
- [📊 GitHub Profile Stats API](#-github-profile-stats-api)

## Base URL
```
https://waveify.onrender.com/api
```

---

## 🌊 Wave Animation API

Generate beautiful animated wave patterns with various styles and effects.

### Available Endpoints

#### 1. Default Wave (Smooth/Curved)
```http
GET /api/wave
```

#### 2. Sine Wave
```http
GET /api/wave/sine
```

#### 3. Square Wave
```http
GET /api/wave/square
```

#### 4. Sawtooth Wave
```http
GET /api/wave/sawtooth
```

#### 5. Pulse Wave
```http
GET /api/wave/pulse
```

#### 6. Triangle Wave
```http
GET /api/wave/triangle
```

#### 7. Fluid Wave
```http
GET /api/wave/fluid
```

#### 8. Glitch Wave
```http
GET /api/wave/glitch
```

#### 9. Plasma Wave
```http
GET /api/wave/plasma
```

#### 10. Neon Wave
```http
GET /api/wave/neon
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `color` | string | `#007CF0` | Hex color code (URL encoded) |
| `height` | number | `150` | SVG height in pixels |
| `speed` | number | `4` | Animation speed in seconds |
| `width` | number | `1200` | SVG width in pixels |
| `amplitude` | number | `20` | Wave amplitude |
| `frequency` | number | `2` | Wave frequency/cycles |
| `pulseWidth` | number | `0.3` | Pulse width ratio (pulse waves only) |

### Example URLs

```bash
# Basic wave
https://waveify.onrender.com/api/wave?color=%23007CF0&height=150&speed=4&width=1200&amplitude=20

# Sine wave with custom colors
https://waveify.onrender.com/api/wave/sine?color=%23ff0000&height=200&speed=2&amplitude=30&frequency=3

# Glitch wave effect
https://waveify.onrender.com/api/wave/glitch?color=%23ff3366&height=150&speed=1&amplitude=40&frequency=3

# Neon wave
https://waveify.onrender.com/api/wave/neon?color=%2300ff99&height=180&speed=3&amplitude=22&frequency=4
```

---

## ⌨️ Typing Animation API

Create dynamic typing animations with various modern styles and effects.

### Available Endpoints

#### 1. Classic Typing
```http
GET /api/typing
GET /api/typing/classic
```

#### 2. Neon Typing
```http
GET /api/typing/neon
```

#### 3. Glitch Typing
```http
GET /api/typing/glitch
```

#### 4. Rainbow Typing
```http
GET /api/typing/rainbow
```

#### 5. Wave Typing
```http
GET /api/typing/wave
```

#### 6. Matrix Typing
```http
GET /api/typing/matrix
```

#### 7. Terminal Typing
```http
GET /api/typing/terminal
```

#### 8. Gradient Typing
```http
GET /api/typing/gradient
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | string | `"Welcome to my project"` | Text to animate |
| `speed` | number | `50` | Typing speed (ms per character) |
| `color` | string | `#000000` | Text color (hex) |
| `backgroundColor` | string | `transparent` | Background color |
| `fontSize` | number | `20` | Font size in pixels |
| `fontFamily` | string | `monospace` | Font family |
| `width` | number | `400` | SVG width in pixels |
| `height` | number | `60` | SVG height in pixels |
| `cursor` | boolean | `true` | Show cursor |
| `cursorColor` | string | `#000000` | Cursor color |
| `type` | string | `classic` | Animation type |
| `prompt` | string | `"$ "` | Terminal prompt (terminal type only) |
| `gradientColors` | string | `"#667eea,#764ba2"` | Comma-separated gradient colors |

### Example URLs

```bash
# Classic typing
https://waveify.onrender.com/api/typing?text=Hello+World&speed=100&color=%23333333

# Neon typing effect
https://waveify.onrender.com/api/typing/neon?text=CYBER+SECURITY&speed=80&color=%2300ffff

# Glitch typing
https://waveify.onrender.com/api/typing/glitch?text=SYSTEM+ERROR&speed=60&color=%23ff0040

# Rainbow typing
https://waveify.onrender.com/api/typing/rainbow?text=COLORFUL+TEXT&speed=70

# Matrix style
https://waveify.onrender.com/api/typing/matrix?text=Welcome+to+the+Matrix&speed=90

# Terminal style
https://waveify.onrender.com/api/typing/terminal?text=npm+install+awesome-project&prompt=user@dev:~$+

# Gradient typing
https://waveify.onrender.com/api/typing/gradient?text=Beautiful+Gradient&gradientColors=%23ff6b6b,%234ecdc4
```

---

## 🏷️ Badge Generator API

Create modern, unique custom badges with stunning visual effects and animations. Featuring 10+ distinct styles with rounded borders, shadows, gradients, and more.

### Main Endpoint
```http
GET /api/badge
```

### Additional Endpoints
```http
GET /api/badge/styles    # Get available badge styles
GET /api/badge/colors    # Get available color schemes
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `label` | string | `"Build"` | Left side label text |
| `message` | string | `"Passing"` | Right side message text |
| `color` | string | `green` | Badge color (message background) |
| `labelColor` | string | `#555` | Label background color |
| `style` | string | `modern` | Badge style (see available styles below) |
| `logo` | string | `null` | Logo name/URL (data URI or SVG) |
| `logoWidth` | number | `14` | Logo width in pixels |
| `animated` | boolean | `false` | Enable animations (style-dependent) |
| `borderRadius` | number | `6` | Corner radius in pixels |
| `fontSize` | number | `11` | Font size in pixels |
| `fontWeight` | string | `normal` | Font weight (normal, bold, 500, 600) |

### Available Badge Styles

#### 🎨 Modern Styles
- **`modern`** - Clean design with subtle shadows and gradients *(default)*
- **`gradient`** - Smooth gradient backgrounds with optional animation
- **`glass`** - Glassmorphism effect with transparency and blur
- **`shadow`** - Enhanced drop shadow for depth and dimension

#### ⚡ Effect Styles
- **`neon`** - Cyberpunk-style neon glow on dark background
- **`animated`** - Animated gradient with shimmer effects
- **`outline`** - Minimalist outline style with transparent background

#### 📐 Shape Styles
- **`pill`** - Fully rounded pill-shaped badges
- **`large`** - Larger size with enhanced readability
- **`classic`** - Traditional badge style with classic fonts

### Available Colors

#### Status Colors
`green` • `red` • `blue` • `yellow` • `orange` • `purple` • `pink` • `cyan` • `gray` • `black` • `white`

#### Semantic Colors  
`success` • `error` • `warning` • `info`

#### Brand Colors
`github` • `twitter` • `linkedin` • `youtube` • `discord`

#### Classic Colors
`brightgreen` • `lightgrey` • `important` • `critical` • `informational` • `inactive`

*You can also use any hex color code (e.g., `#FF5733`)*

### Example URLs

```bash
# Modern badge (default)
https://waveify.onrender.com/api/badge?label=Build&message=Passing&color=green&style=modern

# Gradient animated badge
https://waveify.onrender.com/api/badge?label=Status&message=Online&color=blue&style=gradient&animated=true

# Neon effect badge
https://waveify.onrender.com/api/badge?label=Cyberpunk&message=2077&color=neon&style=neon&animated=true

# Glass effect badge
https://waveify.onrender.com/api/badge?label=UI&message=Modern&color=purple&style=glass&borderRadius=12

# Pill-shaped badge
https://waveify.onrender.com/api/badge?label=Version&message=v3.0.0&color=success&style=pill

# Large badge with logo
https://waveify.onrender.com/api/badge?label=Node.js&message=v18.0.0&color=green&style=large&fontSize=14

# Outline style badge
https://waveify.onrender.com/api/badge?label=License&message=MIT&color=blue&style=outline

# Custom colors and styling
https://waveify.onrender.com/api/badge?label=Custom&message=Badge&color=%23FF6B6B&labelColor=%23333&style=shadow&borderRadius=8
```

### Usage Examples

#### In Markdown
```markdown
![Build Status](https://waveify.onrender.com/api/badge?label=Build&message=Passing&color=green&style=modern)
![Version](https://waveify.onrender.com/api/badge?label=Version&message=v2.1.0&color=blue&style=gradient)
![License](https://waveify.onrender.com/api/badge?label=License&message=MIT&color=success&style=pill)
```

#### In HTML
```html
<img src="https://waveify.onrender.com/api/badge?label=Status&message=Online&color=green&style=glass" alt="Status">
<img src="https://waveify.onrender.com/api/badge?label=API&message=Active&color=neon&style=neon&animated=true" alt="API Status">
```

#### React/JSX
```jsx
<img 
  src="https://waveify.onrender.com/api/badge?label=React&message=18.0.0&color=blue&style=modern" 
  alt="React Version" 
  style={{ borderRadius: '4px' }}
/>
```

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

Create beautiful, realistic terminal interfaces with command-line simulations. Perfect for showcasing installation commands, code examples, and adding a professional developer aesthetic to your documentation.

### Available Endpoints

#### 1. Default Terminal
```http
GET /api/terminal
```

#### 2. Modern Terminal (macOS Style)
```http
GET /api/terminal/modern
```

#### 3. Matrix Terminal (Green on Black)
```http
GET /api/terminal/matrix
```

#### 4. Cyberpunk Terminal (Neon Style)
```http
GET /api/terminal/cyberpunk
```

#### 5. Retro Terminal (CRT Style)
```http
GET /api/terminal/retro
```

#### 6. Ubuntu Terminal (Ubuntu Style)
```http
GET /api/terminal/ubuntu
```

### Additional Endpoints
```http
GET /api/terminal/themes         # Available terminal themes
GET /api/terminal/examples       # Example command sets
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `commands` | string/array | `"npm install"` | Commands to display (separated by ;) |
| `theme` | string | `modern` | Terminal theme (modern, matrix, cyberpunk, retro, ubuntu) |
| `width` | number | `800` | Terminal width in pixels |
| `height` | number | `400` | Terminal height in pixels |
| `prompt` | string | `"$ "` | Command prompt style |
| `user` | string | `"user"` | Username for prompt |
| `host` | string | `"computer"` | Hostname for prompt |
| `title` | string | `"Terminal"` | Terminal window title |
| `animated` | boolean | `true` | Enable typing animation |
| `speed` | number | `50` | Typing speed (ms per character) |
| `showOutput` | boolean | `true` | Show command output |
| `fontSize` | number | `14` | Font size in pixels |
| `lines` | number | `10` | Number of visible lines |

### Available Themes

#### 🖥️ Modern Theme (Default)
- **Style:** Clean macOS-style terminal
- **Colors:** White background with dark text
- **Features:** Window controls, modern typography
- **Best for:** Documentation, tutorials

#### 🔰 Matrix Theme
- **Style:** Classic green-on-black hacker aesthetic
- **Colors:** Bright green text on black background
- **Features:** Retro font, glow effects
- **Best for:** Cybersecurity projects, sci-fi themes

#### 🌆 Cyberpunk Theme
- **Style:** Futuristic neon terminal
- **Colors:** Cyan/magenta neon colors
- **Features:** Glitch effects, neon glow
- **Best for:** Modern tech projects, gaming

#### 📺 Retro Theme
- **Style:** Vintage CRT monitor look
- **Colors:** Amber or green phosphor display
- **Features:** Scanlines, CRT curvature effect
- **Best for:** Nostalgic projects, retro computing

#### 🐧 Ubuntu Theme
- **Style:** Authentic Ubuntu terminal
- **Colors:** Purple header with dark terminal
- **Features:** Ubuntu branding, system fonts
- **Best for:** Linux projects, open source

### Example URLs

```bash
# Basic terminal with installation command
https://waveify.onrender.com/api/terminal?commands=npm%20install%20waveify&theme=modern

# Matrix-style terminal with multiple commands
https://waveify.onrender.com/api/terminal/matrix?commands=ls%20-la;cat%20secret.txt;exit&user=neo&host=matrix

# Cyberpunk terminal with custom prompt
https://waveify.onrender.com/api/terminal/cyberpunk?commands=hack%20--target%20mainframe&prompt=%3E%20&title=CyberTerminal

# Retro terminal with vintage look
https://waveify.onrender.com/api/terminal/retro?commands=run%20program.exe&width=600&height=300&fontSize=12

# Ubuntu terminal for open source projects
https://waveify.onrender.com/api/terminal/ubuntu?commands=sudo%20apt%20install%20package&user=developer&host=ubuntu-dev
```

### Usage Examples

#### In Markdown
```markdown
<!-- Installation Commands -->
![Install](https://waveify.onrender.com/api/terminal?commands=npm%20install%20my-package&theme=modern)

<!-- Development Workflow -->
![Dev Workflow](https://waveify.onrender.com/api/terminal?commands=git%20clone%20repo;cd%20repo;npm%20install;npm%20start&theme=modern&height=200)

<!-- Hacker Aesthetic -->
![Matrix](https://waveify.onrender.com/api/terminal/matrix?commands=whoami;ls%20/&user=neo&host=matrix)
```

#### In HTML
```html
<img src="https://waveify.onrender.com/api/terminal?commands=docker%20run%20app&theme=ubuntu" alt="Docker Terminal">
<img src="https://waveify.onrender.com/api/terminal/cyberpunk?commands=initialize%20systems&title=Boot%20Sequence" alt="Cyberpunk Terminal">
```

#### React/JSX
```jsx
<img 
  src="https://waveify.onrender.com/api/terminal?commands=yarn%20dev&theme=modern&width=700" 
  alt="Development Terminal"
  style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
/>
```

### Command Formatting

#### Multiple Commands
```bash
# Separate commands with semicolons
commands=cd%20project;npm%20install;npm%20start

# With output simulation
commands=ls%20-la;echo%20"Files%20listed";pwd
```

#### Custom Prompts
```bash
# Custom user and host
user=developer&host=macbook-pro

# Custom prompt symbol
prompt=$%20

# Root prompt
prompt=#%20&user=root
```

#### Special Characters
```bash
# URLs encode special characters
commands=echo%20"Hello%20World!"  # echo "Hello World!"
commands=ls%20-la%20%7C%20grep%20.js  # ls -la | grep .js
```

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

## ⏳ Loading Animation API

Generate loading animations for "Work in Progress" sections and dynamic content.

### Endpoint
```http
GET /api/loader
```

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | string | `dots` | Animation type (see types below) |
| `color` | string | `blue` | Animation color |
| `speed` | number | `1.5` | Animation speed in seconds |
| `size` | number | `40` | Size in pixels |
| `width` | number | `100` | SVG width in pixels |
| `height` | number | `40` | SVG height in pixels |
| `backgroundColor` | string | `transparent` | Background color |

### Available Loader Types

#### Basic Loaders
- `dots` - Three animated dots
- `spinner` - Rotating circle loader
- `bars` - Animated bars
- `pulse` - Pulsing circle
- `wave` - Animated wave

#### Modern Gradient Loaders
- `gradient` - Gradient progress bar
- `orbit` - Orbital animation with gradient
- `neon-pulse` - Neon glowing pulse effect
- `triangles` - Rotating triangular elements
- `ripple` - Ripple wave effect

#### Text-Based Loaders (Perfect for GitHub)
- `coming-soon` - "COMING SOON" with gradient animation
- `building` - "🔨 Building..." with progress bar
- `work-in-progress` - "🚧 WORK IN PROGRESS 🚧"
- `loading-text` - "Loading..." with animated dots

### Available Colors
- `blue`, `green`, `red`, `orange`, `yellow`, `purple`, `pink`, `cyan`, `gray`, `black`
- Or any hex color code

### Example URLs

```bash
# Basic loaders
https://waveify.onrender.com/api/loader?type=dots&color=blue&speed=1.5
https://waveify.onrender.com/api/loader?type=spinner&color=green&speed=2&size=50
https://waveify.onrender.com/api/loader?type=bars&color=%23ff6b6b&speed=1.2
https://waveify.onrender.com/api/loader?type=pulse&color=purple&speed=2&size=60
https://waveify.onrender.com/api/loader?type=wave&color=cyan&speed=1.8&width=120

# Modern gradient loaders
https://waveify.onrender.com/api/loader?type=gradient&color=%23667eea&width=200&height=8
https://waveify.onrender.com/api/loader?type=orbit&color=%234facfe&speed=2
https://waveify.onrender.com/api/loader?type=neon-pulse&color=%2300ffff&speed=1.5
https://waveify.onrender.com/api/loader?type=triangles&color=%23ff9a9e&speed=2
https://waveify.onrender.com/api/loader?type=ripple&color=%23764ba2&speed=2.5

# Text-based loaders (Great for GitHub READMEs)
https://waveify.onrender.com/api/loader?type=coming-soon
https://waveify.onrender.com/api/loader?type=building
https://waveify.onrender.com/api/loader?type=work-in-progress
https://waveify.onrender.com/api/loader?type=loading-text&color=%23667eea
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

<!-- Modern badges showcase -->
![Build Status](https://waveify.onrender.com/api/badge?label=Build&message=Passing&color=green&style=modern)
![Version](https://waveify.onrender.com/api/badge?label=Version&message=v3.0.0&color=blue&style=gradient)
![License](https://waveify.onrender.com/api/badge?label=License&message=MIT&color=success&style=pill)
![Status](https://waveify.onrender.com/api/badge?label=Status&message=Online&color=neon&style=neon&animated=true)

<!-- Loading animation -->
![Loading](https://waveify.onrender.com/api/loader?type=dots&color=blue)
```

### In HTML

```html
<!-- Wave background -->
<img src="https://waveify.onrender.com/api/wave/fluid?color=%23667eea&height=200&width=800" alt="Wave Background">

<!-- Typing header -->
<img src="https://waveify.onrender.com/api/typing/gradient?text=Hello+World&fontSize=24" alt="Typing Animation">

<!-- Modern badge showcase -->
<img src="https://waveify.onrender.com/api/badge?label=Build&message=Passing&color=green&style=modern" alt="Build Status">
<img src="https://waveify.onrender.com/api/badge?label=API&message=Active&color=blue&style=glass" alt="API Status">
<img src="https://waveify.onrender.com/api/badge?label=Deploy&message=Success&color=success&style=shadow" alt="Deploy Status">
<img src="https://waveify.onrender.com/api/badge?label=Premium&message=Pro&color=purple&style=gradient&animated=true" alt="Premium Badge">

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

#### Badge Generation
```bash
# Modern status badge
/api/badge?label=Status&message=Online&color=green&style=modern

# Animated gradient badge
/api/badge?label=Version&message=v2.0&color=blue&style=gradient&animated=true

# Neon effect badge
/api/badge?label=Premium&message=Pro&color=purple&style=neon&borderRadius=8
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

## 🔗 Related Resources

- **Main Website**: [https://waveify.onrender.com](https://waveify.onrender.com)
- **GitHub Repository**: [https://github.com/aayushvaghela/Waveify](https://github.com/aayushvaghela/Waveify)
- **Live Examples**: [https://waveify.onrender.com/examples](https://waveify.onrender.com/examples)
- **Status Page**: [https://waveify.onrender.com/health](https://waveify.onrender.com/health)

---

**Made with ❤️ by the Waveify Team**

