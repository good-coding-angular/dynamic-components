import {NgModule} from '@angular/core';
import {WriteComponentsStartpageComponent} from './pages/write-components-startpage/write-components-startpage.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';
import {WriteComponentsRoutingModule} from './write-components-routing.module';
import {WriteComponentsDropdownComponent} from './components/write-components-dropdown/write-components-dropdown.component';
import {SsoDynamicModule} from '../../../../projects/sso-dynamic/src/lib/sso-dynamic.module';
import {WriteComponentsTableComponent} from './components/write-components-table/write-components-table.component';
import {WriteComponentsFormComponent} from './components/write-components-form/write-components-form.component';
import {WriteComponentsFormInputComponent} from './components/write-components-form-input/write-components-form-input.component';

@NgModule({
  declarations: [
    WriteComponentsStartpageComponent,
    WriteComponentsDropdownComponent,
    WriteComponentsTableComponent,
    WriteComponentsFormComponent,
    WriteComponentsFormInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    WriteComponentsRoutingModule,
    SsoDynamicModule,
  ]
})
export class WriteComponentsModule {}
