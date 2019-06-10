import {InMemoryDbService} from 'angular-in-memory-web-api';
import {AcademyFakeDb} from './academy.fake-db';

export class AcademyFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Academy
      'academy-categories': AcademyFakeDb.categories,
      'academy-courses': AcademyFakeDb.courses,
      'academy-course': AcademyFakeDb.course
    };
  }
}
