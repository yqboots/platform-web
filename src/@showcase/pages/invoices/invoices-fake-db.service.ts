import {InMemoryDbService} from 'angular-in-memory-web-api';
import {InvoiceFakeDb} from '@showcase/pages/invoices/invoice.fake-db';

export class InvoicesFakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Invoice
      'invoice': InvoiceFakeDb.invoice
    };
  }
}
