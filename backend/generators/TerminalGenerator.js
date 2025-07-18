// Enhanced Terminal Generator with GitHub light/dark mode support and realistic command simulation
export class TerminalGenerator {
  static generate(options = {}) {
    const {
      commands = ["npm install", "npm run dev", 'echo "Hello World"'],
      theme = "modern",
      speed = 50,
      cursor = true,
      prompt = "$ ",
      width = 800,
      height = 400,
      fontSize = 14,
      showHeader = true,
      title = "Terminal",
      githubMode = false,
      commandType = "auto",
    } = options;

    switch (theme) {
      case "matrix":
        return this.generateMatrix({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "cyberpunk":
        return this.generateCyberpunk({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "retro":
        return this.generateRetro({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "glass":
        return this.generateGlass({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "neon":
        return this.generateNeon({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "minimal":
        return this.generateMinimal({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });

      case "github-dark":
        return this.generateGithubDark({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode: true,
          commandType,
        });

      case "github-light":
        return this.generateGithubLight({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode: true,
          commandType,
        });

      case "modern":
      default:
        return this.generateModern({
          ...options,
          commands,
          theme,
          speed,
          cursor,
          prompt,
          width,
          height,
          fontSize,
          showHeader,
          title,
          githubMode,
          commandType,
        });
    }
  }

  // Enhanced command simulation with realistic outputs
  static simulateCommand(command, commandType = "auto") {
    const cmd = command.toLowerCase().trim();

    // Auto-detect command type if not specified
    if (commandType === "auto") {
      if (cmd.includes("npm") || cmd.includes("yarn") || cmd.includes("pnpm")) {
        commandType = "package-manager";
      } else if (cmd.includes("git")) {
        commandType = "git";
      } else if (cmd.includes("docker")) {
        commandType = "docker";
      } else if (
        cmd.includes("ls") ||
        cmd.includes("cd") ||
        cmd.includes("mkdir") ||
        cmd.includes("touch") ||
        cmd.includes("cat")
      ) {
        commandType = "system";
      } else if (
        cmd.includes("test") ||
        cmd.includes("jest") ||
        cmd.includes("cypress")
      ) {
        commandType = "testing";
      } else if (
        cmd.includes("build") ||
        cmd.includes("dev") ||
        cmd.includes("start")
      ) {
        commandType = "development";
      } else if (
        cmd.includes("deploy") ||
        cmd.includes("vercel") ||
        cmd.includes("netlify")
      ) {
        commandType = "deployment";
      } else {
        commandType = "general";
      }
    }

    switch (commandType) {
      case "package-manager":
        return this.simulatePackageManagerCommand(command);
      case "git":
        return this.simulateGitCommand(command);
      case "docker":
        return this.simulateDockerCommand(command);
      case "system":
        return this.simulateSystemCommand(command);
      case "testing":
        return this.simulateTestingCommand(command);
      case "development":
        return this.simulateDevelopmentCommand(command);
      case "deployment":
        return this.simulateDeploymentCommand(command);
      default:
        return this.simulateGeneralCommand(command);
    }
  }

  static simulatePackageManagerCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes("install")) {
      if (cmd.includes("npm")) {
        return [
          {
            text: "npm WARN deprecated package@1.0.0: Package deprecated",
            type: "warning",
            delay: 0.8,
          },
          {
            text: "added 847 packages, and audited 848 packages in 3s",
            type: "success",
            delay: 2.5,
          },
          {
            text: "✓ 142 packages are looking for funding",
            type: "info",
            delay: 3.0,
          },
          { text: "found 0 vulnerabilities", type: "success", delay: 3.2 },
        ];
      } else if (cmd.includes("yarn")) {
        return [
          { text: "yarn install v1.22.19", type: "info", delay: 0.3 },
          {
            text: "[1/4] 🔍  Resolving packages...",
            type: "output",
            delay: 0.8,
          },
          {
            text: "[2/4] 🚚  Fetching packages...",
            type: "output",
            delay: 1.5,
          },
          {
            text: "[3/4] 🔗  Linking dependencies...",
            type: "output",
            delay: 2.2,
          },
          {
            text: "[4/4] 🔨  Building fresh packages...",
            type: "output",
            delay: 2.8,
          },
          { text: "✨  Done in 3.42s.", type: "success", delay: 3.5 },
        ];
      }
    } else if (cmd.includes("run dev") || cmd.includes("dev")) {
      return [
        { text: "> project@0.1.0 dev", type: "output", delay: 0.3 },
        { text: "> next dev", type: "output", delay: 0.5 },
        { text: "   ▲ Next.js 14.0.0", type: "info", delay: 1.0 },
        {
          text: "   - Local:        http://localhost:3000",
          type: "success",
          delay: 1.5,
        },
        {
          text: "   - Network:      http://192.168.1.100:3000",
          type: "success",
          delay: 1.7,
        },
        { text: " ✓ Ready in 2.3s", type: "success", delay: 2.3 },
      ];
    } else if (cmd.includes("build")) {
      return [
        { text: "> project@0.1.0 build", type: "output", delay: 0.3 },
        { text: "> next build", type: "output", delay: 0.5 },
        { text: "   ▲ Next.js 14.0.0", type: "info", delay: 0.8 },
        {
          text: "   Creating an optimized production build...",
          type: "output",
          delay: 1.2,
        },
        { text: " ✓ Compiled successfully", type: "success", delay: 4.5 },
        { text: "   Size     First Load JS", type: "info", delay: 5.0 },
        {
          text: "   ○ /          1.2 kB   87.3 kB",
          type: "output",
          delay: 5.2,
        },
      ];
    }

    return [
      { text: "Command completed successfully", type: "success", delay: 0.5 },
    ];
  }

  static simulateGitCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes("clone")) {
      const repo = command.match(/git clone.*?([^\/]+)\.git/) || [
        "",
        "repository",
      ];
      return [
        { text: `Cloning into '${repo[1]}'...`, type: "output", delay: 0.3 },
        {
          text: "remote: Enumerating objects: 247, done.",
          type: "output",
          delay: 1.0,
        },
        {
          text: "remote: Counting objects: 100% (247/247), done.",
          type: "output",
          delay: 1.5,
        },
        {
          text: "remote: Compressing objects: 100% (156/156), done.",
          type: "output",
          delay: 2.0,
        },
        {
          text: "Receiving objects: 100% (247/247), 1.2 MiB | 2.3 MiB/s, done.",
          type: "success",
          delay: 3.0,
        },
        {
          text: "Resolving deltas: 100% (89/89), done.",
          type: "success",
          delay: 3.5,
        },
      ];
    } else if (cmd.includes("add")) {
      return [{ text: "", type: "success", delay: 0.2 }]; // Git add is silent on success
    } else if (cmd.includes("commit")) {
      const message = command.match(/-m\s+["']([^"']+)["']/) || [
        "",
        "Update files",
      ];
      return [
        {
          text: `[main ${this.generateCommitHash()}] ${message[1]}`,
          type: "success",
          delay: 0.5,
        },
        {
          text: " 3 files changed, 42 insertions(+), 8 deletions(-)",
          type: "output",
          delay: 0.8,
        },
      ];
    } else if (cmd.includes("push")) {
      return [
        { text: "Enumerating objects: 9, done.", type: "output", delay: 0.8 },
        {
          text: "Counting objects: 100% (9/9), done.",
          type: "output",
          delay: 1.2,
        },
        {
          text: "Delta compression using up to 8 threads",
          type: "output",
          delay: 1.5,
        },
        {
          text: "Compressing objects: 100% (5/5), done.",
          type: "output",
          delay: 1.8,
        },
        {
          text: "Writing objects: 100% (5/5), 1.23 KiB | 1.23 MiB/s, done.",
          type: "output",
          delay: 2.2,
        },
        {
          text: "Total 5 (delta 3), reused 0 (delta 0), pack-reused 0",
          type: "output",
          delay: 2.5,
        },
        { text: "To github.com:user/repo.git", type: "success", delay: 3.0 },
        {
          text: `   ${this.generateCommitHash()}..${this.generateCommitHash()}  main -> main`,
          type: "success",
          delay: 3.2,
        },
      ];
    } else if (cmd.includes("status")) {
      return [
        { text: "On branch main", type: "output", delay: 0.2 },
        {
          text: "Your branch is up to date with 'origin/main'.",
          type: "output",
          delay: 0.4,
        },
        { text: "", type: "output", delay: 0.5 },
        { text: "Changes not staged for commit:", type: "warning", delay: 0.7 },
        {
          text: '  (use "git add <file>..." to update what will be committed)',
          type: "info",
          delay: 0.9,
        },
        {
          text: "        modified:   src/components/App.js",
          type: "error",
          delay: 1.1,
        },
        { text: "        modified:   package.json", type: "error", delay: 1.3 },
      ];
    }

    return [{ text: "Git command executed", type: "success", delay: 0.3 }];
  }

  static simulateDockerCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes("build")) {
      return [
        {
          text: "Sending build context to Docker daemon  2.048kB",
          type: "output",
          delay: 0.3,
        },
        { text: "Step 1/8 : FROM node:18-alpine", type: "output", delay: 0.8 },
        { text: " ---> f21f31fdd31a", type: "output", delay: 1.2 },
        { text: "Step 2/8 : WORKDIR /app", type: "output", delay: 1.5 },
        { text: " ---> Using cache", type: "output", delay: 1.8 },
        { text: " ---> 8b9c0f0d8f9a", type: "output", delay: 2.0 },
        { text: 'Step 8/8 : CMD ["npm", "start"]', type: "output", delay: 4.5 },
        { text: " ---> Running in a1b2c3d4e5f6", type: "output", delay: 4.8 },
        { text: " ---> 9h8g7f6e5d4c", type: "output", delay: 5.2 },
        {
          text: "Successfully built 9h8g7f6e5d4c",
          type: "success",
          delay: 5.5,
        },
        {
          text: "Successfully tagged myapp:latest",
          type: "success",
          delay: 5.7,
        },
      ];
    } else if (cmd.includes("run")) {
      return [
        {
          text: "Unable to find image 'myapp:latest' locally",
          type: "warning",
          delay: 0.5,
        },
        {
          text: "latest: Pulling from library/myapp",
          type: "output",
          delay: 1.0,
        },
        { text: "Digest: sha256:a1b2c3...", type: "output", delay: 2.5 },
        {
          text: "Status: Downloaded newer image for myapp:latest",
          type: "success",
          delay: 3.0,
        },
        { text: "Server running on port 3000", type: "success", delay: 3.5 },
      ];
    } else if (cmd.includes("ps")) {
      return [
        {
          text: "CONTAINER ID   IMAGE     COMMAND         CREATED       STATUS",
          type: "output",
          delay: 0.3,
        },
        {
          text: 'a1b2c3d4e5f6   myapp     "npm start"     2 min ago     Up 2 minutes',
          type: "output",
          delay: 0.5,
        },
      ];
    }

    return [{ text: "Docker command executed", type: "success", delay: 0.3 }];
  }

  static simulateTestingCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes("jest") || cmd.includes("npm test")) {
      return [
        {
          text: "PASS  src/components/App.test.js",
          type: "success",
          delay: 0.8,
        },
        {
          text: "  ✓ renders learn react link (23ms)",
          type: "success",
          delay: 1.0,
        },
        {
          text: "  ✓ handles click events (15ms)",
          type: "success",
          delay: 1.2,
        },
        {
          text: "PASS  src/utils/helpers.test.js",
          type: "success",
          delay: 1.5,
        },
        {
          text: "  ✓ formats date correctly (8ms)",
          type: "success",
          delay: 1.7,
        },
        { text: "", type: "output", delay: 1.9 },
        { text: "Test Suites: 2 passed, 2 total", type: "success", delay: 2.2 },
        { text: "Tests:       3 passed, 3 total", type: "success", delay: 2.4 },
        { text: "Snapshots:   0 total", type: "output", delay: 2.6 },
        { text: "Time:        1.847s", type: "output", delay: 2.8 },
      ];
    } else if (cmd.includes("cypress")) {
      return [
        { text: "Opening Cypress...", type: "output", delay: 0.5 },
        {
          text: "Running:  integration/app.spec.js",
          type: "output",
          delay: 2.0,
        },
        { text: "  App Component", type: "output", delay: 2.5 },
        { text: "    ✓ displays welcome message", type: "success", delay: 3.0 },
        { text: "    ✓ navigates to about page", type: "success", delay: 3.8 },
        { text: "  2 passing (4.2s)", type: "success", delay: 4.5 },
      ];
    }

    return [
      { text: "Tests completed successfully", type: "success", delay: 1.0 },
    ];
  }

  static simulateDevelopmentCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes("dev") && !cmd.includes("npm")) {
      return [
        { text: "⚡ Vite dev server starting...", type: "output", delay: 0.5 },
        { text: "🎯 Port 5173 is available", type: "info", delay: 1.0 },
        { text: "📦 Building for development...", type: "output", delay: 1.5 },
        { text: "✅ Built in 847ms", type: "success", delay: 2.5 },
        {
          text: "🌐 Local:   http://localhost:5173/",
          type: "success",
          delay: 3.0,
        },
        {
          text: "📱 Network: http://192.168.1.100:5173/",
          type: "success",
          delay: 3.2,
        },
      ];
    } else if (cmd.includes("start")) {
      return [
        {
          text: "Starting the development server...",
          type: "output",
          delay: 0.5,
        },
        { text: "Compiled successfully!", type: "success", delay: 2.5 },
        {
          text: "You can now view your app in the browser.",
          type: "success",
          delay: 3.0,
        },
        {
          text: "  Local:            http://localhost:3000",
          type: "success",
          delay: 3.2,
        },
        {
          text: "  On Your Network:  http://192.168.1.100:3000",
          type: "success",
          delay: 3.4,
        },
      ];
    }

    return [
      { text: "Development server started", type: "success", delay: 1.0 },
    ];
  }

