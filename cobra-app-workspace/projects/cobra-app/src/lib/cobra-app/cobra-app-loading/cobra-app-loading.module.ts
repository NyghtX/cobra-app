import {NgModule} from '@angular/core';
import {CobraAppLoadingComponent} from "./cobra-app-loading.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    CobraAppLoadingComponent
  ],
  imports: [
    MatProgressSpinnerModule
  ],

  exports: [
    CobraAppLoadingComponent
  ]
})
export class CobraAppLoadingModule {
}
