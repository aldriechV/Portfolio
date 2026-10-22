# Stage 1: Build the React website
FROM node:22-alpine AS build

# Set the working directory inside the image
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the rest of the website source code
COPY . .

# Build the production website
RUN npm run build

# Stage 2: Serve the website with Nginx
FROM nginx:alpine

# Copy the production build into Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Document the port Nginx listens on
EXPOSE 80
