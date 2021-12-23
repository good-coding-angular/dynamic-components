import {Component, Input} from '@angular/core';
import {DynamicComponent} from '../../../shared/model/dynamic-component.class';

@Component({
  selector: 'app-write-components-dropdown',
  templateUrl: './write-components-dropdown.component.html',
  styleUrls: [
    './write-components-dropdown.component.scss',
  ],
})
export class WriteComponentsDropdownComponent {
  @Input()
  public dynamicComponents: DynamicComponent<any>[] = [];

  public showDropDown = false;

  public toggleDropdown(): void {
    this.showDropDown = !this.showDropDown;
  }
}
