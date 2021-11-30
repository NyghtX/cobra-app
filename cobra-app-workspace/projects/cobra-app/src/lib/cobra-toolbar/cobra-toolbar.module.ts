import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CobraToolbarComponent} from "./cobra-toolbar.component";
import {CobraElementsModule} from "../cobra-elements/cobra-elements.module";
import {CobraToolbarService} from "./cobra-toolbar.service";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    CobraToolbarComponent
  ],
  imports: [
    CommonModule,
    CobraElementsModule,
    MatToolbarModule
  ],
  exports: [
    CobraToolbarComponent
  ],
  providers: [
    CobraToolbarService
  ]
})
export class CobraToolbarModule {
}
