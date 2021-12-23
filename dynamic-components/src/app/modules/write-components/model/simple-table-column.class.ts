import {DynamicComponent} from '../../shared/model/dynamic-component.class';
import {KeyValuePair} from '../../shared/model/key-value-pair.class';

export class SimpleTableColumn {
  public title: string = '';
  public nameInData?: string;
  public dynamicComponent?: DynamicComponent<any>;
  public dynamicComponentRowInputValues: KeyValuePair[] = [];

  constructor(config?: {
    title?: string,
    nameInData?: string,
    dynamicComponent?: DynamicComponent<any>,
    dynamicComponentRowInputValues?: KeyValuePair[],
  }) {
    if (!!config) {
      if (config.title) {
        this.title = config.title;
      }

      if (config.nameInData) {
        this.nameInData = config.nameInData;
      }

      if (config.dynamicComponent) {
        this.dynamicComponent = config.dynamicComponent;
      }

      if (config.dynamicComponentRowInputValues) {
        this.dynamicComponentRowInputValues = config.dynamicComponentRowInputValues;
      }
    }
  }
}
