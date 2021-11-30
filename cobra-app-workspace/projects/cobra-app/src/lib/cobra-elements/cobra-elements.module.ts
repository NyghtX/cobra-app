import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CobraElementsContainerComponent} from "./cobra-elements-container/cobra-elements-container.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [CobraElementsContainerComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexModule
  ],
  exports: [CobraElementsContainerComponent]
})
export class CobraElementsModule {
}
