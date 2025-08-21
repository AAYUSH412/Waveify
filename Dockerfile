# 🚂 Simple Railway Dockerfile - Uses backend directory
# This approach copies backend directory and builds from there

FROM node:20-alpine

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Set working directory
WORKDIR /app

# Copy the entire backend directory
COPY backend/ .

# Create app user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S waveify -u 1001

# Install dependencies
RUN if [ -f package-lock.json ]; then \
      npm ci --only=production --no-audit --no-fund; \
    else \
      npm install --only=production --no-audit --no-fund; \
    fi && \
    npm cache clean --force

# Change ownership and switch to non-root user
RUN chown -R waveify:nodejs /app
USER waveify

# Railway automatically assigns PORT, but fallback to 4000
ENV NODE_ENV=production
ENV PORT=4000

# Expose port (Railway will use PORT env var)
EXPOSE $PORT

# Health check optimized for Railway
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:' + (process.env.PORT || 4000) + '/api/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })" || exit 1

# Use dumb-init for proper signal handling and start the application
CMD ["dumb-init", "node", "server.js"]

# Switch to non-root user
USER waveify

# Railway automatically assigns PORT, but fallback to 4000
ENV NODE_ENV=production
ENV PORT=4000

# Expose port (Railway will use PORT env var)
EXPOSE $PORT

# Health check optimized for Railway
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:' + (process.env.PORT || 4000) + '/api/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })" || exit 1

# Use dumb-init for proper signal handling in Railway
ENTRYPOINT ["dumb-init", "--"]

# Start the application
CMD ["node", "server.js"]
