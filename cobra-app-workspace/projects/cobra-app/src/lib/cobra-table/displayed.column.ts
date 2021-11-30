import {TemplateRef} from '@angular/core';
import {SortDirection} from "@angular/material/sort";

/**
 * Column, die in der CobraTable angezeigt wird
 */
export interface DisplayedColumn<T> {

  /**
   * Name der Column, die angezeigt werden soll
   */
  name: string;

  /**
   * Label, mit dem die Column in der UI angezeigt werden soll
   */
  label?: string;

  /**
   * Beschreibt den Inhalt der Column über einen Callback
   * @param val Objekt, von dem etwas angezeigt werden soll
   */
  describe?: (val: T) => string;

  /**
   * Beschreibt den Inhalt der Column über einen async Callback
   * @param val Objekt, von dem etwas angezeigt werden soll
   */
  describeAsync?: (val: T) => Promise<string>;

  /**
   * Zeigt den Inhalt eines Templates in der Column an
   */
  template?: TemplateRef<any>;

  /**
   * Gibt an, ob und wie die Spalte sortierbar ist
   */
  sort: SortDirection;
}
