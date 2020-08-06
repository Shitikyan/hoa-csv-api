import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongoDb',
  connector: 'mongodb',
  url: process.env.MONGO_URL ?? '',
  host: process.env.MONGO_HOST ?? 'localhost',
  port: +(process.env.MONGO_PORT ?? 27017),
  user: process.env.MONGO_USER ?? '',
  password: process.env.MONGO_PASSWORD ?? '',
  database: 'hoa',
  useNewUrlParser: true,
};

@lifeCycleObserver('datasource')
export class MongoDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoDb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoDb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
