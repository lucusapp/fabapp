import { RouterModule, Routes } from '@angular/router';

import{HomeComponent} from './components/home/home.component';
import {PartnersComponent} from "./components/partners/partners.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'partners', component: PartnersComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES ,{ useHash:true });
