FROM node
WORKDIR /app
# add to client
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000

CMD ["npm", "start"]