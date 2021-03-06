import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {yqAnimations} from '@yq/core';
import {YqSidebarService} from '@yq/components';

import {FileManagerService} from '../file-manager.service';

@Component({
  selector: 'file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: yqAnimations
})
export class FileManagerFileListComponent implements OnInit, OnDestroy {
  files: any;
  dataSource: FilesDataSource | null;
  displayedColumns = ['icon', 'name', 'type', 'owner', 'size', 'modified', 'detail-button'];
  selected: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _fileManagerService: FileManagerService,
              private _yqSidebarService: YqSidebarService) {
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
    this.dataSource = new FilesDataSource(this._fileManagerService);

    this._fileManagerService.onFilesChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(files => {
        this.files = files;
      });

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

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * On select
   */
  onSelect(selected): void {
    this._fileManagerService.onFileSelected.next(selected);
  }

  /**
   * Toggle the sidebar
   */
  toggleSidebar(name): void {
    this._yqSidebarService.getSidebar(name).toggleOpen();
  }
}

export class FilesDataSource extends DataSource<any> {
  constructor(private _fileManagerService: FileManagerService) {
    super();
  }

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   */
  connect(): Observable<any[]> {
    return this._fileManagerService.onFilesChanged;
  }

  /**
   * Disconnect
   */
  disconnect(): void {
  }
}
