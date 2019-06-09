import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[yqWidgetToggle]'
})
export class YqWidgetToggleDirective {
  constructor(public elementRef: ElementRef) {
  }
}
