import { Entity, model, property, hasMany } from '@loopback/repository';
import { BatchRow, BatchRowWithRelations } from './batchRow.model';

@model()
export class Batch extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: { dataType: 'ObjectId' },
  })
  id: string;

  @property({
    type: 'string',
  })
  name: string;

  @hasMany(() => BatchRow)
  batchRows: BatchRow[];

  constructor(data?: Partial<Batch>) {
    super(data);
  }
}

export interface BatchRelations {
  batchRows?: BatchRowWithRelations[];
}

export type BatchWithRelations = Batch & BatchRelations;
