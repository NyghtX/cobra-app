import {Injectable} from '@angular/core';
import {CobraElement} from "../cobra-elements/cobraElement";

@Injectable({
  providedIn: 'root'
})
export class CobraToolbarService {
  private elementsValue = new Array<CobraElement<any>>();

  constructor() {
  }

  /**
   * Elemente, die in der Toolbar angezeigt werden sollen
   */
  get elements() {
    return this.elementsValue;
  }

  /**
   * Fügt der Toolbar ein neues Element hinzu
   * @param element ToolbarElement, dass hinzugefügt werden soll
   */
  addElement(element: CobraElement<any>) {
    this.elementsValue.push(element);
  }

  /**
   * Fügt der Toolbar mehrere Elemente hinzu
   * @param elements Elemente, die der Toolbar hinzugefügt werden sollen
   */
  addElements(elements: Array<CobraElement<any>>) {
    for (const element of elements)
      this.addElement(element);
  }

  /**
   * Entfernt ein Element aus der Toolbar
   * @param element Element, das aus der Toolbar entfernt werden soll
   */
  removeElement(element: CobraElement<any>) {
    this.elementsValue = this.elementsValue.filter(obj => obj.config.id !== element.config.id);
  }

  /**
   * Entfernt mehrere Elemente aus der Toolbar
   * @param elements Elemente, die aus der Toolbar entfernt werden sollen
   */
  removeElements(elements: Array<CobraElement<any>>) {
    for (const element of elements) {
      this.removeElement(element);
    }
  }

  /**
   * Entfernt alle Elemente aus der Toolbar
   */
  purgeElements() {
    this.elementsValue.splice(0, this.elementsValue.length);
  }
}
