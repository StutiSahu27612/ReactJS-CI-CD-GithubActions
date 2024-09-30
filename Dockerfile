#As build given so that I can use the output in next stage
FROM node:16 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

#bundling the app so dist folder is creating , inside it index.html and bundle.js are created
RUN npm run build  



FROM node:16-alpine

WORKDIR /app

# Copying the build output from the first stage
COPY --from=build /app/dist /app/dist

# Installing a lightweight static server like serve
RUN npm install -g serve

EXPOSE 8080

# Command to serve the static files from the dist directory
CMD ["serve", "-s", "dist", "-l", "8080"]










####################Serving via Nginx############
# # Stage 2: Serve the application with Nginx
# FROM nginx:alpine

# # Copy the build output to Nginx's public directory
# COPY --from=build /app/dist /usr/share/nginx/html


# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
