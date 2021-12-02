import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CobraAppComponent} from "./cobra-app.component";
import {CobraAppConfiguration} from "./cobra-app.configuration";
import {CobraNavbarModule} from "../cobra-navbar/cobra-navbar.module";
import {CobraAppLoadingModule} from "./cobra-app-loading/cobra-app-loading.module";
import {CobraNavbarService} from "../cobra-navbar/cobra-navbar.service";
import {CobraToolbarModule} from "../cobra-toolbar/cobra-toolbar.module";
import {RouterModule} from "@angular/router";
import { CobraAppRouterOutletComponent } from './cobra-app-router-outlet/cobra-app-router-outlet.component';
import {CobraPageModule} from "../cobra-page/cobra-page.module";
import { CobraAppContentComponent } from './cobra-app-content/cobra-app-content.component';

@NgModule({
  declarations: [
    CobraAppComponent,
    CobraAppRouterOutletComponent,
    CobraAppContentComponent
  ],
  imports: [
    CommonModule,
    CobraNavbarModule,
    CobraAppLoadingModule,
    CobraToolbarModule,
    RouterModule,
    CobraPageModule,
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
