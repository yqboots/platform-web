import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {COMPONENT_MAP} from './example-components';

@Component({
  selector: 'angular-material',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit, OnDestroy {
  id: string;
  title: string;
  examples: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _activatedRoute: ActivatedRoute) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(params => {
        this.id = params['id'];
        const _title = this.id.replace('-', ' ');
        this.title = _title.charAt(0).toUpperCase() + _title.substring(1);
        this.examples = COMPONENT_MAP[this.id];
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

