FROM node:14.17.3-buster AS build

WORKDIR /code

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

FROM nginx:1.12-alpine
RUN rm /usr/share/nginx/html/*.html
COPY --from=build /code/build /usr/share/nginx/html/portal-servicos-frontend

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]