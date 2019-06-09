import {Injectable} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class MatSidenavHelperService {
  sidenavInstances: MatSidenav[];

  constructor() {
    this.sidenavInstances = [];
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Set sidenav
   */
  setSidenav(id, instance): void {
    this.sidenavInstances[id] = instance;
  }

  /**
   * Get sidenav
   */
  getSidenav(id): any {
    return this.sidenavInstances[id];
  }
}
