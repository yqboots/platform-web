import {Directive, HostBinding, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MediaObserver} from '@angular/flex-layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {YqMatchMediaService} from '../../services';
import {MatSidenavHelperService} from './mat-sidenav.service';

@Directive({
  selector: '[yqMatSidenavHelper]'
})
export class MatSidenavHelperDirective implements OnInit, OnDestroy {
  @HostBinding('class.mat-is-locked-open')
  isLockedOpen: boolean;

  @Input()
  yqMatSidenavHelper: string;

  @Input()
  matIsLockedOpen: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {YqMatchMediaService} _yqMatchMediaService
   * @param {MatSidenavHelperService} _yqMatSidenavHelperService
   * @param {MatSidenav} _matSidenav
   * @param {MediaObserver} _mediaObserver
   */
  constructor(
    private _yqMatchMediaService: YqMatchMediaService,
    private _yqMatSidenavHelperService: MatSidenavHelperService,
    private _matSidenav: MatSidenav,
    private _mediaObserver: MediaObserver
  ) {
    // Set the defaults
    this.isLockedOpen = true;

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
    // Register the sidenav to the service
    this._yqMatSidenavHelperService.setSidenav(this.yqMatSidenavHelper, this._matSidenav);

    if (this.matIsLockedOpen && this._mediaObserver.isActive(this.matIsLockedOpen)) {
      this.isLockedOpen = true;
      this._matSidenav.mode = 'side';
      this._matSidenav.toggle(true);
    } else {
      this.isLockedOpen = false;
      this._matSidenav.mode = 'over';
      this._matSidenav.toggle(false);
    }

    this._yqMatchMediaService.onMediaChange
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        if (this.matIsLockedOpen && this._mediaObserver.isActive(this.matIsLockedOpen)) {
          this.isLockedOpen = true;
          this._matSidenav.mode = 'side';
          this._matSidenav.toggle(true);
        } else {
          this.isLockedOpen = false;
          this._matSidenav.mode = 'over';
          this._matSidenav.toggle(false);
        }
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

@Directive({
  selector: '[yqMatSidenavToggler]'
})
export class YqMatSidenavTogglerDirective {
  @Input()
  yqMatSidenavToggler: string;

  /**
   * Constructor
   *
   * @param {MatSidenavHelperService} _yqMatSidenavHelperService
   */
  constructor(
    private _yqMatSidenavHelperService: MatSidenavHelperService) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * On click
   */
  @HostListener('click')
  onClick(): void {
    this._yqMatSidenavHelperService.getSidenav(this.yqMatSidenavToggler).toggle();
  }
}
