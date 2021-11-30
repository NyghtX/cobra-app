import {CobraNavbarItemGuard} from "./cobra-navbar-item-guard";

/**
 * Item, das in der Navbar angezeigt wird
 */
export interface CobraNavbarItem {
  /**
   * Typ des Navbar Items
   */
  type: 'link' | 'menu'

  /**
   * Label, unter dem das Item angezeigt wird
   */
  label: string;

  /**
   * Herkunft des Navbar Items
   */
  origin?: string;

  /**
   * Guard der ermittelt, ob auf das Item zugegriffen werden kann
   */
  guard?: CobraNavbarItemGuard;
}


