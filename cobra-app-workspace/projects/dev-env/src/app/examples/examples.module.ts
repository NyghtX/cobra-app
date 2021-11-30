import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogExamplePageComponent } from './pages/dialog-example-page/dialog-example-page.component';
import { DialogExampleComponent } from './pages/dialog-example-page/dialog-example/dialog-example.component';
import {MatButtonModule} from "@angular/material/button";
import {CobraDialogModule} from "../../../../cobra-app/src/lib/cobra-dialog/cobra-dialog.module";



@NgModule({
  declarations: [
    DialogExamplePageComponent,
    DialogExampleComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
      CobraDialogModule
    ]
})
export class ExamplesModule { }
