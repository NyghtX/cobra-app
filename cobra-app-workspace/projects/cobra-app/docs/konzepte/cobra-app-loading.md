# Cobra App Loading

## Einleitung
Um dem Anwender zu signalisieren, dass vor dem Start der Anwendung noch einige Vorgänge abgeschlossen werden müssen, wird diesem beim Aufruf der CobraApp zunächst die `<cobra-app-loading>` Komponente angezeigt. Diese gibt dem Anwender Informationen darüber, welche Prozesse aktuell ausgeführt werden.

## Implementierung
Um einen Prozess für das Loading zu implementieren, wird ein sog. `CobraAppLoadingIndicator` erzeugt. Dieser gibt Aufschluss über den Fortschritt des Prozesses in Form eines Textes. Gibt der Indicator null zurück, signalisiert dieser, dass er fertig ist.

Der Indicator wird als Provier für das Token `COBRA_APP_IS_LOADING` mit dem Keyword `multi: true` bereitgestellt.

## Beispiel
Indicator:

    @Injectable()
    export class MockLoadingIndicator implements CobraAppLoadingIndicator {
      constructor(
        private testService: TestService
      ) {}

      getState(): CobraAppPartLoadingState {
        return {
          currentLoadingState: this.testService.getState() ? null : "Testservice wird geladen"
        };
      }
    }

AppModule:

    providers: [
    ...

    {
      provide: COBRA_APP_IS_LOADING,
      useClass: MockLoadingIndicator,
      multi: true
    }

    ...
    ]


