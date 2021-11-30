import {EventEmitter, Injectable, Output, ViewChild} from '@angular/core';
import {CobraElement} from '../cobra-elements/cobraElement';
import {NgForm} from '@angular/forms';
import {CobraComponentBase} from "../cobra-component/cobra-component-base";

@Injectable()
export abstract class CobraFormBase extends CobraComponentBase {
  /**
   * Title, der angezeigt werden soll
   */
  abstract title: string;


  /**
   * Referenz auf das Formular via Template Referenz Variable
   */
  @ViewChild('form') form?: NgForm;

  actionElements: Array<CobraElement<any>> = [];
  /**
   * Event für den Fall, dass die Komponente nicht mehr verwendet wird
   */
  @Output() done = new EventEmitter();

  async ngOnInit() {
    // => Action Elemente sammeln
    await new Promise((resolve) => {
      setTimeout(() => {
        this.actionElements = this.defineActionElements();
        resolve(null);
      });
    });
  }

  /**
   * Erzwingt die Validierung der Form
   * @protected
   */
  protected forceValidation() {
    if (!this.form?.valid) {
      this.form?.control.markAllAsTouched();
    }
  }

  protected abstract defineActionElements(): Array<CobraElement<any>>;
}
