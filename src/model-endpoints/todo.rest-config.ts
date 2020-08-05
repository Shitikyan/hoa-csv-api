import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Todo} from '../models';

module.exports = <ModelCrudRestApiConfig>{
  model: Todo,
  pattern: 'CrudRest',
  dataSource: 'db',
  basePath: '/todos',
};
