import {InMemoryDbService} from 'angular-in-memory-web-api';

import {AnalyticsDashboardDb} from './dashboard-analytics.fake-db';

export class AnalyticsFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Dashboards
      'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets
    };
  }
}
