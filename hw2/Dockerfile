FROM node:13.8.0-alpine3.10
WORKDIR /usr/src/app
# Copy service files to docker
COPY ./service .
# Expose port
EXPOSE 1337

# Here we can have build stages.
# E.G. RUN npm install or etc.
# But I build service without any external packages

# Command
CMD [ "node", "index.js" ]
