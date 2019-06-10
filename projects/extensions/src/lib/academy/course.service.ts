import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class AcademyCourseService implements Resolve<any> {
  onCourseChanged: BehaviorSubject<any>;

  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onCourseChanged = new BehaviorSubject({});
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {

      Promise.all([
        this.getCourse(route.params.courseId, route.params.courseSlug)
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }

  /**
   * Get course
   */
  getCourse(courseId, courseSlug): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/academy-course/' + courseId + '/' + courseSlug)
        .subscribe((response: any) => {
          this.onCourseChanged.next(response);
          resolve(response);
        }, reject);
    });
  }
}
