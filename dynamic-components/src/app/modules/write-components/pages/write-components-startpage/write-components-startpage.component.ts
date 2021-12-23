import {Component, EventEmitter, OnInit} from '@angular/core';
import {SimpleTableColumn} from '../../model/simple-table-column.class';
import {DynamicComponent} from '../../../shared/model/dynamic-component.class';
import {SharedTextClickComponent} from '../../../shared/components/shared-text-click/shared-text-click.component';
import {KeyValuePair} from '../../../shared/model/key-value-pair.class';

@Component({
  selector: 'app-write-components-startpage',
  templateUrl: './write-components-startpage.component.html',
})
export class WriteComponentsStartpageComponent implements OnInit {
  public tableColumns: SimpleTableColumn[] = [];
  public tableData: any[] = [];
  public clickedText: EventEmitter<any> = new EventEmitter<any>();

  public ngOnInit(): void {
    this.initTableColumns();
    this.initTableData();

    this.initClickedTextEmitter();
  }

  public initClickedTextEmitter(): void {
    this.clickedText.subscribe(
      data => {
        console.log('data', data);
      }
    );
  }

  public initTableColumns(): void {
    this.tableColumns = [
      new SimpleTableColumn({
        title: 'Firstname',
        nameInData: 'firstname',
        dynamicComponent: new DynamicComponent<SharedTextClickComponent>({
          componentType: SharedTextClickComponent,
          inputs: {
            emitValue: 'movie2'
          },
          outputs: {
            clickedText: this.clickedText
          }
        }),
        dynamicComponentRowInputValues: [
          new KeyValuePair('text', 'movie')
        ]
      }),
      new SimpleTableColumn({
        title: 'Lastname',
        nameInData: 'lastname',
      }),
      new SimpleTableColumn({
        title: 'Movie',
        nameInData: 'movie',
      }),
      new SimpleTableColumn({
        title: 'Movie',
        nameInData: 'a.b',
      }),
    ];
  }

  public initTableData(): void {
    this.tableData = [
      {
        firstname: 'Chuck',
        lastname: 'Norris',
        movie: 'The Expandables',
        a: {
          b: 'adsf'
        }
      },
      {
        firstname: 'Bruce',
        lastname: 'Willis',
        movie: 'Die hard',
        a: {
          b: 'adsf'
        }
      },
      {
        firstname: 'Angelina',
        lastname: 'Jolie',
        movie: 'Lara Croft',
        a: {
          b: 'adsf'
        }
      },
      {
        firstname: 'Arnold',
        lastname: 'Schwarzenegger',
        movie: 'Terminator',
        a: {
          b: 'adsf'
        }
      },
      {
        firstname: 'Scarlet',
        lastname: 'Johansson',
        movie: 'Avengers',
        a: {
          b: 'adsf'
        }
      }
    ];
  }
}
