import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CobraComponentComponent } from './cobra-component.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    CobraComponentComponent
  ],
  exports: [
    CobraComponentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class CobraComponentModule { }
