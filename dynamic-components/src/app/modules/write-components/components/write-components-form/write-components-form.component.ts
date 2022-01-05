import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormFieldsetDeclaration} from '../../model/form-fieldset-declaration.class';
import {SharedBaseComponent} from '../../../shared/components/shared-base/shared-base.component';

@Component({
  selector: 'app-write-components-form',
  templateUrl: './write-components-form.component.html'
})
export class WriteComponentsFormComponent extends SharedBaseComponent implements OnInit {
  @Input()
  public formFieldsetDeclarations: FormFieldsetDeclaration[] = [];

  @Input()
  public hasSubmitButton = true;

  @Input()
  public submitButtonText: string = 'Ok';

  @Input()
  public valueHasChangedEmitters: EventEmitter<[string, string]>[] = [
    new EventEmitter<[string, string]>()
  ];

  @Output()
  public valueHasChanged: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public submitForm: EventEmitter<void> = new EventEmitter<void>();

  public formData: any = {};

  public ngOnInit(): void {
    this.initValueHasChangedEmitter();
  }

  public formWasSubmitted(): void {
    this.submitForm.emit();
  }

  public initValueHasChangedEmitter(): void {
    for (let valueHasChangedEmitter of this.valueHasChangedEmitters) {
      this.subscriptions.add(
        valueHasChangedEmitter.subscribe(
          (data: [string, string]) => {
            this.formData[data[0]] = data[1];
            this.valueHasChanged.emit(this.formData);
          }
        )
      );
    }
  }

  public getFieldsetClass(): any {
    return 'col-12';
  }
}
