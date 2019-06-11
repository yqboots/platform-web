import {Component} from '@angular/core';

import {YqSidebarService} from '@yq/components';

@Component({
  selector: 'carded-left-sidebar-tabbed-2',
  templateUrl: './left-sidebar-tabbed-2.component.html',
  styleUrls: ['./left-sidebar-tabbed-2.component.scss']
})
export class CardedLeftSidebarTabbed2Component {
  constructor(
    private _yqSidebarService: YqSidebarService
  ) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._yqSidebarService.getSidebar(name).toggleOpen();
  }
}
