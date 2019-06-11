import {InMemoryDbService} from 'angular-in-memory-web-api';
import {IconsFakeDb} from './icons.fake-db';

export class IconsFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Icons
      'icons': IconsFakeDb.icons,
    };
  }
}
