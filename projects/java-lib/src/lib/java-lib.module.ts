import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaLibComponent } from './java-lib.component';
import { JavaLibRoutingModule } from './java-lib-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JavaLibRoutingModule,
    JavaLibComponent
  ]
})
export class JavaLibModule { }
