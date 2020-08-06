import {Entity, model, property} from '@loopback/repository';

@model()
export class Batch extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'},
  })
  id: string;

  @property({
    type: 'string',
  })
  name: string;

  constructor(data?: Partial<Batch>) {
    super(data);
  }
}

export interface BatchRelations {
  // describe navigational properties here
}

export type BatchWithRelations = Batch & BatchRelations;
