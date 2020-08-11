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

  getId() {
    return this.id;
  }

  constructor(data?: Partial<Batch>) {
    super(data);
  }
}

export interface BatchRelations {
  batchRows?: BatchRowWithRelations[];
}

export type BatchWithRelations = Batch & BatchRelations;
