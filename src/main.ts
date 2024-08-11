import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import {NgDocPageNavigationComponent, NgDocTocComponent, providePageSkeleton} from "@ng-doc/app";
import {DocfooterComponent} from "./app/component/docfooter/docfooter.component";

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    providePageSkeleton({
      breadcrumbs: DocfooterComponent,
      toc: NgDocTocComponent,
    }),
    provideRouter(
      [],
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),
  ],
}).catch((err: unknown) => console.error(err));
