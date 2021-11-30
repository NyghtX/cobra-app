import {CobraElementPosition} from './cobraElementPosition';

export class CobraElementConfig {
  id?: string;
  position?: CobraElementPosition;
  disabled?: () => boolean;
  visible?: () => boolean;
}
