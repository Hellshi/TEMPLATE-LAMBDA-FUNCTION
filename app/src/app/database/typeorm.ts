import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'

export default {
  type: 'mysql',
  url: process.env.databaseURL,
  logging: /* isLocalEnvironment */ false,
  synchronize: false,
  entities: process.env.isLocalEnvironment
    ? ['src/app/database/entities/*.ts']
    : ['.build/src/app/database/entities/*.js']
} as MysqlConnectionOptions
