import {Component, Input} from '@angular/core';
import {DynamicComponent} from '../../../shared/model/dynamic-component.class';
import {SharedEmptyComponent} from '../../../shared/components/shared-empty/shared-empty.component';
import {SimpleTableColumn} from '../../model/simple-table-column.class';
import {ObjectService} from '../../../shared/services/object.service';

@Component({
  selector: 'app-write-components-table',
  templateUrl: './write-components-table.component.html',
})
export class WriteComponentsTableComponent {
  @Input()
  public tableColumns: SimpleTableColumn[] = [];

  @Input()
  public tableData: any[] = [];

  constructor(
    public objectService: ObjectService,
  ) {
  }

  public getDynamicComponent(column: SimpleTableColumn, row: any): DynamicComponent<any> {
    let dynamicComponent: DynamicComponent<any> = new DynamicComponent();

    dynamicComponent.moduleType = column.dynamicComponent?.moduleType;
    dynamicComponent.componentType = column.dynamicComponent?.componentType ?? SharedEmptyComponent;
    dynamicComponent.inputs = column.dynamicComponent?.inputs;
    dynamicComponent.outputs = column.dynamicComponent?.outputs;

    if (column.dynamicComponentRowInputValues) {
      for (let rowInputValue of column.dynamicComponentRowInputValues) {
        dynamicComponent.inputs[rowInputValue.key] = this.getAttributeFromObject(
          row,
          rowInputValue.value,
          null,
          column
        );
      }
    }

    return dynamicComponent;
  }

  public getAttributeFromObject(
    data: any,
    cellName: string,
    ifEmptyContent: any,
    visibleColumn: SimpleTableColumn | undefined
  ): any {
    switch (cellName) {
      case '*':
        return data;
      case '**':
        return {
          visibleColumn: visibleColumn,
          data: data
        };
      default:
        return this.objectService.getAttributeFromObject(data, cellName, ifEmptyContent);
    }
  }
}
