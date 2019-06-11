import {Component} from '@angular/core';

import {YqSidebarService} from '@yq/components';

@Component({
  selector: 'carded-left-sidebar-2',
  templateUrl: './left-sidebar-2.component.html',
  styleUrls: ['./left-sidebar-2.component.scss']
})
export class CardedLeftSidebar2Component {
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
