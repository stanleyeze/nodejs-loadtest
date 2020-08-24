#base image
From node:alpine AS build

# Add contact
LABEL maintainer="stanleyekene.ze@gmail.com"

#set working dir
WORKDIR '/home'

#copies package.js to working dir
COPY ./package.json ./

#copies remaining files
COPY ./ ./

#install dependencies
RUN npm install

#build app
RUN npm run build

#add nginx to the client
FROM nginx
EXPOSE 3000
COPY --from=build /home/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /home/build /usr/share/nginx/html