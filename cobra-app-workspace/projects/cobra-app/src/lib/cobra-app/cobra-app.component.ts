import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import {CobraAppLoadingService} from "./cobra-app-loading/cobra-app-loading.service";

@Component({
  selector: 'cobra-app',
  templateUrl: './cobra-app.component.html',
  styleUrls: ['./cobra-app.component.scss'],
})
export class CobraAppComponent implements OnInit {
  /**
   * Template für die Navbar
   */
  @ContentChild('navbarTemplate', {static: false})
  navbarTemplateRef!: TemplateRef<any>;

  /**
   * Template für das Loading
   */
  @ContentChild('loadingTemplate', {static: false})
  loadingTemplateRef!: TemplateRef<any>;

  /**
   * Template für den Inhalt der App
   */
  @ContentChild('contentTemplate', {static: false})
  contentTemplateRef!: TemplateRef<any>;

  /**
   * Template für den Footer der App
   */
  @ContentChild('footerTemplate', {static: false})
  footerTemplateRef!: TemplateRef<any>;

  constructor(
    private loadingService: CobraAppLoadingService
  ) {
  }

  /**
   * Gibt an, ob die Application bereit ist, oder ob diese noch geladen werden muss
   */
  get appIsReady(): boolean {
    return this.loadingService.ready;
  }

  ngOnInit(): void {
  }


}
