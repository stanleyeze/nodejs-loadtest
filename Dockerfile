#base image
From node:alpine AS LOAD_TESTER

# Add contact
LABEL maintainer="stanleyekene.ze@gmail.com"

#set working dir
WORKDIR /home/

#copies package.js to working dir
COPY package.json .

#install dependencies
RUN npm install

#copy other files to home directory
COPY . .

CMD ["node", "index.js"]