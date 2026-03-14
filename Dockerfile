# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Pass at build time so Vite inlines it (e.g. docker compose build --build-arg VITE_MAINTANCE_MODE=true)
ARG VITE_MAINTANCE_MODE=false
ENV VITE_MAINTANCE_MODE=$VITE_MAINTANCE_MODE

COPY package.json package-lock.json* yarn.lock* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY . .
RUN npm run build

# Production stage: serve static build with Node
FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["npx", "--yes", "serve", "-s", "dist", "-l", "3000"]
