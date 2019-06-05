import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[yqWidgetToggle]'
})
export class YqWidgetToggleDirective {
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    ) {
    }
}
