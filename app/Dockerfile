FROM node:16

WORKDIR /src

COPY package.json yarn.lock /src/

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn serverless plugin install -n serverless-localstack

CMD npm run deploy:local