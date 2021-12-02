import {EventEmitter, Injectable} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CobraPageService {

  /**
   * Value of the router outlet
   * @private
   */
  private routerOutletValue?: RouterOutlet;


  /**
   * Sets the router outlet
   * @param value The router outlet
   */
  set routerOutlet(value: RouterOutlet) {
    this.routerOutletValue = value;
    this.routerOutletSet.emit(value);
  }

  /**
   * Gets the router outlet
   */
  get routerOutlet() {
    if(!this.routerOutletValue)
      throw new Error("No router outlet set");
    return this.routerOutletValue;
  }



  /**
   * Event Emitter for the router outlet
   */
  routerOutletSet: EventEmitter<RouterOutlet> = new EventEmitter<RouterOutlet>();

  constructor() { }
}
