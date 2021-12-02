import {CobraElement} from "./cobraElement";
import {DisplayedAtFactory} from "./displayedAtFactory";
import {CobraElementConfig} from "./cobraElementConfig";
import {CobraElementFactory} from "./cobraElementFactory";


export abstract class CobraElementFactoryBase<TElement extends CobraElement<TConfig>, TConfig extends CobraElementConfig> implements CobraElementFactory<TElement, TConfig> {

  public config: TConfig;

  protected constructor(
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
