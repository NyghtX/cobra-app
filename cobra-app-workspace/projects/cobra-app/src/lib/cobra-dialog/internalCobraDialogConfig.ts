import {CobraDialogConfig} from './cobraDialogConfig';
import {ComponentType} from '@angular/cdk/overlay';

export interface InternalCobraDialogConfig extends CobraDialogConfig {
  component: ComponentType<any>;
}
