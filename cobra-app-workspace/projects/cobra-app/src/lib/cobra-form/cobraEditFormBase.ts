import {CobraFormBase} from './cobraFormBase';
import {CobraElement} from '../cobra-elements/cobraElement';
import {CobraButton} from '../cobra-elements/cobraButton';
import {Directive, OnInit} from '@angular/core';

// @dynamic
@Directive()
export abstract class CobraEditFormBase<TReadModel, TUpdateModel> extends CobraFormBase implements OnInit {
  public detailsUpdate?: TUpdateModel;
  protected detailsRead?: TReadModel;
  private mappingCbs = {};
  private readModelDummy: TReadModel;

  protected constructor(
    private readModelType: new () => TReadModel,
    private updateModelType: new () => TUpdateModel
  ) {
    super();
    this.readModelDummy = new readModelType();
  }

  async ngOnInit() {
    await super.ngOnInit();
    await this.reload();
  }

  protected addMappingRule(propertyName: keyof TUpdateModel, mappingFunction: (val: TReadModel) => void) {
    // @ts-ignore
    this.mappingCbs[propertyName] = mappingFunction;
  }

  /**
   * Interne Implementierung des UpdateVorgangs
   * @protected Wird vom Child ausgeführt
   */
  protected abstract updateImplementation = () => {
  };

  /*
  Gibt an, ob alle Voraussetzungen für das Speichern erfüllt sind.
  Kann z.B. verwendet werden, um das negative Ergebnis eines Confirm-Dialogs abzubilden
  und damit das Speichern zu unterdrücken.
   */
  protected checkPreImplementation(): Promise<boolean> {
    return Promise.resolve(true);
  }

  /**
   * Interne Implementierung des Lesens
   * @protected Wird vom Child ausgeführt
   */
  protected abstract readImplementation(): Promise<TReadModel>;

  /**
   * Interne Implementierung des DeleteVorgangs
   * @protected Wird vom Child ausgeführt
   */
  protected deleteImplementation() {
  }

  /**
   * Mapped das ReadModel auf das UpdateModel
   * @param readModel ReadModel, von dem gemapped werden soll
   */
  protected mapReadToUpdateModel(readModel: TReadModel): TUpdateModel {
    const update = new this.updateModelType();

    for (const key of Object.keys(update)) {
      if (this.mappingCbs.hasOwnProperty(key)) { // @ts-ignore
        update[key] = this.mappingCbs[key](readModel);
      } else if (key in this.readModelDummy) { // @ts-ignore
        update[key] = readModel[key];
      } else
        throw new Error(`Für den Key ${key} wurde keine Funktion zum Mappen bestimmt.`);
    }

    return update;
  }

  protected defineActionElements(): Array<CobraElement<any>> {
    const buttons = [
      new CobraButton({
        id: 'speichern',
        icon: 'save',
        displayName: 'Speichern',
        cb: () => this.update()
      })
    ];


    // Wurde die "deleteImplementation" überschrieben und damit die löschen Funktion genutzt?
    if (this.deleteImplementation.toString().replace(/\s/g, '') !== 'deleteImplementation(){}') { // replace for PROD optimization
      buttons.push(new CobraButton({
          id: 'loeschen',
          icon: 'delete',
          displayName: '',
          ariaLabel: 'Löschen',
          cb: () => this.delete()
        })
      );
    }

    return buttons;
  }

  protected async reload() {
    this.detailsRead = await this.readImplementation();
    this.detailsUpdate = this.mapReadToUpdateModel(this.detailsRead);
  }

  private async update() {
    super.forceValidation();
    if (!this.form?.valid)
      return;
    try {
      if (!(await this.checkPreImplementation())) {
        return;
      }
      await this.updateImplementation();
      this.done.emit();
    } catch (err) {
      console.error(err);
    }
  }

  private async delete() {
    try {
      await this.deleteImplementation();
      this.done.emit();
    } catch (err) {
      //console.error(err);
    }
  }
}
