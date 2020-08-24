#base image
From node:alpine

# Add contact
LABEL maintainer="stanleyekene.ze@gmail.com"

#set working dir
WORKDIR /home/

#copies package.js to working dir
COPY package.json .

#install dependencies
RUN npm install

#copies remaining files
COPY . .

#entry command
CMD ["node", "index.js"]