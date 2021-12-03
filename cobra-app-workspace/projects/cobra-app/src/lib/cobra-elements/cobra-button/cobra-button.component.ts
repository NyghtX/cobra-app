import {Component, Input, OnInit} from '@angular/core';
import {CobraButtonDefinition} from "./cobraButtonDefinition";

@Component({
  selector: 'cobra-button',
  templateUrl: './cobra-button.component.html',
  styleUrls: ['./cobra-button.component.scss']
})
export class CobraButtonComponent implements OnInit {

  @Input()
  element?: CobraButtonDefinition;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Executes the click event for the button
   */
  onClick() {
    if(this.element?.config.cb)
      this.element?.config.cb(this.element.config.context);
  }
}
