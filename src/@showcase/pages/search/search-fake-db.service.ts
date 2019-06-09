import {InMemoryDbService} from 'angular-in-memory-web-api';
import {SearchFakeDb} from './search.fake-db';

export class SearchFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Search
      'search': SearchFakeDb.search,
    };
  }
}
