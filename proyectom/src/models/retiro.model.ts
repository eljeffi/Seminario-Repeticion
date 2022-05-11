import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Retiro extends Entity {
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
  cuentaorigen: number;

  @property({
    type: 'number',
    required: true,
  })
  cuentadestino: number;

  @property({
    type: 'number',
    required: true,
  })
  monto: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Retiro>) {
    super(data);
  }
}

export interface RetiroRelations {
  // describe navigational properties here
}

export type RetiroWithRelations = Retiro & RetiroRelations;
