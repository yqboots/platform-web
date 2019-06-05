import {InMemoryDbService} from 'angular-in-memory-web-api';

import {ProjectDashboardDb} from '@yq/extensions/dashboards/project/dashboard-project.fake-db';
import {AnalyticsDashboardDb} from '@yq/extensions/dashboards/analytics/dashboard-analytics.fake-db';
import {CalendarFakeDb} from '@yq/extensions/calendar/calendar.fake-db';
import {ECommerceFakeDb} from '@yq/extensions/e-commerce/e-commerce.fake-db';
import {AcademyFakeDb} from '@yq/extensions/academy/academy.fake-db';
import {MailFakeDb} from '@yq/extensions/mail/mail.fake-db';
import {ChatFakeDb} from '@yq/extensions/chat/chat.fake-db';
import {FileManagerFakeDb} from '@yq/extensions/file-manager/file-manager.fake-db';
import {ContactsFakeDb} from '@yq/extensions/contacts/contacts.fake-db';
import {TodoFakeDb} from '@yq/extensions/todo/todo.fake-db';
import {ScrumboardFakeDb} from '@yq/extensions/scrumboard/scrumboard.fake-db';
import {InvoiceFakeDb} from '@showcase/pages/invoices/invoice.fake-db';
import {ProfileFakeDb} from '@showcase/pages/profile/profile.fake-db';
import {SearchFakeDb} from '@showcase/pages/search/search.fake-db';
import {FaqFakeDb} from '@showcase/pages/faq/faq.fake-db';
import {KnowledgeBaseFakeDb} from '@showcase/pages/knowledge-base/knowledge-base.fake-db';
import {IconsFakeDb} from '@showcase/ui/icons/icons.fake-db';
import {ChatPanelFakeDb} from 'app/fake-db/chat-panel';
import {QuickPanelFakeDb} from 'app/fake-db/quick-panel';

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Dashboards
      'project-dashboard-projects': ProjectDashboardDb.projects,
      'project-dashboard-widgets': ProjectDashboardDb.widgets,
      'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets,

      // Calendar
      'calendar': CalendarFakeDb.data,

      // E-Commerce
      'e-commerce-products': ECommerceFakeDb.products,
      'e-commerce-orders': ECommerceFakeDb.orders,

      // Academy
      'academy-categories': AcademyFakeDb.categories,
      'academy-courses': AcademyFakeDb.courses,
      'academy-course': AcademyFakeDb.course,

      // Mail
      'mail-mails': MailFakeDb.mails,
      'mail-folders': MailFakeDb.folders,
      'mail-filters': MailFakeDb.filters,
      'mail-labels': MailFakeDb.labels,

      // Chat
      'chat-contacts': ChatFakeDb.contacts,
      'chat-chats': ChatFakeDb.chats,
      'chat-user': ChatFakeDb.user,

      // File Manager
      'file-manager': FileManagerFakeDb.files,

      // Contacts
      'contacts-contacts': ContactsFakeDb.contacts,
      'contacts-user': ContactsFakeDb.user,

      // Todo
      'todo-todos': TodoFakeDb.todos,
      'todo-filters': TodoFakeDb.filters,
      'todo-tags': TodoFakeDb.tags,

      // Scrumboard
      'scrumboard-boards': ScrumboardFakeDb.boards,

      // Invoice
      'invoice': InvoiceFakeDb.invoice,

      // Profile
      'profile-timeline': ProfileFakeDb.timeline,
      'profile-photos-videos': ProfileFakeDb.photosVideos,
      'profile-about': ProfileFakeDb.about,

      // Search
      'search': SearchFakeDb.search,

      // FAQ
      'faq': FaqFakeDb.data,

      // Knowledge base
      'knowledge-base': KnowledgeBaseFakeDb.data,

      // Icons
      'icons': IconsFakeDb.icons,

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
