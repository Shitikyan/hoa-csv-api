import {EntityCrudRepository} from '@loopback/repository';
import {Todo} from '../models';

/**
 * Generate a complete Todo object for use with tests.
 * @param todo - A partial (or complete) Todo object.
 */
export function givenTodo(todo?: Partial<Todo>) {
  const data = Object.assign(
    {
      title: 'do a thing',
      desc: 'There are some things that need doing',
      isComplete: false,
    },
    todo,
  );
  return new Todo(data);
}

// Type alias used for tests (not an actual repository class)
export type TodoRepository = EntityCrudRepository<
  Todo,
  typeof Todo.prototype.id
>;
