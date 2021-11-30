# Cobra App

## Einleitung

Die Cobra-App-Komponente bildet den Startpunkt der Cobra-Applikation. Sie sollte im Startpunkt der Angular-App
eingebunden und konfiguriert werden.

## Voraussetzungen

Um die Cobra-App-Komponente nutzen zu können, muss im entsprechenden Modul das CobraAppModule eingebunden und
konfiguriert werden. Nähere Details hierzu sind in der Anleitung zum CobraAppModule zu entnehmen.

## Implementierung

Um die Cobra-App-Komponente in die Anwendung zu integrieren muss diese lediglich in die Komponente eingebettet werden:

    <cobra-app>
      <!-- Inhalt der Applikation z.B Router Outlet -->
      <router-outlet></router-outlet>
    </cobra-app>

## Aufbau

Die Cobra App besteht im default-Zustand aus folgenden Teilen:

1. Navbar
2. Content
3. Footer

Die jeweiligen Teile können mittels Austausch der Template-Referenz ersetzt werden. Nähere Details hierzu sind in den
Anleitungen zu den jeweiligen Parts zu finden.

## Navbar

Die Navbar der CobraApp besteht aus einer Cobra-Navbar. Der Inhalt dieser lässt sich wie in der Anleitung zu dieser
beschrieben Anpassen. Alternativ kann die Navbar über ein anderes Template ersetzt werden. Zum Beispiel:

    <cobra-app>
      <ng-template #navbarTemplate>
        Neuer Header Inhalt
      </ng-template>

      ...

    </cobra-app>

## Content

Der Main-Content der Cobra App lässt sich im Default-Zustand in die `<cobra-app>` Tags integrieren. Dadurch landet
dieser automatisch im `<main>` Bereich der Anwendung. Alternativ kann die Navbar über ein anderes Template ersetzt
werden. Zum Beispiel:

    <cobra-app>

      <ng-template #contentTemplate>
        Neuer Inhalt
      </ng-template>

    </cobra-app>

## Footer

Im Footer befindet sich im Default-Zustand die CobraToolbar. Hier werden dynamisch Buttons und Funktionen hinterlegt,
die für die aktuell angezeigte Seite relevant sind. Nähere Details sind in der Dokumentation zur CobraToolbar zu finden.
Alternativ kann die Navbar über ein anderes Template ersetzt werden. Zum Beispiel:

    <cobra-app>

      <ng-template #footerTemplate>
        Neuer Footer Inhalt
      </ng-template>

    </cobra-app>
