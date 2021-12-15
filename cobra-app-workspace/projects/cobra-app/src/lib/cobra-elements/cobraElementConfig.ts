import {CobraElementPosition} from './cobraElementPosition';

export interface CobraElementConfig {
  position?: CobraElementPosition;
  disabled?: () => boolean;
  visible?: () => boolean;
  context?: any;

  /**
   * Custom styles to be applied on the element
   */
  styles?: string;
}
