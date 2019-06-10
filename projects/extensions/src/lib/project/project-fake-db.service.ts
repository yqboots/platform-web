import {InMemoryDbService} from 'angular-in-memory-web-api';

import {ProjectDashboardDb} from './dashboard-project.fake-db';

export class ProjectFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Dashboards
      'project-dashboard-projects': ProjectDashboardDb.projects,
      'project-dashboard-widgets': ProjectDashboardDb.widgets,
    };
  }
}
