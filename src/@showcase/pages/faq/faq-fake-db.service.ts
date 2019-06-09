import {InMemoryDbService} from 'angular-in-memory-web-api';
import {FaqFakeDb} from '@showcase/pages/faq/faq.fake-db';

export class FaqFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // FAQ
      'faq': FaqFakeDb.data,
    };
  }
}
