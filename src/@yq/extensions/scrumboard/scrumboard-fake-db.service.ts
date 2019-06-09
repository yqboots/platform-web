import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ScrumboardFakeDb} from '@yq/extensions/scrumboard/scrumboard.fake-db';

export class ScrumboardFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Scrumboard
      'scrumboard-boards': ScrumboardFakeDb.boards
    };
  }
}
