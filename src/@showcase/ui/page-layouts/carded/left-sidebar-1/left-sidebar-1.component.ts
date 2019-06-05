import {Component} from '@angular/core';

import {YqSidebarService} from '@yq/components/sidebar/sidebar.service';

@Component({
    selector: 'carded-left-sidebar-1',
    templateUrl: './left-sidebar-1.component.html',
    styleUrls: ['./left-sidebar-1.component.scss']
})
export class CardedLeftSidebar1Component {
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
