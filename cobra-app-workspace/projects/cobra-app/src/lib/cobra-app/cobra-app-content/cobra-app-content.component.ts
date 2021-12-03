import { Component, OnInit } from '@angular/core';
import {CobraComponent} from "../../cobra-component/cobra-component";
import {CobraPageService} from "../../cobra-page/cobra-page.service";
import {CobraToolbarService} from "../../cobra-toolbar/cobra-toolbar.service";

@Component({
  selector: 'cobra-app-content',
  templateUrl: './cobra-app-content.component.html',
  styleUrls: ['./cobra-app-content.component.scss']
})
export class CobraAppContentComponent implements OnInit {
  currentPage?: CobraComponent;

  constructor(
    private cobraPageService: CobraPageService,
    private toolbarService: CobraToolbarService
  ) { }

  ngOnInit(): void {
    this.cobraPageService.routerOutletSet.subscribe(val => {
      val.activateEvents.subscribe(nxt => {
        this.updatePage(nxt)
      })
    })
  }

  updatePage(nxt: any) {
    this.currentPage = nxt;

    // => Collect elements
    this.collectAndUpdateElements(nxt)
  }

  collectAndUpdateElements(nxt: any) {
    const actionElements = nxt.cobraComponent.actionElements;
    actionElements.forEach((element: any) => {
      this.toolbarService.addElement(element.build(nxt))
    });
  }

}
