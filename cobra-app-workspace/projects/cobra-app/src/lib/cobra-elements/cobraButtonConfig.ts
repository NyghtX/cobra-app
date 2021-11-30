import {CobraElementConfig} from './cobraElementConfig';

export class CobraButtonConfig extends CobraElementConfig {
  icon?: string;
  displayName?: string;
  cb?: () => void;
  ariaLabel?: string;
}
