import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {WriteComponentsStartpageComponent} from './pages/write-components-startpage/write-components-startpage.component';

const testRoutes: Routes = [
  {
    path: '',
    component: WriteComponentsStartpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(testRoutes)],
  exports: [RouterModule]
})
export class WriteComponentsRoutingModule {
}
