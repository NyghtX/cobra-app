import {CobraAppPartLoadingState} from "./cobra-app-part-loading-state";
import {InjectionToken} from "@angular/core";

/**
 * Interface, das beschreibt, wie ein Indicator auszusehen hat, der der CobraApp mitteilt, dass
 * Teile der Anwendung noch nicht geladen wurden
 */
export interface CobraAppLoadingIndicator {
  /**
   * Gibt den aktuellen Ladestand des Parts der Anwendung
   */
  getState(): CobraAppPartLoadingState;
}

/**
 * Token für Indicators, die sich registrieren können um anzugeben, ob sie noch mit Laden beschäftigt sind
 */
export const COBRA_APP_IS_LOADING = new InjectionToken<string>('Cobra App Is Loading Indicator');
