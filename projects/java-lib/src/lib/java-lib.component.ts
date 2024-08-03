import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent} from "@ng-doc/app";

@Component({
  selector: 'lib-java-lib',
  standalone: true,
  imports: [
    RouterOutlet,
    NgDocSidebarComponent,
    NgDocNavbarComponent,
    NgDocRootComponent
  ],
  template: `
    <ng-doc-root>
      <ng-doc-navbar [leftContent]="leftContent">
        <ng-template #leftContent>
          <h3 class="brand" style="margin: 0">MyDocs</h3>
        </ng-template>
      </ng-doc-navbar>
      <ng-doc-sidebar></ng-doc-sidebar>
      <router-outlet></router-outlet>
    </ng-doc-root>

  `,
  styles: ``
})
export class JavaLibComponent {

}
