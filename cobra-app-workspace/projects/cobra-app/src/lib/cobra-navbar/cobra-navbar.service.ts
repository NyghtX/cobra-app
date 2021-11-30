import {Injectable} from '@angular/core';
import {CobraNavbarItem} from "./cobra-navbar-item/cobra-navbar-item";
import {CobraNavbarMenu} from "./cobra-navbar-item/cobra-navbar-menu";
import {DynamicCobraNavbarItem} from "./cobra-navbar-item/dynamic-cobra-navbar.item";
import {BehaviorSubject} from "rxjs";

export type NavbarPosition =
  "Left" | "Right"

/**
 * Navbar Service, der für die Navbar steuert
 */
@Injectable({
  providedIn: 'root'
})
export class CobraNavbarService {

  /**
   * Dynamic Navbar Items, die auf der Navbar angezeigt werden sollen
   */
  dynamicNavbarItems: BehaviorSubject<Map<NavbarPosition, Map<string, DynamicCobraNavbarItem>>>;
  /**
   * Navbar Items, die in der Navbar angezeigt werden sollen
   * @private
   */
  private navbarItems: Array<CobraNavbarItem> = [];
  /**
   * Liste der dynamischen Navbar Items, die in der Navbar angezeigt werden sollen
   * @private
   */
  private _dynamicNavbarItems: Map<NavbarPosition, Map<string, DynamicCobraNavbarItem>> = new Map<NavbarPosition, Map<string, DynamicCobraNavbarItem>>();

  constructor() {
    this.dynamicNavbarItems = new BehaviorSubject<Map<NavbarPosition, Map<string, DynamicCobraNavbarItem>>>(this._dynamicNavbarItems);
  }

  /**
   * Fügt ein neues Item in die CobraNavbar
   * @param item
   */
  addNavbarItem(item: CobraNavbarItem) {
    let index = this.navbarItems.findIndex(x => x.label == item.label);
    if (index > -1 && item.type == "menu") {
      for (let i of (item as CobraNavbarMenu).items!)
        (this.navbarItems[index] as CobraNavbarMenu).items!.push(i)
    } else
      this.navbarItems.push(item);
  }

  /**
   * Gibt die Liste der Navbar Items wieder
   */
  getAccessibleItems(): Array<CobraNavbarItem> {
    return this.navbarItems ? this.navbarItems.filter(x => x.guard?.canAccess()) : [];
  }

  /**
   * Setzt ein dynamisches Navbar Item auf eine bestimmte Position
   * @param position Position, auf die das Navbar Item gesetzt werden soll
   * @param identifier Identifier des Navbar Items
   * @param item Item, das auf die Position gesetzt werden soll
   */
  setDynamicNavbarItemFor(position: NavbarPosition, identifier: string, item: DynamicCobraNavbarItem) {
    if (!this._dynamicNavbarItems.has(position))
      this._dynamicNavbarItems.set(position, new Map<string, DynamicCobraNavbarItem>());

    const items = this._dynamicNavbarItems.get(position);
    items!.set(identifier, item);
    this._dynamicNavbarItems.set(position, items!);

    this.dynamicNavbarItems.next(this._dynamicNavbarItems);
  }

}
