import { Component, OnInit } from '@angular/core';
import {CobraComponent} from "../../cobra-component/cobra-component";
import {CobraPageService} from "../../cobra-page/cobra-page.service";

@Component({
  selector: 'cobra-app-content',
  templateUrl: './cobra-app-content.component.html',
  styleUrls: ['./cobra-app-content.component.scss']
})
export class CobraAppContentComponent implements OnInit {
  currentPage?: CobraComponent;

  constructor(
    private cobraPageService: CobraPageService
  ) { }

  ngOnInit(): void {
    this.cobraPageService.routerOutletSet.subscribe(val => {
      val.activateEvents.subscribe(nxt => {
        this.currentPage = nxt;
      })
    })
  }

}
