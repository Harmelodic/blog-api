FROM node:alpine
ENV DB_HOST host.docker.internal

# Copy Server files
COPY dist/server.js /server.js
COPY package.json /package.json

# Install production modules required by Server
RUN npm install --production

CMD node /server.js
