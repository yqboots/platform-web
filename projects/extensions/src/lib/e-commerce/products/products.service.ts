import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class EcommerceProductsService implements Resolve<any> {
  products: any[];
  onProductsChanged: BehaviorSubject<any>;

  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onProductsChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {

      Promise.all([
        this.getProducts()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get products
   */
  getProducts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/e-commerce-products')
        .subscribe((response: any) => {
          this.products = response;
          this.onProductsChanged.next(this.products);
          resolve(response);
        }, reject);
    });
  }
}
