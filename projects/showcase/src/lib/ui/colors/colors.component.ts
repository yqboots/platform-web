import {Component} from '@angular/core';

import {MatColors} from '@yq/core';

@Component({
  selector: 'colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {
  colors: {};
  selectedColor: string;
  selectedColorDefaultValue: string;

  /**
   * Constructor
   */
  constructor() {
    // Set the defaults
    this.colors = MatColors.all;
    this._updateSelectedColor('primary');
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Select color
   *
   * @param selected
   */
  selectColor(selected): void {
    this._updateSelectedColor(selected.tab.textLabel);
  }

  /**
   * Update selected color
   *
   * @param colorName
   */
  private _updateSelectedColor(colorName): void {
    this.selectedColor = colorName;
    this.selectedColorDefaultValue = MatColors.getColor(this.selectedColor)[500];
  }
}
