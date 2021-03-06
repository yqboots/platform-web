import {InMemoryDbService} from 'angular-in-memory-web-api';
import {KnowledgeBaseFakeDb} from './knowledge-base.fake-db';

export class KnowledgeBaseFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Knowledge base
      'knowledge-base': KnowledgeBaseFakeDb.data
    };
  }
}
