import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CobraUploadComponent} from './cobra-upload.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    CobraUploadComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    CobraUploadComponent
  ]
})
export class CobraUploadModule {
}
