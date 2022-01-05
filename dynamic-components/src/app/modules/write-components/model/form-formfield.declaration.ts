import {DynamicComponent} from '../../shared/model/dynamic-component.class';

export class FormFormfieldDeclaration {
  public bootstrapWidth: number = 12;
  public bootstrapXlWidth?: number;
  public bootstrapLgWidth?: number;
  public bootstrapMdWidth?: number;
  public bootstrapXsWidth?: number;
  public bootstrapSmWidth?: number;

  public active: boolean = true;

  public formComponent: DynamicComponent<any> = new DynamicComponent<any>();

  constructor(
    options?: {
      bootstrapWidth?: number;
      bootstrapXlWidth?: number;
      bootstrapLgWidth?: number;
      bootstrapMdWidth?: number;
      bootstrapXsWidth?: number;
      bootstrapSmWidth?: number;
      active?: boolean;
      formComponent: DynamicComponent<any>;
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
