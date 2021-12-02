import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CobraPageService} from "../../cobra-page/cobra-page.service";

@Component({
  selector: 'cobra-app-router-outlet',
  templateUrl: './cobra-app-router-outlet.component.html',
  styleUrls: ['./cobra-app-router-outlet.component.scss']
})
export class CobraAppRouterOutletComponent implements AfterViewInit {

  @ViewChild(RouterOutlet) outlet!: RouterOutlet;

  constructor(
    private cobraPageService: CobraPageService
  ) { }

  ngAfterViewInit(): void {
    this.cobraPageService.routerOutlet = this.outlet;
  }

}
