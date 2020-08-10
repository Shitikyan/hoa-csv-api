import { DefaultCrudRepository, HasManyRepositoryFactory, repository } from '@loopback/repository';
import { Batch, BatchRelations } from '../models';
import { MongoDbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { BatchRow } from '../models/batchRow.model';
import { BatchRowRepository } from './batch-row.repository';

export class BatchRepository extends DefaultCrudRepository<
  Batch,
  typeof Batch.prototype.id,
  BatchRelations
  > {
  public readonly batchRows: HasManyRepositoryFactory<
    BatchRow,
    typeof Batch.prototype.id
  >;

  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
    @repository.getter('BatchRowRepository')
    protected batchRowRepositoryGetter: Getter<BatchRowRepository>
  ) {
    super(Batch, dataSource);

    this.batchRows = this.createHasManyRepositoryFactoryFor(
      'batchRows',
      batchRowRepositoryGetter,
    );

    this.registerInclusionResolver('batchRows', this.batchRows.inclusionResolver);
  }
}
