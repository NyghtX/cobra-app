import {CobraElement} from './cobraElement';
import {CobraTemplateRefConfig} from './cobraTemplateRefConfig';
import {CobraElementType} from './cobraElementType';

export class CobraTemplateRef extends CobraElement<CobraTemplateRefConfig> {

  constructor(config: CobraTemplateRefConfig) {
    super(config, CobraElementType.Template);
  }
}
