import {CobraNavbarItem} from "./cobra-navbar-item";
import {CobraNavbarItemGuard} from "./cobra-navbar-item-guard";
import {DefaultCobraNavbarItemGuard} from "./default-cobra-navbar-item-guard";

/**
 * Basis für CobraNavbarItems
 */
export abstract class CobraNavbarItemBase implements CobraNavbarItem {

  protected constructor(
    public type: "link" | "menu",
    public label: string,
    public origin: string,
    public guard: CobraNavbarItemGuard = new DefaultCobraNavbarItemGuard()) {
  }

}
