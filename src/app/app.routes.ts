import { RouterModule, Routes } from '@angular/router';

import{HomeComponent} from './components/home/home.component';
import {PartnersComponent} from "./components/partners/partners.component";
import {RolesComponent} from "./components/roles/roles.component";

import {AuthGuardService} from "./services/auth-guard.service";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'partners', component: PartnersComponent,
    canActivate: [AuthGuardService ]},
  { path: 'roles', component: RolesComponent },


  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES ,{ useHash:true });
