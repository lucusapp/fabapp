import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {APP_ROUTING} from './app.routes';

//services
import {FabappService} from './services/fabapp.service';
import {FireservService} from './services/fireserv.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PartnersComponent } from './components/partners/partners.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [FabappService,
              FireservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
