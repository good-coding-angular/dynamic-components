import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormFieldsetDeclaration} from '../../model/form-fieldset-declaration.class';
import {FormFormfieldDeclaration} from '../../model/form-formfield.declaration';
import {WriteComponentsFormInputComponent} from '../../components/write-components-form-input/write-components-form-input.component';
import {DynamicComponent} from '../../../shared/model/dynamic-component.class';
import {SharedBaseComponent} from '../../../shared/components/shared-base/shared-base.component';

@Component({
  selector: 'app-write-components-startpage',
  templateUrl: './write-components-startpage.component.html',
})
export class WriteComponentsStartpageComponent extends SharedBaseComponent implements OnInit {
  public formFieldsetDeclaration: FormFieldsetDeclaration[] = [];

  public valueHasChanged: EventEmitter<[string, string]> = new EventEmitter<[string, string]>();

  public data: any;

  public ngOnInit(): void {
    this.initFormFieldsetDeclaration();
  }

  public formValueHasChanged(data: any) {
    console.log('formdata', data);
    this.data = data;
  }

  public submitForm() {
    console.log('submitForm', this.data);
  }

  public initFormFieldsetDeclaration(): void {
    this.formFieldsetDeclaration = [
      new FormFieldsetDeclaration({
        title: 'Personalia',
        formFieldDeclarations: [
          new FormFormfieldDeclaration({
            formComponent: new DynamicComponent<WriteComponentsFormInputComponent>({
              componentType: WriteComponentsFormInputComponent,
              inputs: {
                label: 'First name',
                name: 'firstname',
                disabled: true,
              },
              outputs: {
                valueHasChanged: this.valueHasChanged
              }
            })
          }),
          new FormFormfieldDeclaration({
            formComponent: new DynamicComponent<WriteComponentsFormInputComponent>({
              componentType: WriteComponentsFormInputComponent,
              inputs: {
                label: 'Last name',
                name: 'lastname',
              },
              outputs: {
                valueHasChanged: this.valueHasChanged
              }
            })
          }),
          new FormFormfieldDeclaration({
            formComponent: new DynamicComponent<WriteComponentsFormInputComponent>({
              componentType: WriteComponentsFormInputComponent,
              inputs: {
                label: 'Email',
                name: 'email',
              },
              outputs: {
                valueHasChanged: this.valueHasChanged
              }
            })
          }),
          new FormFormfieldDeclaration({
            formComponent: new DynamicComponent<WriteComponentsFormInputComponent>({
              componentType: WriteComponentsFormInputComponent,
              inputs: {
                label: 'Birthday',
                name: 'birthday',
              },
              outputs: {
                valueHasChanged: this.valueHasChanged
              }
            })
          }),
        ]
      }),
      new FormFieldsetDeclaration({
        title: 'Address',
        active: true,
        formFieldDeclarations: [
          new FormFormfieldDeclaration({
            formComponent: new DynamicComponent<WriteComponentsFormInputComponent>({
              componentType: WriteComponentsFormInputComponent,
              inputs: {
                label: 'Street',
                name: 'street',
              },
              outputs: {
                valueHasChanged: this.valueHasChanged
              }
            })
          }),
          new FormFormfieldDeclaration({
            formComponent: new DynamicComponent<WriteComponentsFormInputComponent>({
              componentType: WriteComponentsFormInputComponent,
              inputs: {
                label: 'House Number',
                name: 'housenr',
              },
              outputs: {
                valueHasChanged: this.valueHasChanged
              }
            })
          }),
          new FormFormfieldDeclaration({
            formComponent: new DynamicComponent<WriteComponentsFormInputComponent>({
              componentType: WriteComponentsFormInputComponent,
              inputs: {
                label: 'House Number',
                name: 'housenr',
              },
              outputs: {
                valueHasChanged: this.valueHasChanged
              }
            })
          }),
        ]
      })
    ];
  }
}
