FROM node:16.9.1-slim
WORKDIR /wallhaven-api
COPY . .
RUN yarn install
EXPOSE 8360
CMD ["yarn"]
CMD ["yarn", "run", "start"]
