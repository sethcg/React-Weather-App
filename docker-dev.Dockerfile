# syntax=docker/dockerfile:1
# check=skip=recommended_tag
# check=skip=SecretsUsedInArgOrEnv

# BASE IMAGE
FROM node:alpine3.22

# SET WORKING DIRECTORY
WORKDIR /app

# COPY "package.json" and "package-lock.json"
COPY package*.json ./

# INSTALL DEPENDENCIES
RUN npm ci

# COPY THE APPLICATION
COPY src ./src
COPY public ./public
COPY postcss.config.mjs .
COPY next.config.ts .
COPY tsconfig.json .

# RUN APPLICATION
CMD ["npm", "run", "dev"]