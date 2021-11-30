import {CobraElementConfig} from './cobraElementConfig';
import {CobraElementType} from './cobraElementType';
import {CobraElementPosition} from './cobraElementPosition';

export abstract class CobraElement<TElementConfig extends CobraElementConfig> {
  type: CobraElementType;
  config: TElementConfig;

  protected constructor(config: TElementConfig, type: CobraElementType) {
    this.config = config;
    this.type = type;

    this.config.position = this.config.position || CobraElementPosition.left;
  }
}

