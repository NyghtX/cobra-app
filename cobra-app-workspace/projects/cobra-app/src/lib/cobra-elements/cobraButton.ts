import {CobraElement} from './cobraElement';
import {CobraButtonConfig} from './cobraButtonConfig';
import {CobraElementType} from './cobraElementType';

export class CobraButton extends CobraElement<CobraButtonConfig> {

  constructor(config: CobraButtonConfig) {
    super(config, CobraElementType.Button);
  }
}

