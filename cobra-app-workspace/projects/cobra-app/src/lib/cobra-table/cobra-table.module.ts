import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CobraTableComponent} from "./cobra-table.component";
import {CobraTableService} from "./cobra-table.service";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [
    CobraTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    FlexModule,
    FormsModule,
    MatSortModule
  ],
  exports: [
    CobraTableComponent
  ],
  providers: [
    CobraTableService
  ]
})
export class CobraTableModule { }
