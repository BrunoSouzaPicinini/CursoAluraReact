FROM node:14.8.0-buster AS build

WORKDIR /code

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

FROM nginx:1.12-alpine

COPY --from=build /code/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]