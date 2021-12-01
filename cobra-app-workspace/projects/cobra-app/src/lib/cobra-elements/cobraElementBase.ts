import {CobraElement} from "./cobraElement";
import {DisplayedAtFactory} from "./displayedAtFactory";
import {CobraElementConfig} from "./cobraElementConfig";

export abstract class CobraElementBase<TElement extends CobraElement<TConfig>, TConfig extends CobraElementConfig> implements CobraElement<TConfig> {

  public config: TConfig;

  constructor(config: TConfig) {
    this.config = config;
  }

  public displayedAt(): DisplayedAtFactory<TElement, TConfig> {
    return new DisplayedAtFactory(this as unknown as TElement)
  }
}
