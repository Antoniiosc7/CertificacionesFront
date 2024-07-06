import { NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent } from "@ng-doc/app";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./component/header/header.component";
import {FooterComponent} from "./component/footer/footer.component";
import {DocsComponent} from "./component/docs/docs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, DocsComponent, RouterOutlet, NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Certificaciones';
}
