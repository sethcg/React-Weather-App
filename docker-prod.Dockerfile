# syntax=docker/dockerfile:1
# check=skip=recommended_tag
# check=skip=SecretsUsedInArgOrEnv

# BASE IMAGE
FROM node:alpine3.22

# SET WORKING DIRECTORY
WORKDIR /app

# COPY "package.json" AND "package-lock.json"
COPY package*.json ./

# INSTALL DEPENDENCIES
RUN npm ci

# DISABLE NEXTJS TELEMETRY DATA
ENV NEXT_TELEMETRY_DISABLED=1

# COPY THE APPLICATION
COPY src ./src
COPY public ./public
COPY postcss.config.mjs .
COPY next.config.ts .
COPY tsconfig.json .

# ENVIRONMENT VARIABLES MUST BE PRESENT AT BUILD TIME
# https://github.com/vercel/next.js/discussions/14030
ARG NEXT_PUBLIC_OPEN_WEATHER_API_KEY
ENV NEXT_PUBLIC_OPEN_WEATHER_API_KEY=${NEXT_PUBLIC_OPEN_WEATHER_API_KEY}

# BUILD APPLICATION
RUN npm run build

# RUN APPLICATION
CMD ["npm", "run", "start"]