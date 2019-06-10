import {InMemoryDbService} from 'angular-in-memory-web-api';
import {MailFakeDb} from './mail.fake-db';

export class MailFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Mail
      'mail-mails': MailFakeDb.mails,
      'mail-folders': MailFakeDb.folders,
      'mail-filters': MailFakeDb.filters,
      'mail-labels': MailFakeDb.labels,
    };
  }
}
