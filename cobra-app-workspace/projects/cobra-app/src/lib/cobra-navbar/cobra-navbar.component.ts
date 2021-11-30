import {Component, QueryList, ViewChild} from '@angular/core';
import {CobraNavbarService} from "./cobra-navbar.service";
import {CobraNavbarItem} from "./cobra-navbar-item/cobra-navbar-item";
import {CobraNavbarItemHostDirective} from "./cobra-navbar-item-host.directive";

@Component({
  selector: 'cobra-navbar',
  templateUrl: './cobra-navbar.component.html',
  styleUrls: ['./cobra-navbar.component.scss']
})
export class CobraNavbarComponent {
  @ViewChild(CobraNavbarItemHostDirective, {static: true}) navbarItemHosts!: QueryList<CobraNavbarItemHostDirective>;


  constructor(
    private navbarService: CobraNavbarService,
  ) {
  }

  getNavbarItems(): Array<CobraNavbarItem> {
    return this.navbarService.getAccessibleItems();
  }
}
