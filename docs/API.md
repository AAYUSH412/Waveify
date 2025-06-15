# 🌊 Waveify API Documentation

Welcome to the Waveify API! Generate beautiful, animated SVG components for your GitHub READMEs and web projects.

## Base URL
```
http://localhost:4000/api
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
http://localhost:4000/api/wave?color=%23007CF0&height=150&speed=4&width=1200&amplitude=20

# Sine wave with custom colors
http://localhost:4000/api/wave/sine?color=%23ff0000&height=200&speed=2&amplitude=30&frequency=3

# Glitch wave effect
http://localhost:4000/api/wave/glitch?color=%23ff3366&height=150&speed=1&amplitude=40&frequency=3

# Neon wave
http://localhost:4000/api/wave/neon?color=%2300ff99&height=180&speed=3&amplitude=22&frequency=4
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
http://localhost:4000/api/typing?text=Hello+World&speed=100&color=%23333333

# Neon typing effect
http://localhost:4000/api/typing/neon?text=CYBER+SECURITY&speed=80&color=%2300ffff

# Glitch typing
http://localhost:4000/api/typing/glitch?text=SYSTEM+ERROR&speed=60&color=%23ff0040

# Rainbow typing
http://localhost:4000/api/typing/rainbow?text=COLORFUL+TEXT&speed=70

# Matrix style
http://localhost:4000/api/typing/matrix?text=Welcome+to+the+Matrix&speed=90

# Terminal style
http://localhost:4000/api/typing/terminal?text=npm+install+awesome-project&prompt=user@dev:~$+

# Gradient typing
http://localhost:4000/api/typing/gradient?text=Beautiful+Gradient&gradientColors=%23ff6b6b,%234ecdc4
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
http://localhost:4000/api/badge?label=Build&message=Passing&color=green&style=modern

# Gradient animated badge
http://localhost:4000/api/badge?label=Status&message=Online&color=blue&style=gradient&animated=true

# Neon effect badge
http://localhost:4000/api/badge?label=Cyberpunk&message=2077&color=neon&style=neon&animated=true

# Glass effect badge
http://localhost:4000/api/badge?label=UI&message=Modern&color=purple&style=glass&borderRadius=12

# Pill-shaped badge
http://localhost:4000/api/badge?label=Version&message=v3.0.0&color=success&style=pill

# Large badge with logo
http://localhost:4000/api/badge?label=Node.js&message=v18.0.0&color=green&style=large&fontSize=14

# Outline style badge
http://localhost:4000/api/badge?label=License&message=MIT&color=blue&style=outline

# Custom colors and styling
http://localhost:4000/api/badge?label=Custom&message=Badge&color=%23FF6B6B&labelColor=%23333&style=shadow&borderRadius=8
```

### Usage Examples

#### In Markdown
```markdown
![Build Status](http://localhost:4000/api/badge?label=Build&message=Passing&color=green&style=modern)
![Version](http://localhost:4000/api/badge?label=Version&message=v2.1.0&color=blue&style=gradient)
![License](http://localhost:4000/api/badge?label=License&message=MIT&color=success&style=pill)
```

#### In HTML
```html
<img src="http://localhost:4000/api/badge?label=Status&message=Online&color=green&style=glass" alt="Status">
<img src="http://localhost:4000/api/badge?label=API&message=Active&color=neon&style=neon&animated=true" alt="API Status">
```

#### React/JSX
```jsx
<img 
  src="http://localhost:4000/api/badge?label=React&message=18.0.0&color=blue&style=modern" 
  alt="React Version" 
  style={{ borderRadius: '4px' }}
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
http://localhost:4000/api/loader?type=dots&color=blue&speed=1.5
http://localhost:4000/api/loader?type=spinner&color=green&speed=2&size=50
http://localhost:4000/api/loader?type=bars&color=%23ff6b6b&speed=1.2
http://localhost:4000/api/loader?type=pulse&color=purple&speed=2&size=60
http://localhost:4000/api/loader?type=wave&color=cyan&speed=1.8&width=120

# Modern gradient loaders
http://localhost:4000/api/loader?type=gradient&color=%23667eea&width=200&height=8
http://localhost:4000/api/loader?type=orbit&color=%234facfe&speed=2
http://localhost:4000/api/loader?type=neon-pulse&color=%2300ffff&speed=1.5
http://localhost:4000/api/loader?type=triangles&color=%23ff9a9e&speed=2
http://localhost:4000/api/loader?type=ripple&color=%23764ba2&speed=2.5

# Text-based loaders (Great for GitHub READMEs)
http://localhost:4000/api/loader?type=coming-soon
http://localhost:4000/api/loader?type=building
http://localhost:4000/api/loader?type=work-in-progress
http://localhost:4000/api/loader?type=loading-text&color=%23667eea
```

### GitHub README Examples

```markdown
<!-- Coming Soon Section -->
![Coming Soon](http://localhost:4000/api/loader?type=coming-soon)

<!-- Work in Progress -->
![Work in Progress](http://localhost:4000/api/loader?type=work-in-progress)

<!-- Building Status -->
![Building](http://localhost:4000/api/loader?type=building)

<!-- Loading with custom color -->
![Loading](http://localhost:4000/api/loader?type=loading-text&color=%23007CF0)

<!-- Modern gradient loader -->
![Gradient Loader](http://localhost:4000/api/loader?type=gradient&color=%23667eea&width=300&height=6)

<!-- Neon pulse effect -->
![Neon Pulse](http://localhost:4000/api/loader?type=neon-pulse&color=%2300ffff&size=30)

<!-- Orbital animation -->
![Orbit Loader](http://localhost:4000/api/loader?type=orbit&color=%23ff6b6b&speed=1.8)
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
![Wave](http://localhost:4000/api/wave/sine?color=%2300d4ff&height=100&amplitude=25)

<!-- Typing animation -->
![Typing SVG](http://localhost:4000/api/typing/neon?text=Welcome+to+my+awesome+project&color=%2300ffff)

<!-- Modern badges showcase -->
![Build Status](http://localhost:4000/api/badge?label=Build&message=Passing&color=green&style=modern)
![Version](http://localhost:4000/api/badge?label=Version&message=v3.0.0&color=blue&style=gradient)
![License](http://localhost:4000/api/badge?label=License&message=MIT&color=success&style=pill)
![Status](http://localhost:4000/api/badge?label=Status&message=Online&color=neon&style=neon&animated=true)

<!-- Loading animation -->
![Loading](http://localhost:4000/api/loader?type=dots&color=blue)
```

### In HTML

```html
<!-- Wave background -->
<img src="http://localhost:4000/api/wave/fluid?color=%23667eea&height=200&width=800" alt="Wave Background">

<!-- Typing header -->
<img src="http://localhost:4000/api/typing/gradient?text=Hello+World&fontSize=24" alt="Typing Animation">

<!-- Modern badge showcase -->
<img src="http://localhost:4000/api/badge?label=Build&message=Passing&color=green&style=modern" alt="Build Status">
<img src="http://localhost:4000/api/badge?label=API&message=Active&color=blue&style=glass" alt="API Status">
<img src="http://localhost:4000/api/badge?label=Deploy&message=Success&color=success&style=shadow" alt="Deploy Status">
<img src="http://localhost:4000/api/badge?label=Premium&message=Pro&color=purple&style=gradient&animated=true" alt="Premium Badge">
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