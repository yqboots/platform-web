import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ContactsFakeDb} from './contacts.fake-db';

export class ContactsFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Contacts
      'contacts-contacts': ContactsFakeDb.contacts,
      'contacts-user': ContactsFakeDb.user
    };
  }
}
