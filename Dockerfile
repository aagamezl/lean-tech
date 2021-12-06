FROM node:lts

# Create app directory
RUN mkdir /app
WORKDIR /app
ADD . /app

# Install app dependencies
COPY package.json package-lock.json /app/

# Run npm and install modules
RUN npm ci

# Expose application port
EXPOSE 3000

# Run start command
CMD ["npm", "run", "start"]
