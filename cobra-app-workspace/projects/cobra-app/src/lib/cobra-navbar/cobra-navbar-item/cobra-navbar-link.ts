import {CobraNavbarItemBase} from "./cobra-navbar-item-base";
import {CobraNavbarItemGuard} from "./cobra-navbar-item-guard";

/**
 * Link, der in der Navbar angezeigt wird
 */
export class CobraNavbarLink extends CobraNavbarItemBase {
  /**
   * Pfad, auf den der Link zeigen soll
   */
  to: string;


  constructor(label: string, to: string, origin: string, guard?: CobraNavbarItemGuard) {
    super("link", label, origin, guard);
    this.to = to;
  }
}
