import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {yqAnimations} from '@yq/core';

import {Mail} from '../mail.model';
import {MailService} from '../mail.service';

@Component({
  selector: 'mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: yqAnimations
})
export class MailDetailsComponent implements OnInit, OnDestroy {
  mail: Mail;
  labels: any[];
  showDetails: boolean;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _mailService: MailService) {
    // Set the defaults
    this.showDetails = false;

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
    // Subscribe to update the current mail
    this._mailService.onCurrentMailChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(currentMail => {
        this.mail = currentMail;
      });

    // Subscribe to update on label change
    this._mailService.onLabelsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(labels => {
        this.labels = labels;
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
   * Toggle star
   */
  toggleStar(event): void {
    event.stopPropagation();

    this.mail.toggleStar();

    this._mailService.updateMail(this.mail);
  }

  /**
   * Toggle important
   */
  toggleImportant(event): void {
    event.stopPropagation();

    this.mail.toggleImportant();

    this._mailService.updateMail(this.mail);
  }
}
