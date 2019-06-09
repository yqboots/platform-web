import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  QueryList,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {YqWidgetToggleDirective} from './widget-toggle.directive';

@Component({
  selector: 'yq-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class YqWidgetComponent implements AfterContentInit {
  @HostBinding('class.flipped')
  flipped = false;

  @ContentChildren(YqWidgetToggleDirective, {descendants: true})
  toggleButtons: QueryList<YqWidgetToggleDirective>;

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * After content init
   */
  ngAfterContentInit(): void {
    // Listen for the flip button click
    setTimeout(() => {
      this.toggleButtons.forEach(flipButton => {
        this._renderer.listen(flipButton.elementRef.nativeElement, 'click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.toggle();
        });
      });
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle the flipped status
   */
  toggle(): void {
    this.flipped = !this.flipped;
  }
}
