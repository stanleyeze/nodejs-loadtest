From node:alpine
WORKDIR /home/
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "index.js"]