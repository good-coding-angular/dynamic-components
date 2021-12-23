import {NgModule} from '@angular/core';
import {WriteComponentsStartpageComponent} from './pages/write-components-startpage/write-components-startpage.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../shared/shared.module';
import {WriteComponentsRoutingModule} from './write-components-routing.module';
import {WriteComponentsDropdownComponent} from './components/write-components-dropdown/write-components-dropdown.component';
import {SsoDynamicModule} from '../../../../projects/sso-dynamic/src/lib/sso-dynamic.module';

@NgModule({
  declarations: [
    WriteComponentsStartpageComponent,
    WriteComponentsDropdownComponent,
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
