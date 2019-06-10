import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class ProjectDashboardService implements Resolve<any> {
  projects: any[];
  widgets: any[];

  constructor(private _httpClient: HttpClient) {
  }

  /**
   * Resolver
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise((resolve, reject) => {

      Promise.all([
        this.getProjects(),
        this.getWidgets()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get projects
   */
  getProjects(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/project-dashboard-projects')
        .subscribe((response: any) => {
          this.projects = response;
          resolve(response);
        }, reject);
    });
  }

  /**
   * Get widgets
   */
  getWidgets(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/project-dashboard-widgets')
        .subscribe((response: any) => {
          this.widgets = response;
          resolve(response);
        }, reject);
    });
  }
}
