import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ChatFakeDb} from './chat.fake-db';

export class ChatFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Chat
      'chat-contacts': ChatFakeDb.contacts,
      'chat-chats': ChatFakeDb.chats,
      'chat-user': ChatFakeDb.user
    };
  }
}
