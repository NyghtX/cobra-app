import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CobraDialogComponent} from "./cobra-dialog.component";
import {CobraDialogService} from "./cobra-dialog.service";
import {CobraDialogContentDirective} from "./cobra-dialog-content.directive";
import {CobraElementsModule} from "../cobra-elements/cobra-elements.module";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {CobraFormModule} from "../cobra-form/cobra-form.module";
import {CobraComponentModule} from "../cobra-component/cobra-component.module";


@NgModule({
  declarations: [
    CobraDialogComponent, CobraDialogContentDirective
  ],
  imports: [
    CommonModule,
    CobraElementsModule,
    MatCardModule,
    MatDialogModule,
    CobraFormModule,
    CobraComponentModule
  ],
  providers: [
    CobraDialogService
  ],
  exports: [CobraDialogComponent, CobraDialogContentDirective]
})
export class CobraDialogModule {
}
