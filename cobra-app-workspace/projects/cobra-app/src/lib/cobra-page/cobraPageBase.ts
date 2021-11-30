import {CobraPage} from "./cobraPage";
import {CobraElement} from "../cobra-elements/cobraElement";
import {CobraToolbarService} from "../cobra-toolbar/cobra-toolbar.service";
import {AfterViewInit, Injectable, OnDestroy} from "@angular/core";

/**
 * Base einer Cobra Page
 */
@Injectable()
export abstract class CobraPageBase implements CobraPage, OnDestroy, AfterViewInit {
  abstract pageTitle: string;

  constructor(
    private toolbar: CobraToolbarService
  ) {
  }

  ngOnDestroy(): void {
    this.toolbar.purgeElements();
  }

  ngAfterViewInit(): void {
    this.toolbar.addElements(this.defineActionElements());
  }

  protected abstract defineActionElements(): Array<CobraElement<any>>;

}
