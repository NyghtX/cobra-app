import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CobraDialogComponent} from "./cobra-dialog.component";
import {CobraDialogService} from "./cobra-dialog.service";
import {CobraDialogContentDirective} from "./cobra-dialog-content.directive";
import {CobraElementsModule} from "../cobra-elements/cobra-elements.module";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    CobraDialogComponent, CobraDialogContentDirective
  ],
  imports: [
    CommonModule,
    CobraElementsModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [
    CobraDialogService
  ],
  exports: [CobraDialogComponent, CobraDialogContentDirective]
})
export class CobraDialogModule {
}
