 #use the offical node.js image 
 FROM node:18 AS build

# set the working directory in the container
 WORKDIR /app

 COPY package.json ./
 RUN npm install

 # copy the rest of the file
 COPY . .

 # Inject BACKEND_URL
 ARG BACKEND_URL
 ENV REACT_APP_API_URL=$BACKEND_URL

 # build the application
 # assuming you have a build script in your package.json
 RUN npm run build

# use the official nginx image to serve the built application
 FROM nginx:alpine
 # copy the built application from the build stage
 COPY --from=build /app/build /usr/share/nginx/html

# copy the nginx configuration file
 COPY nginx.conf /etc/nginx/conf.d/default.conf
 
 # expose port 3000
 EXPOSE 3000

