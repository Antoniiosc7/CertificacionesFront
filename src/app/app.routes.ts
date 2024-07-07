import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DocsComponent} from "./component/docs/docs.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {ExamenComponent} from "./pages/examen-page/examen/examen.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {ExamenPageComponent} from "./pages/examen-page/examen-page.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {VideosComponent} from "./pages/videos/videos.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'documentacion',
    component: DocsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'examenes',
    component: ExamenPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'examenes/examen/:id',
    component: ExamenComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'videos',
    component: VideosComponent,
    canActivate: [AuthGuard]
  }
];
