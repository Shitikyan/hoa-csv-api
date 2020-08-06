import {DefaultCrudRepository} from '@loopback/repository';
import {Batch, BatchRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BatchRepository extends DefaultCrudRepository<
  Batch,
  typeof Batch.prototype.id,
  BatchRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Batch, dataSource);
  }
}
