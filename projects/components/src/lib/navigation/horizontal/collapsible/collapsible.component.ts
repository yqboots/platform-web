import {Component, HostBinding, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {yqAnimations, YqConfigService} from '@yq/core';

@Component({
  selector: 'yq-nav-horizontal-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss'],
  animations: yqAnimations
})
export class YqNavHorizontalCollapsibleComponent implements OnInit, OnDestroy {
  yqConfig: any;
  isOpen = false;

  @HostBinding('class')
  classes = 'nav-collapsible nav-item';

  @Input()
  item: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _yqConfigService: YqConfigService) {
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
    // Subscribe to config changes
    this._yqConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(
        (config) => {
          this.yqConfig = config;
        }
      );
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
   * Open
   */
  @HostListener('mouseenter')
  open(): void {
    this.isOpen = true;
  }

  /**
   * Close
   */
  @HostListener('mouseleave')
  close(): void {
    this.isOpen = false;
  }
}
