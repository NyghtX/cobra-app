import {Component} from '@angular/core';
import {CobraAppLoadingService} from "./cobra-app-loading.service";

/**
 * Loading Anzeige der Applikation
 */
@Component({
  selector: 'cobra-app-loading',
  templateUrl: './cobra-app-loading.component.html',
  styleUrls: ['./cobra-app-loading.component.scss']
})
export class CobraAppLoadingComponent {

  /**
   * Ctor
   * @param loading Service, über den aktuelle Informationen über den aktuellen Ladestatus geholt werden
   */
  constructor(
    private loading: CobraAppLoadingService
  ) {
  }

  /**
   * Gibt den Text wieder, der in der Ladesicht angezeigt werden soll
   */
  getLoadingText() {
    return this.loading.getState().currentLoadingState || "Fertig - Es kann losgehen!";
  }
}
