import {CobraElementPosition} from './cobraElementPosition';

export interface CobraElementConfig {
  position?: CobraElementPosition;
  disabled?: () => boolean;
  visible?: () => boolean;
}
