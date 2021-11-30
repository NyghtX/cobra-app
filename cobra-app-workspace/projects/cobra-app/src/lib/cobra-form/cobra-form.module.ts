import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CobraFormComponent} from "./cobra-form.component";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    CobraFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    CobraFormComponent
  ]
})
export class CobraFormModule {
}
