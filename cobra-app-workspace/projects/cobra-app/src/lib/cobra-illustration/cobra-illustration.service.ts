import {Injectable} from '@angular/core';
import {CobraIllustration} from './cobraIllustration';
import {CobraIllustrationComponent} from './cobra-illustration.component';

@Injectable({
  providedIn: 'root'
})
export class CobraIllustrationService {

  /**
   * Vorhandene Liste der Illustrations
   */
  private illustrations = new Map<string, CobraIllustration>();

  private illustrationComponents = new Map<string, CobraIllustrationComponent>();

  /**
   * Initialisiert den Illustration-Service mit einer Liste an Illustrationen
   * @param illustrations Liste der Illustrationen, die in der Anwendung genutzt werden
   * @param preload Gibt an, ob die initialisierten Images preloaded werden sollen
   */
  initIllustrations(illustrations: Array<CobraIllustration>, preload = true) {
    for (let i = 0; i < illustrations.length; i++) {
      const illustration = illustrations[i];

      // => Prüfen, ob bereits eine Illustration mit dem Identifier registriert wurde
      if (this.illustrations.has(illustration.identifier)) {
        throw new Error(`Es wurde bereits eine Illustration mit dem Identifier ${illustration.identifier} registriert.`);
      }

      if (preload) {
        // => Illustration Pre-Loaden (Hierdurch werden die Bilder beim Initialisieren geladen und nicht erst dann, wenn sie benötigt werden)
        const img = new Image();
        img.src = illustration.path;
      }

      // => Illustration registrieren
      this.illustrations.set(illustration.identifier, illustration);
    }
  }

  /**
   * Setzt die Illustration in einem Illustration-Container
   * @param forContainer Identifier des Containers, dessen Illustration geändert werden soll
   * @param illustration Identifier des Illustration, die angezeigt werden soll
   */
  setIllustration(forContainer: string, illustration: string) {
    // => Prüfen, ob der Container registriert wurde
    if (!this.illustrationComponents.has(forContainer)) {
      throw new Error(`Es wurde keine Illustration-Component mit dem Identifier ${forContainer} registriert.`);
    }

    // => Prüfen, ob die Illustration registriert wurde
    if (!this.illustrations.has(illustration)) {
      throw new Error(`Es wurde keine Illustration mit dem Identifier ${illustration} registriert.`);
    }

    // => SetTimeout mit 0 um sich vom Angular Lifecycle Thread zu lösen
    setTimeout(() => {
      // => Illustration setzen
      this.illustrationComponents.get(forContainer)!.illustration = this.illustrations.get(illustration)!;
    }, 0);

  }

  /**
   * Registriert eine IllustrationComponent, welche dann über den Service angesprochen werden kann
   * @param illustrationComponent Komponente, die registriert werden soll
   */
  register(illustrationComponent: CobraIllustrationComponent) {
    this.illustrationComponents.set(illustrationComponent.identifier!, illustrationComponent);
  }

  /**
   * Deregistriert eine IllustrationComponent
   * @param illustrationComponent Komponente, die deregistriert werden soll
   */
  deregister(illustrationComponent: CobraIllustrationComponent) {
    this.illustrationComponents.delete(illustrationComponent.identifier!);
  }
}
