# Stage 1: Build Angular App
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve via NGINX
FROM nginx:alpine

COPY --from=builder /app/dist/frontend-web /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
