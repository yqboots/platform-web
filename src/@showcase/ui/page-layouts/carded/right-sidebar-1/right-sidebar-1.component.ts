import {Component} from '@angular/core';

import {YqSidebarService} from '@yq/components/sidebar/sidebar.service';

@Component({
  selector: 'carded-right-sidebar-1',
  templateUrl: './right-sidebar-1.component.html',
  styleUrls: ['./right-sidebar-1.component.scss']
})
export class CardedRightSidebar1Component {
  /**
   * Constructor
   *
   * @param {YqSidebarService} _yqSidebarService
   */
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
