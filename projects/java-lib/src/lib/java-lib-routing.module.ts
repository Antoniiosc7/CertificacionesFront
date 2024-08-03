import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavaLibComponent } from './java-lib.component';

const routes: Routes = [
  {
    path: '',
    component: JavaLibComponent,
    children: [
      // Define sub-routes for java-lib here
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaLibRoutingModule {}
