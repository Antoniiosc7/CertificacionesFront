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
import {PrivHomeComponent} from "./pages/priv-home/priv-home.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {CertificacionComponent} from "./pages/certificacion/certificacion.component";
import {AuthGuardWithRedirect} from "./guards/auth-guard-with-redirect.guard";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {AuthAdminGuard} from "./guards/auth-admin.guard";
import {ExamenesComponent} from "./pages/admin/examenes/examenes.component";
import {PreguntasComponent} from "./pages/admin/preguntas/preguntas.component";

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
    path: 'certificacion/:course/examenes',
    component: ExamenPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'certificacion/:course/examen/:id',
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
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthAdminGuard]
  },
  {
    path: 'admin/examenes',
    component: ExamenesComponent,
    canActivate: [AuthAdminGuard]
  },
  {
    path: 'admin/examenes/:id/preguntas',
    component: PreguntasComponent,
    canActivate: [AuthAdminGuard]
  },
  {
    path: 'certificacion/:id',
    component: CertificacionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'certificacion/:id/docs',
    component: DocsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'certificacion/:cert/projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard]
  }
];
