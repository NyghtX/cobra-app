import {CobraElement} from "./cobraElement";
import {DisplayedAtFactory} from "./displayedAtFactory";
import {CobraElementConfig} from "./cobraElementConfig";
import {CobraElementFactory} from "./cobraElementFactory";


export abstract class CobraElementFactoryBase<
  TElement extends CobraElement<TConfig>,
  TConfig extends CobraElementConfig,
  TFactory extends CobraElementFactory<TElement, TConfig>>
  implements CobraElementFactory<TElement, TConfig> {

  /**
   * Config of the element
   */
  public config: TConfig;

  protected constructor(
    config: TConfig,
              private elementType: new (config: TConfig) => TElement) {
    this.config = config;
  }

  /**
   * Adds custom css on the element
   * @param css Custom css string
   */
  public addCss(css: string) {
    this.config.styles = `${css}${this.config.styles ? this.config.styles : ''}`;
    return this;
  }

  /**
   * Creates a factory to set the position of the element
   */
  public displayedAt(): DisplayedAtFactory<TElement, TConfig, TFactory> {
    return new DisplayedAtFactory(this as unknown as TFactory)
  }

  /**
   * Builds the CobraElement
   * @param ctx Context where the Element is used
   */
  public build(ctx: any): TElement {
    this.config.context = ctx;
    return new this.elementType(this.config);
  }
}
