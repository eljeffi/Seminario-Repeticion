import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Deposito extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: Date;

  @property({
    type: 'number',
    required: true,
  })
  monto: number;

  @property({
    type: 'string',
    required: true,
  })
  metodo: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Deposito>) {
    super(data);
  }
}

export interface DepositoRelations {
  // describe navigational properties here
}

export type DepositoWithRelations = Deposito & DepositoRelations;
