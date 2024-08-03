import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterLink, RouterOutlet, Routes} from '@angular/router';
import {NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent} from "@ng-doc/app";
import {NavigationComponent} from "../../component/navigation/navigation.component";

@Component({
  selector: 'ng-doc-docs',
  templateUrl: `docs.component.html`,
  styleUrls: ['./docs.component.css',
    './docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    NgDocSidebarComponent,
    NgDocNavbarComponent,
    NgDocRootComponent,
    NavigationComponent,
    RouterLink
  ],
  standalone: true
})
export class DocsComponent {}

