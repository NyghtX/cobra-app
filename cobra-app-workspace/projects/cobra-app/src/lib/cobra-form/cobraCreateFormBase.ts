import {CobraFormBase} from './cobraFormBase';
import {CobraElement} from '../cobra-elements/cobraElement';
import {Directive, OnInit} from '@angular/core';
import {CobraButton} from "../cobra-elements/cobraButton";

@Directive()
export abstract class CobraCreateFormBase extends CobraFormBase implements OnInit {

  public async create() {
    super.forceValidation();
    if (!this.form?.valid)
      return;
    try {
      if (!(await this.checkPreImplementation())) {
        return;
      }
      await this.createImplementation();
      this.done.emit();
    } catch (err) {
      //console.error(err);
    }
  }

  async ngOnInit() {
    await super.ngOnInit();
  }

  /**
   * Interne Implementierung des Erstellvorgangs
   * @protected Wird vom Child ausgeführt
   */
  protected abstract createImplementation = () => {
  };

  /**
   * Gibt an, ob alle Voraussetzungen für das Speichern erfüllt sind.
   * Kann z.B. verwendet werden, um das negative Ergebnis eines Confirm-Dialogs abzubilden
   * und damit das Speichern zu unterdrücken.
   */
  protected checkPreImplementation(): Promise<boolean> {
    return Promise.resolve(true);
  }

  protected defineActionElements(): Array<CobraElement<any>> {
    return [
      new CobraButton({
        id: 'speichern',
        icon: 'save',
        displayName: 'Speichern',
        cb: async () => await this.create()
      })
    ];
  }
}
