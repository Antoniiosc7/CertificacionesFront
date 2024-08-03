import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { DocsComponent } from './app/pages/docs/docs.component';
import {JavaComponent} from "./app/pages/docs/java/java.component";

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideRouter(
      [
        {
          path: 'docs',
          component: DocsComponent,
        },
        {
          path: 'java',
          component: JavaComponent,
        },
      ],
      withInMemoryScrolling({
        scrollPositionRestoration: 'disabled',
        anchorScrolling: 'disabled',
      }),
    ),
  ],
}).catch((err: unknown) => console.error(err));
