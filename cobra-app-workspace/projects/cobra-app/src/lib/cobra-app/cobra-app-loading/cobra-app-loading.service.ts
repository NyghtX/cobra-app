import {Inject, Injectable, Optional} from '@angular/core';
import {COBRA_APP_IS_LOADING, CobraAppLoadingIndicator} from "./cobra-app-loading-indicator";
import {CobraAppPartLoadingState} from "./cobra-app-part-loading-state";

/**
 * Service der die CobraApp wissen lässt, ob alle Implementierungen bereit sind
 */
@Injectable({
  providedIn: 'root'
})
export class CobraAppLoadingService implements CobraAppLoadingIndicator {

  /**
   * Ctor
   * @param loadingIndicators Registrierte LoadingIndicators, die die App über ihren aktuellen Status informieren
   */
  constructor(
    @Optional() @Inject(COBRA_APP_IS_LOADING) private loadingIndicators: CobraAppLoadingIndicator[]
  ) {

  }

  /**
   * Gibt an, ob die Applikation bereit ist
   */
  get ready(): boolean {
    return this.getState().currentLoadingState == null;
  }

  /**
   * Aktueller Informationen zum Loading State in Form eines Textes
   * Null, wenn alle Prozesse abgeschlossen ist
   */
  getState(): CobraAppPartLoadingState {
    return {
      currentLoadingState: this.loadingIndicators ? this.getLoadingIndicatorValue() : null
    };
  }

  private getLoadingIndicatorValue(): string | null {
    let returnValue = '';
    for (const value of this.loadingIndicators) {
      // => Finished
      if (!value.getState().currentLoadingState)
        continue;

      if (returnValue.length > 0)
        returnValue += ', ';

      returnValue += value.getState().currentLoadingState;
    }
    return returnValue.length > 0 ? returnValue : null;

  }
}
