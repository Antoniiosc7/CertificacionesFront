import { Component } from '@angular/core';
import {NgDocRootComponent} from "@ng-doc/app";
import {RouterOutlet} from "@angular/router";
import {NavigationComponent} from "../../../component/navigation/navigation.component";

@Component({
  selector: 'app-java',
  standalone: true,
  imports: [
    NgDocRootComponent,
    RouterOutlet,
    NavigationComponent
  ],
  template: `
    <body>
      <app-navigation></app-navigation>
      <router-outlet></router-outlet>
    </body>
  `,
  styleUrl: './java.component.css'
})
export class JavaComponent {

}
