FROM node:16

WORKDIR /src

COPY package.json yarn.lock /src/

RUN yarn install --frozen-lockfile

COPY . .

CMD npm run local