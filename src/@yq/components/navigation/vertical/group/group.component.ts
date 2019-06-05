import {ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {merge, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {AppNavigationItem} from '@yq/core';

import {YqNavigationService} from '../../navigation.service';

@Component({
    selector: 'yq-nav-vertical-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss']
})
export class YqNavVerticalGroupComponent implements OnInit, OnDestroy {
    @HostBinding('class')
    classes = 'nav-group nav-item';

    @Input()
    item: AppNavigationItem;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     */

    /**
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {YqNavigationService} _yqNavigationService
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _yqNavigationService: YqNavigationService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to navigation item
        merge(
            this._yqNavigationService.onNavigationItemAdded,
            this._yqNavigationService.onNavigationItemUpdated,
            this._yqNavigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
