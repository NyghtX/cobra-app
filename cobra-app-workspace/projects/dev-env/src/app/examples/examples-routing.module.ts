import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExamplesModule} from "./examples.module";
import {DialogExamplePageComponent} from "./pages/dialog-example-page/dialog-example-page.component";

const routes: Routes = [{
  path: "dialog",
  component: DialogExamplePageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes), ExamplesModule],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
