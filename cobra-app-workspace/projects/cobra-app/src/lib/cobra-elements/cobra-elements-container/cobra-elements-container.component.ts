import {Component, Input} from '@angular/core';
import {CobraElementPosition} from '../cobraElementPosition';
import {CobraElement} from '../cobraElement';
import {CobraElementType} from '../cobraElementType';

@Component({
  selector: 'cobra-elements-container',
  templateUrl: './cobra-elements-container.component.html',
  styleUrls: ['./cobra-elements-container.component.scss']
})
export class CobraElementsContainerComponent {
  cobraElementType = CobraElementType;
  private elementsValue: Array<CobraElement<any>> = [];

  get elements() {
    return this.elementsValue;
  }

  @Input()
  set elements(val: Array<CobraElement<any>>) {
    if (!val) {
      this.elementsValue = [];
      return;
    }
    this.elementsValue = val;
  }

  get leftElements() {
    return this.elements.filter(x => x.config.position === CobraElementPosition.left);
  }

  get rightElements() {
    return this.elements.filter(x => x.config.position === CobraElementPosition.right);
  }

  get centerElements() {
    return this.elements.filter(x => x.config.position === CobraElementPosition.center);
  }

}
