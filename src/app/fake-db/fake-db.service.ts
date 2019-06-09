import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ChatPanelFakeDb} from 'app/fake-db/chat-panel';
import {QuickPanelFakeDb} from 'app/fake-db/quick-panel';

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Chat Panel
      'chat-panel-contacts': ChatPanelFakeDb.contacts,
      'chat-panel-chats': ChatPanelFakeDb.chats,
      'chat-panel-user': ChatPanelFakeDb.user,

      // Quick Panel
      'quick-panel-notes': QuickPanelFakeDb.notes,
      'quick-panel-events': QuickPanelFakeDb.events
    };
  }
}
