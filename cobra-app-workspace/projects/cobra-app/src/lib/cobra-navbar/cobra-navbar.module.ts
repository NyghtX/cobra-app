import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CobraNavbarComponent} from './cobra-navbar.component';
import {CobraNavbarService} from "./cobra-navbar.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {CobraNavbarItemComponent} from './cobra-navbar-item/cobra-navbar-item.component';
import { CobraNavbarItemHostDirective } from './cobra-navbar-item-host.directive';


@NgModule({
  declarations: [
    CobraNavbarComponent,
    CobraNavbarItemComponent,
    CobraNavbarItemHostDirective,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule
  ],
  providers: [
    CobraNavbarService
  ],
  exports: [
    CobraNavbarComponent
  ]
})
export class CobraNavbarModule {
}
