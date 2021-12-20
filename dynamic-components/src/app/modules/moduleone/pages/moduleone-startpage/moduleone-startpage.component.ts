import {Component} from '@angular/core';
import {DynamicComponent} from '../../../../../../projects/sso-dynamic/src/lib/model/dynamic-component.class';
import {ModuletwoModule} from '../../../moduletwo/moduletwo.module';
import {ModuletwoStartpageComponent} from '../../../moduletwo/pages/moduletwo-startpage/moduletwo-startpage.component';
import {ModuleoneLoadedComponent} from '../../components/moduleone-loaded/moduleone-loaded.component';

@Component({
  selector: 'sso-startpage',
  templateUrl: './moduleone-startpage.component.html',
})
export class ModuleoneStartpageComponent {
  public dynamicComponent: DynamicComponent = new DynamicComponent(
    {
      componentType: ModuleoneLoadedComponent,
    }
  );

  public dynamicComponentFromSubmodule: DynamicComponent = new DynamicComponent(
    {
      moduleType: ModuletwoModule,
      componentType: ModuletwoStartpageComponent,
    }
  );
}
