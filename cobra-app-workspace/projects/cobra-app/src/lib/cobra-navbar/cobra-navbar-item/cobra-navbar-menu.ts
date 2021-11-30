import {CobraNavbarItem} from "./cobra-navbar-item";
import {CobraNavbarItemBase} from "./cobra-navbar-item-base";
import {CobraNavbarItemGuard} from "./cobra-navbar-item-guard";

/**
 * Menüitem, das in der Navbar angezeigt wird
 */
export class CobraNavbarMenu extends CobraNavbarItemBase {

  /**
   * Items, die in dem Menü angezeigt werden sollen
   */
  items?: Array<CobraNavbarItem>;

  constructor(label: string, origin: string, items: Array<CobraNavbarItem>, guard?: CobraNavbarItemGuard) {
    super("menu", label, origin, guard);
    this.items = items;

  }
}
