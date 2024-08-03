import { Component } from '@angular/core';
import {NgDocRootComponent} from "@ng-doc/app";
import {NavigationComponent} from "../../../component/navigation/navigation.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-istqb',
  standalone: true,
  imports: [
    NgDocRootComponent,
    NavigationComponent,
    RouterOutlet
  ],
  template: `
    <body>
      <app-navigation></app-navigation>
    </body>
  `,  styleUrl: './istqb.component.css'
})
export class IstqbComponent {

}
