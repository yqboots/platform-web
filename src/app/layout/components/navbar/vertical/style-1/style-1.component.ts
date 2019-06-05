import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {delay, filter, take, takeUntil} from 'rxjs/operators';

import {PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';

import {YqConfigService} from '@yq/core';
import {YqNavigationService, YqSidebarService} from '@yq/components';

@Component({
  selector: 'navbar-vertical-style-1',
  templateUrl: './style-1.component.html',
  styleUrls: ['./style-1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalStyle1Component implements OnInit, OnDestroy {
  yqConfig: any;
  navigation: any;

  // Private
  private _perfectScrollbarDirective: PerfectScrollbarDirective;
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {YqConfigService} _yqConfigService
   * @param {YqNavigationService} _yqNavigationService
   * @param {YqSidebarService} _yqSidebarService
   * @param {Router} _router
   */
  constructor(
    private _yqConfigService: YqConfigService,
    private _yqNavigationService: YqNavigationService,
    private _yqSidebarService: YqSidebarService,
    private _router: Router
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  // Directive
  @ViewChild(PerfectScrollbarDirective, {static: false})
  set directive(theDirective: PerfectScrollbarDirective) {
    if (!theDirective) {
      return;
    }

    this._perfectScrollbarDirective = theDirective;

    // Update the scrollbar on collapsible item toggle
    this._yqNavigationService.onItemCollapseToggled
      .pipe(
        delay(500),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        this._perfectScrollbarDirective.update();
      });

    // Scroll to the active item position
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => {
          setTimeout(() => {
            this._perfectScrollbarDirective.scrollToElement('navbar .nav-link.active', -120);
          });
        }
      );
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
          if (this._yqSidebarService.getSidebar('navbar')) {
            this._yqSidebarService.getSidebar('navbar').close();
          }
        }
      );

    // Subscribe to the config changes
    this._yqConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.yqConfig = config;
      });

    // Get current navigation
    this._yqNavigationService.onNavigationChanged
      .pipe(
        filter(value => value !== null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        this.navigation = this._yqNavigationService.getCurrentNavigation();
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

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar opened status
   */
  toggleSidebarOpened(): void {
    this._yqSidebarService.getSidebar('navbar').toggleOpen();
  }

  /**
   * Toggle sidebar folded status
   */
  toggleSidebarFolded(): void {
    this._yqSidebarService.getSidebar('navbar').toggleFold();
  }
}
