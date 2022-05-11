import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Deposito, DepositoRelations} from '../models';

export class DepositoRepository extends DefaultCrudRepository<
  Deposito,
  typeof Deposito.prototype.id,
  DepositoRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Deposito, dataSource);
  }
}
