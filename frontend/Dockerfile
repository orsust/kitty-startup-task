FROM node:16-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# Компилируем TypeScript в JavaScript
RUN npx tsc frontend.ts

# Устанавливаем jade (pug)
RUN npm install jade

CMD ["node", "frontend.js"]
