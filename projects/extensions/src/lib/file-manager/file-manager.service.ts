import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class FileManagerService implements Resolve<any> {
  onFilesChanged: BehaviorSubject<any>;
  onFileSelected: BehaviorSubject<any>;

  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onFilesChanged = new BehaviorSubject({});
    this.onFileSelected = new BehaviorSubject({});
  }

  /**
   * Resolver
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {

      Promise.all([
        this.getFiles()
      ]).then(
        ([files]) => {
          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get files
   */
  getFiles(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/file-manager')
        .subscribe((response: any) => {
          this.onFilesChanged.next(response);
          this.onFileSelected.next(response[0]);
          resolve(response);
        }, reject);
    });
  }
}
