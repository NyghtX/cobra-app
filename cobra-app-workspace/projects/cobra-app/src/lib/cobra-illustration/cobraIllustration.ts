/**
 * Bildet eine Illustration ab
 */
export interface CobraIllustration {
  /**
   * Identifier, über welchen die Illustration innerhalb der Anwendung genutzt werden kann
   */
  identifier: string;

  /**
   * Pfad, über welchen die Illustration zu finden ist
   * Exmpl: /assets/illustrations/ill.svg
   */
  path: string;

  /**
   * Beschreibung, welche der ein Screen-Reader als alternativtext vorlesen kann
   */
  description: string;
}
