import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';

import {YqUtils} from '@yq/core';

import {FaqService} from './faq.service';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaqComponent implements OnInit, OnDestroy {
  faqs: any;
  faqsFiltered: any;
  step: number;
  searchInput: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _faqService: FaqService
  ) {
    // Set the defaults
    this.searchInput = new FormControl('');
    this.step = 0;

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
    this._faqService.onFaqsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(response => {
        this.faqs = response;
        this.faqsFiltered = response;
      });

    this.searchInput.valueChanges
      .pipe(
        takeUntil(this._unsubscribeAll),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(searchText => {
        this.faqsFiltered = YqUtils.filterArrayByString(this.faqs, searchText);
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
   * Set step
   */
  setStep(index: number): void {
    this.step = index;
  }

  /**
   * Next step
   */
  nextStep(): void {
    this.step++;
  }

  /**
   * Previous step
   */
  prevStep(): void {
    this.step--;
  }
}
