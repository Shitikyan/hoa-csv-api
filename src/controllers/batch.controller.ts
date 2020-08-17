/* eslint-disable @typescript-eslint/prefer-for-of */
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Batch, BatchRow } from '../models';
import { BatchRepository, BatchRowRepository } from '../repositories';
import { BatchRowResponse } from '../types';

export class BatchController {
  constructor(
    @repository(BatchRepository)
    public batchRepository: BatchRepository,
    @repository(BatchRowRepository)
    public batchRowRepository: BatchRowRepository,
  ) { }

  @post('/batches', {
    responses: {
      '200': {
        description: 'Batch model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Batch) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Batch, {
            title: 'NewBatch',
            exclude: ['id'],
          }),
        },
      },
    })
    batch: Omit<Batch, 'id'>,
  ): Promise<Batch> {
    return this.batchRepository.create(batch);
  }

  @get('/batches/count', {
    responses: {
      '200': {
        description: 'Batch model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(@param.where(Batch) where?: Where<Batch>): Promise<Count> {
    return this.batchRepository.count(where);
  }

  @get('/batches', {
    responses: {
      '200': {
        description: 'Array of Batch model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Batch, { includeRelations: false }),
            },
          },
        },
      },
    },
  })
  async find(@param.filter(Batch) filter?: Filter<Batch>): Promise<Batch[]> {
    const batches = await this.batchRepository.find(filter);
    batches.forEach(async element => {
      const where = { batchId: element.id };
      const batchRowCount = await this.batchRowRepository.count(where);
      const pendingCount = await this.batchRowRepository.count({
        batchId: element.id,
        pending: true,
      });
      element.count = batchRowCount.count;
      element.pendingCount = pendingCount.count;
    });

    return batches;
  }

  @get('/batches/{id}/batch-row-first', {
    responses: {
      '200': {
        description: "First pending BatchRow belonging to Batch",
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(BatchRow) },
          },
        },
      },
    },
  })
  async findFirstBatchRow(
    @param.path.string('id') id: string,
  ): Promise<BatchRowResponse> {
    const filter = { where: { batchId: id, pending: true } };
    return this.batchRowRepository.findOne(filter);
  }

  @get('/batches/{id}/batch-rows', {
    responses: {
      '200': {
        description: "Array of BatchRow's belonging to Batch",
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(BatchRow) },
          },
        },
      },
    },
  })
  async findBatchRows(
    @param.path.string('id') id: string,
  ): Promise<BatchRow[]> {
    const filter = { where: { batchId: id } };
    return this.batchRowRepository.find(filter);
  }


  @patch('/batches', {
    responses: {
      '200': {
        description: 'Batch PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Batch, { partial: true }),
        },
      },
    })
    batch: Batch,
    @param.where(Batch) where?: Where<Batch>,
  ): Promise<Count> {
    return this.batchRepository.updateAll(batch, where);
  }

  @get('/batches/{id}', {
    responses: {
      '200': {
        description: 'Batch model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Batch, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Batch, { exclude: 'where' })
    filter?: FilterExcludingWhere<Batch>,
  ): Promise<Batch> {
    const batch = await this.batchRepository.findById(id, filter);
    const where = { batchId: batch.id };
    const batchRowCount = await this.batchRowRepository.count(where);
    const pendingCount = await this.batchRowRepository.count({
      batchId: batch.id,
      pending: true,
    });
    batch.count = batchRowCount.count;
    batch.pendingCount = pendingCount.count;
    return batch;
  }

  @patch('/batches/{id}', {
    responses: {
      '204': {
        description: 'Batch PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Batch, { partial: true }),
        },
      },
    })
    batch: Batch,
  ): Promise<void> {
    await this.batchRepository.updateById(id, batch);
  }

  @put('/batches/{id}', {
    responses: {
      '204': {
        description: 'Batch PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() batch: Batch,
  ): Promise<void> {
    await this.batchRepository.replaceById(id, batch);
  }

  @del('/batches/{id}', {
    responses: {
      '204': {
        description: 'Batch DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.batchRepository.deleteById(id);
  }
}
