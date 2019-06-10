import {InMemoryDbService} from 'angular-in-memory-web-api';
import {CalendarFakeDb} from './calendar.fake-db';

export class CalendarFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Calendar
      'calendar': CalendarFakeDb.data
    };
  }
}
