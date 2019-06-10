import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class EcommerceOrderService implements Resolve<any> {
  routeParams: any;
  order: any;
  onOrderChanged: BehaviorSubject<any>;

  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onOrderChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {

      Promise.all([
        this.getOrder()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get order
   */
  getOrder(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/e-commerce-orders/' + this.routeParams.id)
        .subscribe((response: any) => {
          this.order = response;
          this.onOrderChanged.next(this.order);
          resolve(response);
        }, reject);
    });
  }

  /**
   * Save order
   */
  saveOrder(order): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.post('api/e-commerce-orders/' + order.id, order)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  /**
   * Add order
   */
  addOrder(order): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.post('api/e-commerce-orders/', order)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}
