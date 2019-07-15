import { NgModule } from '@angular/core';
import { AuthComponent } from './pages/auth/auth.component';
import { Routes, RouterModule } from "@angular/router";
import {BioComponent} from "./pages/bio/bio.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {MainComponent} from "./pages/main/main.component";
import {AuthGuardService} from "./auth/auth.guard";
import {RoleModule} from "./role/role.module";
import {RoleGuardService} from "./role/role.guard";

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        component: AuthComponent,
      },
      {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuardService],
        children: [
          {
            path: '',
            redirectTo: 'bio',
            pathMatch: 'full',
          },
          {
            path: 'bio',
            component: BioComponent,
            canActivate: [RoleGuardService],
            data: {
              roles: ['admin', 'user']
            }
          },
          {
            path: 'projects',
            component: ProjectsComponent,
            canActivate: [RoleGuardService],
            data: {
              roles: ['admin']
            }
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES), RoleModule],
  exports: [RouterModule],
})

export class AppRoutingModule { }
