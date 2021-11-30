import {CobraComponentBase} from "./cobra-component-base";
import {CobraElement} from "../cobra-elements/cobraElement";


class Test extends CobraComponentBase {
  title = "Der Titel"

  protected defineActionElements(): Array<CobraElement<any>> {
    return [
      //TODO CobraElements hinzufügen und testen
    ];
  }

}
describe('CobraComponentBase', () => {
  it('should create an instance', () => {
    const instance = new Test();
    expect(instance).toBeTruthy();
  });

  it('should have the correct title', () => {
    const instance = new Test();
    expect(instance.title).toEqual("Der Titel");
  });
});
