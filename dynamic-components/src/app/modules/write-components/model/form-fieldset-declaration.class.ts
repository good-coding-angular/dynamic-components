import {FormFieldDeclaration} from '../../shared/model/form-field-declaration.class';
import {FormFormfieldDeclaration} from './form-formfield.declaration';

export class FormFieldsetDeclaration {
  public bootstrapWidth: number = 12;
  public bootstrapXlWidth?: number;
  public bootstrapLgWidth?: number;
  public bootstrapMdWidth?: number;
  public bootstrapXsWidth?: number;
  public bootstrapSmWidth?: number;

  public active: boolean = true;

  public title?: string;

  public formFieldDeclarations: FormFieldDeclaration[] = [];

  constructor(
    options?: {
      bootstrapWidth?: number;
      bootstrapXlWidth?: number;
      bootstrapLgWidth?: number;
      bootstrapMdWidth?: number;
      bootstrapXsWidth?: number;
      bootstrapSmWidth?: number;
      active?: boolean;
      title?: string;
      formFieldDeclarations?: FormFormfieldDeclaration[];
    }
  ) {
    if (!!options) {
      for (const key of Object.keys(options)) {
        // @ts-ignore
        if (options[key] !== undefined) {
          // @ts-ignore
          this[key] = options[key];
        }
      }
    }
  }
}
