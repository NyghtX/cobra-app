/**
 * Aktueller Ladestatus eines Teils der Anwendung
 */
export interface CobraAppPartLoadingState {
  /**
   * Aktueller Informationen zum Loading State in Form eines Textes
   * Null, wenn der Prozess abgeschlossen ist
   */
  currentLoadingState: string | null;
}
