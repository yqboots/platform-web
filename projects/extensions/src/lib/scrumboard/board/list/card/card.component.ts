import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as moment_ from 'moment';

const moment = moment_;

@Component({
  selector: 'scrumboard-board-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScrumboardBoardCardComponent implements OnInit {
  @Input()
  cardId;

  card: any;
  board: any;

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.board = this._activatedRoute.snapshot.data.board;
    this.card = this.board.cards.filter((card) => {
      return this.cardId === card.id;
    })[0];
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Is the card overdue?
   */
  isOverdue(cardDate): boolean {
    return moment() > moment(new Date(cardDate));
  }
}
