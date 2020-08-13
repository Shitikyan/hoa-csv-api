import { Entity, model, property, hasMany } from '@loopback/repository';
import { BatchRow, BatchRowWithRelations } from './batchRow.model';

@model()
export class Batch extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  client: string;

  @property({
    type: 'Date',
  })
  date: Date;

  @property({
    type: 'string',
  })
  status: string;

  @hasMany(() => BatchRow)
  batchRows?: BatchRow[];

  @property({
    type: 'number'
  })
  count: number;

  @property({
    type: 'number'
  })
  pendingCount: number;

  getId() {
    return this.id;
  }

  constructor(data?: Partial<Batch>) {
    super(data);

    this.date = new Date();
    this.client = 'CSV';
    this.status = 'Uploaded';
  }
}

export interface BatchRelations {
  batchRows?: BatchRowWithRelations[];
}

export type BatchWithRelations = Batch & BatchRelations;
