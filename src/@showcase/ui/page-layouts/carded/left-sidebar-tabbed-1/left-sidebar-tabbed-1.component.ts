import {Component} from '@angular/core';

import {YqSidebarService} from '@yq/components/sidebar/sidebar.service';

@Component({
    selector: 'carded-left-sidebar-tabbed-1',
    templateUrl: './left-sidebar-tabbed-1.component.html',
    styleUrls: ['./left-sidebar-tabbed-1.component.scss']
})
export class CardedLeftSidebarTabbed1Component {
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
