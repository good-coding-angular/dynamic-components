import {Component, EventEmitter, OnInit} from '@angular/core';
import {DynamicComponent} from '../../../shared/model/dynamic-component.class';
import {SharedTextClickComponent} from '../../../shared/components/shared-text-click/shared-text-click.component';
import {SharedIconComponent} from '../../../shared/components/shared-icon/shared-icon.component';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-write-components-startpage',
  templateUrl: './write-components-startpage.component.html',
})
export class WriteComponentsStartpageComponent implements OnInit {
  public dynamicComponents: DynamicComponent<any>[] = [];

  public textClicked: EventEmitter<any> = new EventEmitter<any>();

  public ngOnInit(): void {
    this.initDropdown();
    this.initTextClickedBehaviour();
  }

  public initDropdown(): void {
    this.dynamicComponents = [
      new DynamicComponent<SharedTextClickComponent>({
        componentType: SharedTextClickComponent,
        inputs: {
          text: 'Shared Text Click Component 1',
        },
        outputs: {
          clickedText: this.textClicked,
          emitValue: {
            test: 'test'
          }
        },
      }),
      new DynamicComponent<SharedTextClickComponent>({
        componentType: SharedTextClickComponent,
        inputs: {
          text: 'Shared Text Click Component 2',
          emitTextIfValueIsNotPresent: true,
        },
        outputs: {
          clickedText: this.textClicked
        },
      }),
      new DynamicComponent<SharedIconComponent>({
        componentType: SharedIconComponent,
        inputs: {
          icon: SolidIcons.faBeer,
        },
      }),
    ];
  }

  public initTextClickedBehaviour(): void {
    this.textClicked.subscribe(
      data => {
        console.log('data', data);
      }
    );
  }
}
