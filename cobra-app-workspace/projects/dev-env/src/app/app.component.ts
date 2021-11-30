import {AfterViewInit, Component} from '@angular/core';
import {CobraNavbarService} from "../../../cobra-app/src/lib/cobra-navbar/cobra-navbar.service";
import {BenutzerinfoComponent} from "./benutzerinfo/benutzerinfo.component";
import {DynamicCobraNavbarItem} from "../../../cobra-app/src/lib/cobra-navbar/cobra-navbar-item/dynamic-cobra-navbar.item";
import {CobraNavbarLink} from "../../../cobra-app/src/lib/cobra-navbar/cobra-navbar-item/cobra-navbar-link";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'dev-env';


  ngAfterViewInit(): void {

  }

  constructor(
    private navbar: CobraNavbarService
  ) {
    navbar.setDynamicNavbarItemFor("Right", "123", new DynamicCobraNavbarItem(BenutzerinfoComponent));
    navbar.addNavbarItem(new CobraNavbarLink("Dialog", "examples/dialog", "me"))
  }

  test() {
  }
}
