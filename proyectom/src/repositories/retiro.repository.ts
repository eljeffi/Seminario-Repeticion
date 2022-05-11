import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Retiro, RetiroRelations} from '../models';

export class RetiroRepository extends DefaultCrudRepository<
  Retiro,
  typeof Retiro.prototype.id,
  RetiroRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Retiro, dataSource);
  }
}
