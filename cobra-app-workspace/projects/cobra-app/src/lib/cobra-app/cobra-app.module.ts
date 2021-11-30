import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CobraAppComponent} from "./cobra-app.component";
import {CobraAppConfiguration} from "./cobra-app.configuration";
import {CobraNavbarModule} from "../cobra-navbar/cobra-navbar.module";
import {CobraAppLoadingModule} from "./cobra-app-loading/cobra-app-loading.module";
import {CobraNavbarService} from "../cobra-navbar/cobra-navbar.service";
import {CobraToolbarModule} from "../cobra-toolbar/cobra-toolbar.module";

@NgModule({
  declarations: [
    CobraAppComponent
  ],
    imports: [
        CommonModule,
        CobraNavbarModule,
        CobraAppLoadingModule,
        CobraToolbarModule,
    ],
  exports: [
    CobraAppComponent
  ]
})
export class CobraAppModule {


  public static configure(config: CobraAppConfiguration): ModuleWithProviders<CobraAppModule> {

    return {
      ngModule: CobraAppModule,
      providers: [
        CobraNavbarService,
      ]
    };
  }


}
