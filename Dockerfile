# Angular Development Dockerfile

FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 4200
CMD [ "npm", "run", "docker-serve" ]