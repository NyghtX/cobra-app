import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CobraFormComponent} from "./cobra-form.component";
import {MatCardModule} from "@angular/material/card";
import {CobraComponentModule} from "../cobra-component/cobra-component.module";


@NgModule({
  declarations: [
    CobraFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CobraComponentModule
  ],
  exports: [
    CobraFormComponent
  ]
})
export class CobraFormModule {
}
