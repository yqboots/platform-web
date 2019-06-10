import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';

import {YqSidebarService} from '@yq/components';
import {YqTranslationLoaderService} from '@yq/core';

import {Mail} from './mail.model';
import {MailService} from './mail.service';

import {locale as english} from './i18n/en';
import {locale as chinese} from './i18n/zh';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MailComponent implements OnInit, OnDestroy {
  hasSelectedMails: boolean;
  isIndeterminate: boolean;
  folders: any[];
  filters: any[];
  labels: any[];
  searchInput: FormControl;
  currentMail: Mail;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _mailService: MailService,
              private _yqSidebarService: YqSidebarService,
              private _yqTranslationLoaderService: YqTranslationLoaderService) {
    // Load the translations
    this._yqTranslationLoaderService.loadTranslations(english, chinese);

    // Set the defaults
    this.searchInput = new FormControl('');

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
    this._mailService.onSelectedMailsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(selectedMails => {
        setTimeout(() => {
          this.hasSelectedMails = selectedMails.length > 0;
          this.isIndeterminate = (selectedMails.length !== this._mailService.mails.length && selectedMails.length > 0);
        }, 0);
      });

    this._mailService.onFoldersChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(folders => {
        this.folders = this._mailService.folders;
      });

    this._mailService.onFiltersChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(folders => {
        this.filters = this._mailService.filters;
      });

    this._mailService.onLabelsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(labels => {
        this.labels = this._mailService.labels;
      });

    this._mailService.onCurrentMailChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(currentMail => {
        if (!currentMail) {
          this.currentMail = null;
        } else {
          this.currentMail = currentMail;
        }
      });

    this.searchInput.valueChanges.pipe(
      takeUntil(this._unsubscribeAll),
      debounceTime(300),
      distinctUntilChanged()
    )
      .subscribe(searchText => {
        this._mailService.onSearchTextChanged.next(searchText);
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
   * Toggle select all
   */
  toggleSelectAll(): void {
    this._mailService.toggleSelectAll();
  }

  /**
   * Select mails
   *
   * @param filterParameter
   * @param filterValue
   */
  selectMails(filterParameter?, filterValue?): void {
    this._mailService.selectMails(filterParameter, filterValue);
  }

  /**
   * Deselect mails
   */
  deselectMails(): void {
    this._mailService.deselectMails();
  }

  /**
   * Deselect current mail
   */
  deselectCurrentMail(): void {
    this._mailService.onCurrentMailChanged.next(null);
  }

  /**
   * Toggle label on selected mails
   */
  toggleLabelOnSelectedMails(labelId): void {
    this._mailService.toggleLabelOnSelectedMails(labelId);
  }

  /**
   * Set folder on selected mails
   */
  setFolderOnSelectedMails(folderId): void {
    this._mailService.setFolderOnSelectedMails(folderId);
  }

  /**
   * Toggle the sidebar
   */
  toggleSidebar(name): void {
    this._yqSidebarService.getSidebar(name).toggleOpen();
  }
}
