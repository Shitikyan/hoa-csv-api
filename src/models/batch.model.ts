import {Entity, model, property} from '@loopback/repository';

@model()
export class Batch extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  constructor(data?: Partial<Batch>) {
    super(data);
  }
}

export interface BatchRelations {
  // describe navigational properties here
}

export type BatchWithRelations = Batch & BatchRelations;
