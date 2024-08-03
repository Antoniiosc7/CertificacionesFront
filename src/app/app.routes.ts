import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {ExamenComponent} from "./pages/examen-page/examen/examen.component";
import {ExamenPageComponent} from "./pages/examen-page/examen-page.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {VideosComponent} from "./pages/videos/videos.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {DocsComponent} from "./pages/docs/docs.component";
import {JavaComponent} from "./pages/docs/java/java.component";
import {IstqbComponent} from "./pages/docs/istqb/istqb.component";
import {PrivHomeComponent} from "./pages/priv-home/priv-home.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {CertificacionComponent} from "./pages/certificacion/certificacion.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'home',
    component: PrivHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'examenes/:course',
    component: ExamenPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'examenes/:course/examen/:id',
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
  },

  {
    path: 'docs/java',
    component: JavaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'docs/istqb',
    component: IstqbComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'certificacion/:id',
    component: CertificacionComponent,
    canActivate: [AuthGuard]
  }
];
