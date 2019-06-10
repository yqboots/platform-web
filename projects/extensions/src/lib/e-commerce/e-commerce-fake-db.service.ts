import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ECommerceFakeDb} from './e-commerce.fake-db';

export class ECommerceFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // E-Commerce
      'e-commerce-products': ECommerceFakeDb.products,
      'e-commerce-orders': ECommerceFakeDb.orders
    };
  }
}
