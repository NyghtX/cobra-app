import {Component, Input} from '@angular/core';
import {CobraNavbarItem} from "./cobra-navbar-item";
import {CobraNavbarMenu} from "./cobra-navbar-menu";
import {CobraNavbarLink} from "./cobra-navbar-link";

@Component({
  selector: 'cobra-navbar-item',
  templateUrl: './cobra-navbar-item.component.html',
  styleUrls: ['./cobra-navbar-item.component.scss']
})
export class CobraNavbarItemComponent {

  /**
   * Item, das angezeigt werden soll
   */
  @Input()
  item!: CobraNavbarItem;

  getMenuItems(): Array<CobraNavbarItem> {
    return (this.item as CobraNavbarMenu).items || [];
  }

  getRouterLink(subItem: CobraNavbarItem) {
    return (subItem as CobraNavbarLink).to;
  }
}
