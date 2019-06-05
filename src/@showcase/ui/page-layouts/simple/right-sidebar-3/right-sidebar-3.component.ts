import {Component} from '@angular/core';

import {YqSidebarService} from '@yq/components/sidebar/sidebar.service';

@Component({
    selector: 'simple-right-sidebar-4',
    templateUrl: './right-sidebar-3.component.html',
    styleUrls: ['./right-sidebar-3.component.scss']
})
export class SimpleRightSidebar3Component {
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
