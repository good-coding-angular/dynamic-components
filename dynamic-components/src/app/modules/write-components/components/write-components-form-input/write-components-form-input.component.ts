import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-write-components-form-input',
  templateUrl: './write-components-form-input.component.html',
  styleUrls: [
    './write-components-form-input.component.scss',
  ],
})
export class WriteComponentsFormInputComponent {
  @Input()
  public label: string = '';

  @Input()
  public name: string = '';

  @Input()
  public value: string = '';

  @Input()
  public disabled: boolean = false;

  @Output()
  public valueHasChanged: EventEmitter<[string, string]> = new EventEmitter<[string, string]>();

  public valueChanged(): void {
    this.valueHasChanged.emit([this.name, this.value]);
  }
}
