import {InMemoryDbService} from 'angular-in-memory-web-api';
import {TodoFakeDb} from '@yq/extensions/todo/todo.fake-db';

export class TodoFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Todo
      'todo-todos': TodoFakeDb.todos,
      'todo-filters': TodoFakeDb.filters,
      'todo-tags': TodoFakeDb.tags
    };
  }
}
