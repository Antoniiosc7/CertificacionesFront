import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IstqbLibComponent } from './istqb-lib.component';

const routes: Routes = [
  {
    path: '',
    component: IstqbLibComponent,
    children: [
      // Define sub-routes for istqb-lib here
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IstqbLibRoutingModule {}