  static simulateDeploymentCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes("vercel")) {
      return [
        { text: "Vercel CLI 32.5.0", type: "info", delay: 0.3 },
        {
          text: "🔍  Inspect: https://vercel.com/user/project/abc123",
          type: "output",
          delay: 1.0,
        },
        {
          text: "✅  Production: https://project.vercel.app",
          type: "success",
          delay: 3.5,
        },
        {
          text: "📝  Deployed to production. Run `vercel --prod` to overwrite later.",
          type: "info",
          delay: 4.0,
        },
      ];
    } else if (cmd.includes("netlify")) {
      return [
        { text: "Deploy path: ./dist", type: "output", delay: 0.5 },
        { text: "Functions path: ./functions", type: "output", delay: 0.7 },
        { text: "Deploying to main site URL...", type: "output", delay: 1.0 },
        { text: "✔ Finished hashing 25 files", type: "success", delay: 2.0 },
        { text: "✔ CDN requesting 12 files", type: "success", delay: 2.5 },
        { text: "✔ Finished uploading 12 assets", type: "success", delay: 3.5 },
        { text: "✔ Deploy is live!", type: "success", delay: 4.0 },
        {
          text: "Website URL: https://amazing-project-abc123.netlify.app",
          type: "success",
          delay: 4.2,
        },
      ];
    } else if (cmd.includes("heroku")) {
      return [
        {
          text: "Creating app... done, ⬢ my-app-12345",
          type: "success",
          delay: 1.0,
        },
        {
          text: "https://my-app-12345.herokuapp.com/ | https://git.heroku.com/my-app-12345.git",
          type: "output",
          delay: 1.5,
        },
      ];
    }

    return [
      {
        text: "Deployment completed successfully",
        type: "success",
        delay: 1.5,
      },
    ];
  }

  static simulateSystemCommand(command) {
    const cmd = command.toLowerCase().trim();

    if (cmd.includes("ls")) {
      if (cmd.includes("-la") || cmd.includes("-l")) {
        return [
          { text: "total 64", type: "output", delay: 0.2 },
          {
            text: "drwxr-xr-x  12 user  staff   384 Jun 17 10:30 .",
            type: "output",
            delay: 0.4,
          },
          {
            text: "drwxr-xr-x   8 user  staff   256 Jun 16 14:20 ..",
            type: "output",
            delay: 0.6,
          },
          {
            text: "-rw-r--r--   1 user  staff   156 Jun 17 09:15 .gitignore",
            type: "output",
            delay: 0.8,
          },
          {
            text: "-rw-r--r--   1 user  staff  1024 Jun 17 10:30 package.json",
            type: "output",
            delay: 1.0,
          },
          {
            text: "-rw-r--r--   1 user  staff  2048 Jun 17 10:25 README.md",
            type: "output",
            delay: 1.2,
          },
          {
            text: "drwxr-xr-x   8 user  staff   256 Jun 17 09:45 src",
            type: "output",
            delay: 1.4,
          },
        ];
      } else {
        return [
          {
            text: ".gitignore    package.json    README.md    src",
            type: "output",
            delay: 0.3,
          },
        ];
      }
    } else if (cmd.includes("cat") && cmd.includes("package.json")) {
      return [
        { text: "{", type: "output", delay: 0.3 },
        { text: '  "name": "awesome-project",', type: "output", delay: 0.5 },
        { text: '  "version": "1.0.0",', type: "output", delay: 0.7 },
        {
          text: '  "description": "An awesome project",',
          type: "output",
          delay: 0.9,
        },
        { text: '  "scripts": {', type: "output", delay: 1.1 },
        { text: '    "start": "node server.js",', type: "output", delay: 1.3 },
        { text: '    "dev": "nodemon server.js"', type: "output", delay: 1.5 },
        { text: "  }", type: "output", delay: 1.7 },
        { text: "}", type: "output", delay: 1.9 },
      ];
    } else if (
      cmd.includes("mkdir") ||
      cmd.includes("touch") ||
      cmd.includes("cd")
    ) {
      // These commands are typically silent on success
      return [];
    } else if (cmd.includes("pwd")) {
      return [
        {
          text: "/home/user/projects/awesome-project",
          type: "output",
          delay: 0.2,
        },
      ];
    } else if (cmd.includes("whoami")) {
      return [{ text: "user", type: "output", delay: 0.2 }];
    } else if (cmd.includes("find")) {
      return [
        { text: "./src/components/App.js", type: "output", delay: 0.5 },
        { text: "./src/utils/helpers.js", type: "output", delay: 0.7 },
        { text: "./src/index.js", type: "output", delay: 0.9 },
      ];
    } else if (cmd.includes("grep")) {
      return [
        {
          text: "./src/components/App.js:15:// TODO: Add error handling",
          type: "output",
          delay: 0.5,
        },
        {
          text: "./src/utils/helpers.js:8:// TODO: Optimize performance",
          type: "output",
          delay: 0.7,
        },
      ];
    }

    return [
      { text: "Command executed successfully", type: "success", delay: 0.3 },
    ];
  }

  static simulateGeneralCommand(command) {
    const cmd = command.toLowerCase().trim();

    if (cmd.includes("echo")) {
      const message = command.match(/echo\s+["']?([^"']+)["']?/) || [
        "",
        "Hello World",
      ];
      return [{ text: message[1], type: "output", delay: 0.2 }];
    } else if (cmd.includes("clear") || cmd === "cls") {
      return [];
    } else if (cmd.includes("exit")) {
      return [{ text: "exit", type: "output", delay: 0.2 }];
    }

    return [
      { text: `${command}: command not found`, type: "error", delay: 0.3 },
    ];
  }

  static generateCommitHash() {
    const chars = "0123456789abcdef";
    let result = "";
    for (let i = 0; i < 7; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static renderCommandAnimations(commands, options) {
    const { speed, cursor, prompt, fontSize, showHeader } = options;
    let animations = "";
    let currentY = showHeader ? 70 : 30;
    let totalDuration = 0;

    commands.forEach((command, index) => {
      const commandOutput = this.simulateCommand(command, options.commandType);
      const fullCommand = prompt + command;

      // Create realistic character-by-character typing effect
      animations += `
  <text x="20" y="${currentY}" class="terminal-text">`;
      
      // Animate each character individually
      fullCommand.split('').forEach((char, charIndex) => {
        const charDelay = totalDuration + (charIndex * speed) / 1000;
        animations += `<tspan opacity="0">${this.escapeHtml(char)}<animate attributeName="opacity" values="0;1" dur="0.05s" begin="${charDelay}s" fill="freeze"/></tspan>`;
      });
      
      animations += `
  </text>`;

      currentY += fontSize + 6;
      const commandTypingDuration = (fullCommand.length * speed) / 1000;
      totalDuration += commandTypingDuration + 0.3;

      // Render command output with realistic delays
      commandOutput.forEach((output) => {
        if (output.text.trim() === "") {
          currentY += fontSize + 2;
          return;
        }

        const cssClass =
          output.type === "success"
            ? "terminal-success"
            : output.type === "error"
            ? "terminal-error"
            : output.type === "warning"
            ? "terminal-warning"
            : output.type === "info"
            ? "terminal-info"
            : "terminal-output";

        const outputStartTime = totalDuration + output.delay;
        animations += `
  <text x="20" y="${currentY}" class="${cssClass}" opacity="0">
    ${this.escapeHtml(output.text)}
    <animate attributeName="opacity" 
             values="0;1" 
             dur="0.2s" 
             begin="${outputStartTime}s" 
             fill="freeze"/>
  </text>`;

        currentY += fontSize + 4;
      });

      // Calculate total time for this command including all outputs
      if (commandOutput.length > 0) {
        const maxDelay = Math.max(...commandOutput.map((o) => o.delay));
        totalDuration += maxDelay + 0.5;
      } else {
        totalDuration += 0.8;
      }

      currentY += 8; // Space between commands
    });

    return { animations, currentY, totalDuration };
  }

  static escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Modern theme with enhanced simulation
  static generateModern(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      githubMode,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    const githubStyles = githubMode
      ? `
      <style>
        @media (prefers-color-scheme: dark) {
          .terminal-bg { fill: #0d1117; stroke: #30363d; }
          .terminal-header { fill: #161b22; }
          .terminal-text { fill: #f0f6fc; }
          .terminal-output { fill: #8b949e; }
          .terminal-success { fill: #7c3aed; }
          .terminal-title { fill: #f0f6fc; }
        }
        @media (prefers-color-scheme: light) {
          .terminal-bg { fill: #ffffff; stroke: #d0d7de; }
          .terminal-header { fill: #f6f8fa; }
          .terminal-text { fill: #24292f; }
          .terminal-output { fill: #656d76; }
          .terminal-success { fill: #0969da; }
          .terminal-title { fill: #24292f; }
        }
      </style>
    `
      : "";

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .terminal-bg {
        fill: #1e1e2e;
        stroke: #313244;
        stroke-width: 1;
      }
      .terminal-header {
        fill: #11111b;
      }
      .terminal-controls circle {
        r: 6;
      }
      .close { fill: #f38ba8; }
      .minimize { fill: #f9e2af; }
      .maximize { fill: #a6e3a1; }
      .terminal-title {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 12px;
        fill: #cdd6f4;
        font-weight: 500;
      }
      .terminal-text {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #cdd6f4;
        font-weight: 400;
      }
      .terminal-output {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #9399b2;
        font-weight: 400;
      }
      .terminal-success {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #a6e3a1;
        font-weight: 400;
      }
      .terminal-warning {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #f9e2af;
        font-weight: 400;
      }
      .terminal-error {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #f38ba8;
        font-weight: 400;
      }
      .terminal-info {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #89b4fa;
        font-weight: 400;
      }
      .cursor {
        fill: #cdd6f4;
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    </style>
    ${githubStyles}
    <linearGradient id="modernGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#313244;stop-opacity:0.1"/>
      <stop offset="100%" style="stop-color:#11111b;stop-opacity:0.1"/>
    </linearGradient>
    <filter id="modernShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Terminal background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="12" ry="12" class="terminal-bg" filter="url(#modernShadow)"/>
  
  <!-- Gradient overlay -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="12" ry="12" fill="url(#modernGradient)"/>
  
  ${
    showHeader
      ? `
  <!-- Terminal header -->
  <rect x="0" y="0" width="${width}" height="40" rx="12" ry="12" class="terminal-header"/>
  <rect x="0" y="28" width="${width}" height="12" class="terminal-header"/>
  
  <!-- Window controls -->
  <g class="terminal-controls">
    <circle cx="20" cy="20" class="close"/>
    <circle cx="44" cy="20" class="minimize"/>
    <circle cx="68" cy="20" class="maximize"/>
  </g>
  
  <!-- Terminal title -->
  <text x="${
    width / 2
  }" y="25" class="terminal-title" text-anchor="middle">${title}</text>
  `
      : ""
  }
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Animated cursor -->
  <text x="${
    20 + prompt.length * fontSize * 0.6
  }" y="${currentY}" class="cursor" style="animation-delay: ${
          totalDuration + 1
        }s">▋</text>
  `
      : ""
  }
</svg>`;
  }

  // GitHub Dark theme
  static generateGithubDark(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="gh-dark-mode-only">
  <defs>
    <style>
      .terminal-bg {
        fill: #0d1117;
        stroke: #30363d;
        stroke-width: 1;
      }
      .terminal-header {
        fill: #161b22;
      }
      .terminal-controls circle {
        r: 6;
      }
      .close { fill: #ff6b6b; }
      .minimize { fill: #ffd93d; }
      .maximize { fill: #6bcf7f; }
      .terminal-title {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 12px;
        fill: #f0f6fc;
        font-weight: 500;
      }
      .terminal-text {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #f0f6fc;
        font-weight: 400;
      }
      .terminal-output {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #8b949e;
        font-weight: 400;
      }
      .terminal-success {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #7c3aed;
        font-weight: 400;
      }
      .terminal-warning {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #d29922;
        font-weight: 400;
      }
      .terminal-error {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #f85149;
        font-weight: 400;
      }
      .terminal-info {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #58a6ff;
        font-weight: 400;
      }
      .cursor {
        fill: #f0f6fc;
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    </style>
    <filter id="githubShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#010409" flood-opacity="0.12"/>
    </filter>
  </defs>
  
  <!-- Terminal background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="6" ry="6" class="terminal-bg" filter="url(#githubShadow)"/>
  
  ${
    showHeader
      ? `
  <!-- Terminal header -->
  <rect x="0" y="0" width="${width}" height="40" rx="6" ry="6" class="terminal-header"/>
  <rect x="0" y="28" width="${width}" height="12" class="terminal-header"/>
  
  <!-- Window controls -->
  <g class="terminal-controls">
    <circle cx="20" cy="20" class="close"/>
    <circle cx="44" cy="20" class="minimize"/>
    <circle cx="68" cy="20" class="maximize"/>
  </g>
  
  <!-- Terminal title -->
  <text x="${
    width / 2
  }" y="25" class="terminal-title" text-anchor="middle">${title}</text>
  `
      : ""
  }
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Animated cursor -->
  <text x="${
    20 + prompt.length * fontSize * 0.6
  }" y="${currentY}" class="cursor" style="animation-delay: ${
          totalDuration + 1
        }s">▋</text>
  `
      : ""
  }
</svg>`;
  }

  // GitHub Light theme
  static generateGithubLight(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="gh-light-mode-only">
  <defs>
    <style>
      .terminal-bg {
        fill: #ffffff;
        stroke: #d0d7de;
        stroke-width: 1;
      }
      .terminal-header {
        fill: #f6f8fa;
      }
      .terminal-controls circle {
        r: 6;
      }
      .close { fill: #ff6b6b; }
      .minimize { fill: #ffd93d; }
      .maximize { fill: #6bcf7f; }
      .terminal-title {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 12px;
        fill: #24292f;
        font-weight: 500;
      }
      .terminal-text {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #24292f;
        font-weight: 400;
      }
      .terminal-output {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #656d76;
        font-weight: 400;
      }
      .terminal-success {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #0969da;
        font-weight: 400;
      }
      .terminal-warning {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #9a6700;
        font-weight: 400;
      }
      .terminal-error {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #cf222e;
        font-weight: 400;
      }
      .terminal-info {
        font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        font-size: ${fontSize}px;
        fill: #0969da;
        font-weight: 400;
      }
      .cursor {
        fill: #24292f;
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    </style>
    <filter id="githubLightShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#8c959f" flood-opacity="0.12"/>
    </filter>
  </defs>
  
  <!-- Terminal background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="6" ry="6" class="terminal-bg" filter="url(#githubLightShadow)"/>
  
  ${
    showHeader
      ? `
  <!-- Terminal header -->
  <rect x="0" y="0" width="${width}" height="40" rx="6" ry="6" class="terminal-header"/>
  <rect x="0" y="28" width="${width}" height="12" class="terminal-header"/>
  
  <!-- Window controls -->
  <g class="terminal-controls">
    <circle cx="20" cy="20" class="close"/>
    <circle cx="44" cy="20" class="minimize"/>
    <circle cx="68" cy="20" class="maximize"/>
  </g>
  
  <!-- Terminal title -->
  <text x="${
    width / 2
  }" y="25" class="terminal-title" text-anchor="middle">${title}</text>
  `
      : ""
  }
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Animated cursor -->
  <text x="${
    20 + prompt.length * fontSize * 0.6
  }" y="${currentY}" class="cursor" style="animation-delay: ${
          totalDuration + 1
        }s">▋</text>
  `
      : ""
  }
</svg>`;
  }

  // Glass theme - modern glassmorphism effect
  static generateGlass(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .glass-bg {
        fill: rgba(255, 255, 255, 0.1);
        stroke: rgba(255, 255, 255, 0.2);
        stroke-width: 1;
        backdrop-filter: blur(20px);
      }
      .glass-header {
        fill: rgba(255, 255, 255, 0.05);
      }
      .terminal-controls circle {
        r: 6;
        fill-opacity: 0.8;
      }
      .close { fill: #ff6b6b; }
      .minimize { fill: #ffd93d; }
      .maximize { fill: #6bcf7f; }
      .terminal-title {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 12px;
        fill: rgba(255, 255, 255, 0.9);
        font-weight: 500;
      }
      .terminal-text {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: rgba(255, 255, 255, 0.9);
        font-weight: 400;
      }
      .terminal-output {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: rgba(255, 255, 255, 0.7);
        font-weight: 400;
      }
      .terminal-success {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #6bcf7f;
        font-weight: 400;
      }
      .terminal-warning {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #ffd93d;
        font-weight: 400;
      }
      .terminal-error {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #ff6b6b;
        font-weight: 400;
      }
      .terminal-info {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #74c0fc;
        font-weight: 400;
      }
      .cursor {
        fill: rgba(255, 255, 255, 0.9);
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    </style>
    <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:rgba(255,255,255,0.1);stop-opacity:1"/>
      <stop offset="100%" style="stop-color:rgba(255,255,255,0.05);stop-opacity:1"/>
    </linearGradient>
    <filter id="glassBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background gradient -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"/>
  
  <!-- Glass terminal background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="16" ry="16" class="glass-bg" filter="url(#glassBlur)"/>
  
  <!-- Glass gradient overlay -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="16" ry="16" fill="url(#glassGradient)"/>
  
  ${
    showHeader
      ? `
  <!-- Glass header -->
  <rect x="0" y="0" width="${width}" height="40" rx="16" ry="16" class="glass-header"/>
  <rect x="0" y="28" width="${width}" height="12" class="glass-header"/>
  
  <!-- Window controls -->
  <g class="terminal-controls">
    <circle cx="20" cy="20" class="close"/>
    <circle cx="44" cy="20" class="minimize"/>
    <circle cx="68" cy="20" class="maximize"/>
  </g>
  
  <!-- Terminal title -->
  <text x="${
    width / 2
  }" y="25" class="terminal-title" text-anchor="middle">${title}</text>
  `
      : ""
  }
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Animated cursor -->
  <text x="${
    20 + prompt.length * fontSize * 0.6
  }" y="${currentY}" class="cursor" style="animation-delay: ${
          totalDuration + 1
        }s">▋</text>
  `
      : ""
  }
</svg>`;
  }

  // Keep the original themes with enhanced command simulation
  static generateMatrix(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .matrix-bg {
        fill: #000000;
        stroke: #00ff41;
        stroke-width: 1;
      }
      .terminal-text, .terminal-output, .terminal-success, .terminal-warning, .terminal-error, .terminal-info {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #00ff41;
        font-weight: bold;
        text-shadow: 0 0 10px #00ff41;
      }
      .matrix-cursor {
        fill: #00ff41;
        animation: matrixBlink 0.8s infinite;
      }
      @keyframes matrixBlink {
        0%, 50% { opacity: 1; fill: #00ff41; }
        51%, 100% { opacity: 0.3; fill: #008f11; }
      }
    </style>
    <filter id="matrixGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Matrix background -->
  <rect x="0" y="0" width="${width}" height="${height}" class="matrix-bg" filter="url(#matrixGlow)"/>
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Matrix cursor -->
  <text x="20" y="${currentY}" class="matrix-cursor">█</text>
  `
      : ""
  }
</svg>`;
  }

  static generateCyberpunk(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .cyber-bg {
        fill: #0a0a0f;
        stroke: #ff0080;
        stroke-width: 2;
      }
      .terminal-text {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #00ffff;
        font-weight: bold;
        text-shadow: 0 0 5px #00ffff, 0 0 10px #ff0080;
      }
      .terminal-output {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #00ffff;
        font-weight: bold;
        text-shadow: 0 0 5px #00ffff;
        opacity: 0.8;
      }
      .terminal-success {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #00ff80;
        font-weight: bold;
        text-shadow: 0 0 5px #00ff80;
      }
      .terminal-warning {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #ffff00;
        font-weight: bold;
        text-shadow: 0 0 5px #ffff00;
      }
      .terminal-error {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #ff0080;
        font-weight: bold;
        text-shadow: 0 0 5px #ff0080;
      }
      .terminal-info {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #8080ff;
        font-weight: bold;
        text-shadow: 0 0 5px #8080ff;
      }
      .cyber-cursor {
        fill: #ff0080;
        animation: cyberBlink 0.6s infinite;
      }
      @keyframes cyberBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    </style>
    <filter id="cyberGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Cyberpunk background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="8" ry="8" class="cyber-bg" filter="url(#cyberGlow)"/>
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Cyberpunk cursor -->
  <text x="25" y="${currentY}" class="cyber-cursor">▮</text>
  `
      : ""
  }
</svg>`;
  }

  static generateRetro(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .retro-bg {
        fill: #1a1a2e;
      }
      .terminal-text, .terminal-output, .terminal-success, .terminal-warning, .terminal-error, .terminal-info {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #eee085;
        font-weight: normal;
      }
      .retro-cursor {
        fill: #eee085;
        animation: retroBlink 1.2s infinite;
      }
      @keyframes retroBlink {
        0%, 60% { opacity: 1; }
        61%, 100% { opacity: 0; }
      }
    </style>
  </defs>
  
  <!-- Retro background -->
  <rect x="0" y="0" width="${width}" height="${height}" class="retro-bg"/>
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Retro cursor -->
  <text x="25" y="${currentY}" class="retro-cursor">█</text>
  `
      : ""
  }
</svg>`;
  }

  // Add more modern themes...
  static generateNeon(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .neon-bg {
        fill: #0a0a0a;
        stroke: #ff00ff;
        stroke-width: 2;
        filter: url(#neonGlow);
      }
      .terminal-text {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #ff00ff;
        font-weight: bold;
        text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
      }
      .terminal-output {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #00ffff;
        font-weight: bold;
        text-shadow: 0 0 10px #00ffff;
      }
      .terminal-success {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #00ff00;
        font-weight: bold;
        text-shadow: 0 0 10px #00ff00;
      }
      .terminal-warning {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #ffff00;
        font-weight: bold;
        text-shadow: 0 0 10px #ffff00;
      }
      .terminal-error {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #ff0040;
        font-weight: bold;
        text-shadow: 0 0 10px #ff0040;
      }
      .terminal-info {
        font-family: 'Courier New', monospace;
        font-size: ${fontSize}px;
        fill: #8040ff;
        font-weight: bold;
        text-shadow: 0 0 10px #8040ff;
      }
      .neon-cursor {
        fill: #ff00ff;
        animation: neonBlink 0.8s infinite;
      }
      @keyframes neonBlink {
        0%, 50% { opacity: 1; text-shadow: 0 0 10px #ff00ff; }
        51%, 100% { opacity: 0.3; text-shadow: 0 0 5px #ff00ff; }
      }
    </style>
    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Neon background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="10" ry="10" class="neon-bg"/>
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Neon cursor -->
  <text x="20" y="${currentY}" class="neon-cursor">▋</text>
  `
      : ""
  }
</svg>`;
  }

  static generateMinimal(options) {
    const {
      commands,
      speed,
      cursor,
      prompt,
      width,
      height,
      fontSize,
      showHeader,
      title,
      commandType,
    } = options;

    const { animations, currentY, totalDuration } =
      this.renderCommandAnimations(commands, options);

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .minimal-bg {
        fill: #fafafa;
        stroke: #e0e0e0;
        stroke-width: 1;
      }
      .terminal-text {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #333333;
        font-weight: 400;
      }
      .terminal-output {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #666666;
        font-weight: 400;
      }
      .terminal-success {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #28a745;
        font-weight: 400;
      }
      .terminal-warning {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #ffc107;
        font-weight: 400;
      }
      .terminal-error {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #dc3545;
        font-weight: 400;
      }
      .terminal-info {
        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
        font-size: ${fontSize}px;
        fill: #17a2b8;
        font-weight: 400;
      }
      .minimal-cursor {
        fill: #333333;
        animation: minimalBlink 1s infinite;
      }
      @keyframes minimalBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    </style>
  </defs>
  
  <!-- Minimal background -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="4" ry="4" class="minimal-bg"/>
  
  <!-- Terminal content -->
  ${animations}
  
  ${
    cursor
      ? `
  <!-- Minimal cursor -->
  <text x="20" y="${currentY}" class="minimal-cursor">|</text>
  `
      : ""
  }
</svg>`;
  }

  static escapeXml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}
