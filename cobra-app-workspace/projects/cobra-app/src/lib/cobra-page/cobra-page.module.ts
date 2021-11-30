import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from "./page.component";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    PageComponent
  ]
})
export class CobraPageModule {
}
