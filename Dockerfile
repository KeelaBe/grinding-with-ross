# NodeJS 23.8 on alpine 3.20
FROM node:23.8-alpine3.20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 4321 for Astro's default dev server
EXPOSE 4321

# Output the build artifacts
CMD ["npm", "run", "dev"]
# CMD ["cp", "-r", "/app/dist", "/output"]