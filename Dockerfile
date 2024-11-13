# Use the official Node.js image as a base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies with --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the container
COPY . .

# Build the React application for production
RUN npm run build

# Use a lightweight web server to serve the built files
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the port that Nginx is using
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
