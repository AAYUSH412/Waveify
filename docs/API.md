# 🌊 Waveify API Documentation

![Waveify](https://waveify.onrender.com/api/wave?color=%23FFD43B&height=140&width=1200&speed=3&amplitude=22&frequency=3&waveType=square)


Welcome to the Waveify API! Generate beautiful, animated SVG components for your GitHub READMEs and web projects.

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

## 💻 Terminal Command Simulator API

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

### Pro Tips

- **GitHub Compatibility**: Use `github-dark` or `github-light` themes for better integration with GitHub's theme switching
- **Realistic Simulation**: Let `commandType=auto` detect and simulate appropriate command outputs
- **Performance**: Smaller terminals load faster - consider reducing `width` and `height` for README usage
- **Readability**: Increase `fontSize` for better readability in documentation
- **Modern Styling**: Use `glass` or `minimal` themes for contemporary project documentation

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

## 🔧 Response Headers

All endpoints return the following headers:

```http
Content-Type: image/svg+xml
Cache-Control: public, max-age=3600
```

---

## 🚀 Color Reference

### URL Encoding for Colors
When using hex colors in URLs, make sure to URL encode the `#` symbol:

- `#ff0000` becomes `%23ff0000` (Red)
- `#00ff00` becomes `%2300ff00` (Green)
- `#0000ff` becomes `%230000ff` (Blue)
- `#007CF0` becomes `%23007CF0` (Blue)

### Predefined Colors
Many endpoints support predefined color names:
- `red`, `green`, `blue`, `yellow`, `orange`, `purple`, `pink`, `cyan`, `gray`, `black`, `white`

---

## 📝 Notes

1. **Performance**: All SVGs are cached for 1 hour to improve performance
2. **Limits**: Text length is limited to 200 characters for typing animations
3. **Browser Support**: SVG animations work in all modern browsers
4. **Mobile**: All animations are responsive and mobile-friendly

---

## 🐛 Error Handling

If an error occurs, the API returns:

```http
HTTP/1.1 500 Internal Server Error
Content-Type: text/plain

Error generating [component type]
```

Common error scenarios:
- Invalid color format
- Text too long (>200 characters)
- Invalid numeric parameters
- Missing required parameters

---

## 🤝 Support

If you encounter any issues or have questions:

1. Check the parameter formats above
2. Ensure proper URL encoding for special characters
3. Verify the endpoint exists and is spelled correctly
4. Check server logs for detailed error messages

---

**Made with ❤️ for the developer community**