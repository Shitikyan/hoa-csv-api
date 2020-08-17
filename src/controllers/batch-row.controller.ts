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
import { BatchRow } from '../models';
import { BatchRowRepository } from '../repositories';
import { BatchRowResponse } from '../types';

export class BatchRowController {
  constructor(
    @repository(BatchRowRepository)
    public batchRowRepository: BatchRowRepository,
  ) { }

  @post('/batch-rows', {
    responses: {
      '200': {
        description: 'BatchRow model instance',
        content: { 'application/json': { schema: getModelSchemaRef(BatchRow) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BatchRow, {
            title: 'NewBatchRow',
            exclude: ['id'],
          }),
        },
      },
    })
    batchRow: Omit<BatchRow, 'id'>,
  ): Promise<BatchRow> {
    return this.batchRowRepository.create(batchRow);
  }

  @get('/batch-rows/count', {
    responses: {
      '200': {
        description: 'BatchRow model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(@param.where(BatchRow) where?: Where<BatchRow>): Promise<Count> {
    return this.batchRowRepository.count(where);
  }

  @get('/batch-rows', {
    responses: {
      '200': {
        description: 'Array of BatchRow model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(BatchRow, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(BatchRow) filter?: Filter<BatchRow>,
  ): Promise<BatchRow[]> {
    return this.batchRowRepository.find(filter);
  }

  @patch('/batch-rows', {
    responses: {
      '200': {
        description: 'BatchRow PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BatchRow, { partial: true }),
        },
      },
    })
    batchRow: BatchRow,
    @param.where(BatchRow) where?: Where<BatchRow>,
  ): Promise<Count> {
    return this.batchRowRepository.updateAll(batchRow, where);
  }

  @get('/batch-rows/{id}', {
    responses: {
      '200': {
        description: 'find BatchRow model by id',
        content: {
          'application/json': {
            schema: getModelSchemaRef(BatchRow, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(BatchRow, { exclude: 'where' })
    filter?: FilterExcludingWhere<BatchRow>,
  ): Promise<BatchRow> {
    return this.batchRowRepository.findById(id, filter);
  }

  @get('/batch-rows/{id}/next', {
    responses: {
      '200': {
        description: 'next BatchRow model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(BatchRow, { includeRelations: false }),
          },
        },
      },
    },
  })
  async next(
    @param.path.string('id') id: string,
  ): Promise<BatchRowResponse> {
    const batchRow = await this.batchRowRepository.findById(id);
    const filter = { where: { pending: true, batchId: batchRow.batchId } };
    const batchRows = await this.batchRowRepository.find(filter);
    const rowsLength = batchRows.length;
    if (rowsLength === 1) return null;

    for (let i = 0; i < rowsLength; i++) {
      if (batchRows[i].id === id) {
        if (i == rowsLength - 1) return batchRows[0];
        return batchRows[i + 1];
      }
    }

    return null;
  }

  @patch('/batch-rows/{id}', {
    responses: {
      '204': {
        description: 'BatchRow PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BatchRow, { partial: true }),
        },
      },
    })
    batchRow: BatchRow,
  ): Promise<void> {
    await this.batchRowRepository.updateById(id, batchRow);
  }

  @put('/batch-rows/{id}', {
    responses: {
      '204': {
        description: 'BatchRow PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() batchRow: BatchRow,
  ): Promise<void> {
    await this.batchRowRepository.replaceById(id, batchRow);
  }

  @put('/batch-rows/{id}/accept', {
    responses: {
      '204': {
        description: 'BatchRow PUT success',
      },
    },
  })
  async accept(
    @param.path.string('id') id: string,
    @requestBody() batchRow: BatchRow,
  ): Promise<void> {
    batchRow.pending = false;
    await this.batchRowRepository.replaceById(id, batchRow);
  }

  @del('/batch-rows/{id}', {
    responses: {
      '204': {
        description: 'BatchRow DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.batchRowRepository.deleteById(id);
  }
}
