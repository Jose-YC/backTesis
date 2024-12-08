# Dependencias
FROM node:20-alpine3.19 as deps

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install


# Builder - Construye la aplicación
FROM node:21-alpine3.19 as build

ARG PRODUCTBD
ENV POSTGRES_URL=$PRODUCTBD

# Imprimir el arg para ver el valor recibido
RUN echo "database_url ::: $PRODUCTBD";

WORKDIR /app

# Copiar de deps, los módulos de node
COPY --from=deps /app/node_modules ./node_modules

# Copiar todo el codigo fuente de la aplicación
COPY . .

RUN npx prisma migrate deploy
RUN npx prisma generate

# RUN npm run test
RUN npm run build

RUN npm ci -f --only=production && npm cache clean --force


# Crear la imagen final de Docker
FROM node:21-alpine3.19 as prod

WORKDIR /app


COPY --from=build /app/node_modules ./node_modules

# Copiar la carpeta de DIST
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma


ENV NODE_ENV=production

USER node


EXPOSE 3000

CMD [ "node", "dist/app.js" ]