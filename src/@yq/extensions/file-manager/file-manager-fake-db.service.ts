import {InMemoryDbService} from 'angular-in-memory-web-api';
import {FileManagerFakeDb} from '@yq/extensions/file-manager/file-manager.fake-db';

export class FileManagerFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // File Manager
      'file-manager': FileManagerFakeDb.files
    };
  }
}
