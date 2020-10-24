FROM node:15.0.1
ENV DB_HOST host.docker.internal

# Copy Server files
COPY src /src
COPY package.json /package.json
COPY package-lock.json /package-lock.json

# Install production modules required by Server
RUN npm install --production --loglevel verbose

CMD node src/index.js
