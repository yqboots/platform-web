import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ProfileFakeDb} from './profile.fake-db';

export class ProfileFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Profile
      'profile-timeline': ProfileFakeDb.timeline,
      'profile-photos-videos': ProfileFakeDb.photosVideos,
      'profile-about': ProfileFakeDb.about
    };
  }
}
