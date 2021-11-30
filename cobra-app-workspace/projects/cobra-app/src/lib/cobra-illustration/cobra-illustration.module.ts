import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CobraIllustrationComponent} from "./cobra-illustration.component";
import {CobraIllustrationService} from "./cobra-illustration.service";


@NgModule({
  declarations: [
    CobraIllustrationComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CobraIllustrationService
  ],
  exports: [
    CobraIllustrationComponent
  ]
})
export class CobraIllustrationModule {
}
