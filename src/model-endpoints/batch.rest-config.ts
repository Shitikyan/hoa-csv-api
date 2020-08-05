import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Batch} from '../models';

module.exports = <ModelCrudRestApiConfig>{
  model: Batch,
  pattern: 'CrudRest', // make sure to use this pattern
  dataSource: 'db',
  basePath: '/products',
};
