import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ContactsFakeDb} from '@yq/extensions/contacts/contacts.fake-db';

export class ContactsFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Contacts
      'contacts-contacts': ContactsFakeDb.contacts,
      'contacts-user': ContactsFakeDb.user
    };
  }
}
