import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BenutzerinfoComponent} from './benutzerinfo/benutzerinfo.component';
import {CobraNavbarModule} from "../../../cobra-app/src/lib/cobra-navbar/cobra-navbar.module";
import {CobraAppModule} from "../../../cobra-app/src/lib/cobra-app/cobra-app.module";

@NgModule({
  declarations: [
    AppComponent,
    BenutzerinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CobraNavbarModule,
    CobraAppModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
