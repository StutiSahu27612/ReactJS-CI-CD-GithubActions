#As build given so that I can use the output in next stage
FROM node:16 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

#bundling the app so dist folder is creating , inside it index.html and bundle.js are created
RUN npm run build  

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output to Nginx's public directory
COPY --from=build /app/dist /usr/share/nginx/html


EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
