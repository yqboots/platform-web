import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class InvoiceService implements Resolve<any> {
  invoice: any;
  invoiceOnChanged: BehaviorSubject<any>;

  constructor(
    private _httpClient: HttpClient
  ) {
    // Set the defaults
    this.invoiceOnChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.getInvoice()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get invoice
   */
  getInvoice(): Promise<any[]> {
    return new Promise((resolve, reject) => {

      this._httpClient.get('api/invoice')
        .subscribe((timeline: any) => {
          this.invoice = timeline;
          this.invoiceOnChanged.next(this.invoice);
          resolve(this.invoice);
        }, reject);
    });
  }
}
