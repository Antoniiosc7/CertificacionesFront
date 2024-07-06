import { Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {DocsComponent} from "./component/docs/docs.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {ExamenComponent} from "./pages/examen-page/examen/examen.component";

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
    path: 'examen',
    component: ExamenComponent
  }
];
