import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CobraElementsContainerComponent} from "./cobra-elements-container/cobra-elements-container.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import { CobraButtonComponent } from './cobra-button/cobra-button.component';


@NgModule({
  declarations: [CobraElementsContainerComponent, CobraButtonComponent],
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
