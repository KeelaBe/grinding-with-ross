# NodeJS 23.8 on alpine 3.20
FROM node:23.8-alpine3.20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Astro project
RUN npm run astro build

# Output the build artifacts
CMD ["cp", "-r", "/app/dist", "/output"]