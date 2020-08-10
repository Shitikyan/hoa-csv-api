import { DefaultCrudRepository, BelongsToAccessor, repository } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { BatchRow, BatchRowRelations } from '../models/batchRow.model';
import { Batch } from '../models';
import { BatchRepository } from './batch.repository';

export class BatchRowRepository extends DefaultCrudRepository<
  BatchRow,
  typeof BatchRow.prototype.id,
  BatchRowRelations
  > {
  public readonly batch: BelongsToAccessor<
    Batch,
    typeof BatchRow.prototype.id
  >;

  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
    @repository.getter('BatchRepository')
    protected batchRepositoryGetter: Getter<BatchRepository>,
  ) {
    super(BatchRow, dataSource);

    this.batch = this.createBelongsToAccessorFor(
      'batch',
      batchRepositoryGetter,
    );
    this.registerInclusionResolver('batch', this.batch.inclusionResolver);
  }
}
