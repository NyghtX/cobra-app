import {CobraElement} from "./cobraElement";
import {DisplayedAtFactory} from "./displayedAtFactory";
import {CobraElementConfig} from "./cobraElementConfig";

export abstract class CobraElementFactoryBase<TElement extends CobraElement<TConfig>, TConfig extends CobraElementConfig> {

  public config: TConfig;

  constructor(
    config: TConfig,
              private elementType: new (config: TConfig) => TElement) {
    this.config = config;
  }

  public displayedAt(): DisplayedAtFactory<TElement, TConfig> {
    return new DisplayedAtFactory(this as unknown as TElement)
  }

  public build(): TElement {
    return new this.elementType(this.config);
  }
}
