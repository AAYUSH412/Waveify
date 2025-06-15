# Contributing to Waveify 🌊

First off, thank you for considering contributing to Waveify! It's people like you that make Waveify such a great tool for the developer community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Issue and Pull Request Guidelines](#issue-and-pull-request-guidelines)
- [Community](#community)

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [aayush@waveify.com](mailto:aayush@waveify.com).

### Our Pledge

We are committed to making participation in this project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn
- Git
- Basic knowledge of JavaScript/TypeScript, React, and Express.js

### Quick Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Waveify.git
   cd Waveify
   ```

3. **Set up remotes**
   ```bash
   git remote add upstream https://github.com/aayushvaghela/Waveify.git
   ```

4. **Install dependencies**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   ```

5. **Start development servers**
   ```bash
   # Backend (in one terminal)
   cd backend
   npm run dev
   
   # Frontend (in another terminal)
   cd frontend
   npm run dev
   ```

## 🛠️ How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include screenshots or GIFs if helpful**
- **Include your environment details** (OS, Node.js version, browser, etc.)

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain the behavior you expected**
- **Explain why this enhancement would be useful**

### 🎨 Contributing Code

#### Types of Contributions

1. **New Wave Patterns** - Add new wave animation styles
2. **New Typing Effects** - Create new typing animation variations
3. **Badge Styles** - Design new badge styles and themes
4. **Loading Animations** - Add new loader types
5. **API Improvements** - Enhance existing API endpoints
6. **Frontend Enhancements** - Improve the web interface
7. **Documentation** - Improve documentation and examples
8. **Performance** - Optimize SVG generation and delivery
9. **Testing** - Add tests for existing or new features

## 🏗️ Development Setup

### Backend Setup

```bash
cd backend
npm install
npm run dev  # Starts server on http://localhost:4000
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev  # Starts Next.js on http://localhost:3000
```

### Environment Variables

Create a `.env` file in the backend directory:

```bash
NODE_ENV=development
PORT=4000
```

## 📁 Project Structure

```
Waveify/
├── backend/                 # Express.js API server
│   ├── generators/         # SVG generation logic
│   │   ├── WaveGenerator.js
│   │   ├── TypingGenerator.js
│   │   ├── BadgeGenerator.js
│   │   └── LoaderGenerator.js
│   ├── routes/            # API route handlers
│   │   ├── wave.js
│   │   ├── typing.js
│   │   ├── badge.js
│   │   └── loader.js
│   ├── utils/             # Utility functions
│   └── server.js          # Main server file
├── frontend/              # Next.js React frontend
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   └── public/           # Static assets
├── docs/                 # Documentation
└── deploy/              # Deployment configurations
```

## 📝 Coding Standards

### JavaScript/TypeScript Style

- Use ES6+ features
- Prefer `const` over `let`, avoid `var`
- Use descriptive variable names
- Add JSDoc comments for functions
- Follow existing code formatting

### API Design

- RESTful endpoints
- Consistent parameter naming
- Proper HTTP status codes
- Clear error messages
- Input validation

### SVG Generation

- Optimize for performance
- Use semantic naming for IDs and classes
- Support responsive designs
- Include accessibility attributes
- Minimize SVG file size

### Example Code Style

```javascript
/**
 * Generates a wave SVG with specified parameters
 * @param {Object} options - Wave configuration options
 * @param {string} options.color - Wave color (hex)
 * @param {number} options.amplitude - Wave amplitude
 * @returns {string} SVG string
 */
export function generateWave(options = {}) {
  const {
    color = '#007CF0',
    amplitude = 20,
    frequency = 2
  } = options;
  
  // Implementation here
  return svgString;
}
```

## 🔄 Submitting Changes

### Branch Naming

Use descriptive branch names:
- `feature/new-wave-pattern`
- `fix/cors-issue`
- `docs/api-examples`
- `refactor/badge-generator`

### Commit Messages

Follow conventional commits:
- `feat: add new neon wave pattern`
- `fix: resolve CORS issue for development`
- `docs: update API documentation`
- `refactor: improve badge generation performance`
- `test: add tests for typing animations`

### Pull Request Process

1. **Update your fork**
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write code
   - Add tests
   - Update documentation

4. **Test your changes**
   ```bash
   # Backend tests
   cd backend
   npm test
   
   # Frontend tests
   cd frontend
   npm test
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: your descriptive commit message"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to GitHub and create a PR
   - Fill out the PR template
   - Request review from maintainers

## 📋 Issue and Pull Request Guidelines

### Issue Guidelines

- **Search existing issues** before creating a new one
- **Use issue templates** when available
- **Provide clear reproduction steps** for bugs
- **Include environment information**
- **Be respectful** in discussions

### Pull Request Guidelines

- **Fill out the PR template** completely
- **Link related issues** using keywords (fixes #123)
- **Include screenshots** for UI changes
- **Write clear commit messages**
- **Keep PRs focused** on a single feature or fix
- **Respond to feedback** promptly and respectfully

### PR Checklist

- [ ] My code follows the project's coding standards
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings or errors
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## 🧪 Testing

### Backend Testing

```bash
cd backend
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

### Frontend Testing

```bash
cd frontend
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:e2e      # End-to-end tests
```

### Manual Testing

1. **Test API endpoints** using tools like Postman or curl
2. **Verify SVG output** in browsers and README files
3. **Check responsive behavior** on different screen sizes
4. **Test error handling** with invalid parameters

## 📚 Documentation

### API Documentation

- Update `/docs/API.md` for API changes
- Include example requests and responses
- Document all parameters and their types
- Add usage examples

### Code Documentation

- Add JSDoc comments for public functions
- Include inline comments for complex logic
- Update README.md for major changes
- Add examples for new features

## 🌟 Recognition

Contributors are recognized in several ways:

- Listed in the main README.md
- Mentioned in release notes
- GitHub contributor graph
- Special thanks in documentation

## 🆘 Getting Help

### Communication Channels

- **GitHub Issues** - For bug reports and feature requests
- **GitHub Discussions** - For questions and general discussion
- **Email** - [aayush@waveify.com](mailto:aayush@waveify.com) for security issues
- **Discord** - [Join our community](https://discord.gg/waveify) (coming soon)

### Development Questions

If you're stuck or need help:

1. Check existing documentation
2. Search closed issues and PRs
3. Ask in GitHub Discussions
4. Reach out to maintainers

## 🏅 Contributor Levels

### New Contributors
- Start with `good first issue` labels
- Focus on documentation improvements
- Submit small bug fixes

### Regular Contributors
- Add new features
- Review other PRs
- Help with issue triage
- Mentor new contributors

### Core Contributors
- Maintain project roadmap
- Make architectural decisions
- Release management
- Community leadership

## 📄 License

By contributing to Waveify, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

Thank you for taking the time to contribute to Waveify! Every contribution, no matter how small, helps make this project better for everyone.

---

**Happy Contributing! 🎉**

*Made with ❤️ by the Waveify community*