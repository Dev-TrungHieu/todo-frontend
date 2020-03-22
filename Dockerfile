FROM node:12.16.1-alpine

RUN mkdir -p /app
WORKDIR /app
ADD package.json .
RUN yarn install
ADD src ./src
ADD public ./public
RUN ls -ath
EXPOSE 3000
CMD ["yarn","start"]