import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {yqAnimations} from '@yq/core';

import {FileManagerService} from '../../file-manager.service';

@Component({
  selector: 'file-manager-details-sidebar',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: yqAnimations
})
export class FileManagerDetailsSidebarComponent implements OnInit, OnDestroy {
  selected: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _fileManagerService: FileManagerService) {
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
    this._fileManagerService.onFileSelected
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(selected => {
        this.selected = selected;
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
