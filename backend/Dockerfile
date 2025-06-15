# Use the official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install any needed packages
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Create a non-root user to run the application
RUN addgroup -g 1001 -S nodejs
RUN adduser -S waveify -u 1001

# Change ownership of the app directory
RUN chown -R waveify:nodejs /usr/src/app
USER waveify

# Make port 4000 available to the world outside this container
EXPOSE 4000

# Define environment variable
ENV NODE_ENV=production
ENV PORT=4000

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4000/api/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Run server.js when the container launches
CMD ["node", "server.js"]