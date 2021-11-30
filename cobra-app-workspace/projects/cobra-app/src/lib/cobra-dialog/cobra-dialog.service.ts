import {Injectable} from '@angular/core';
import {ComponentType} from '@angular/cdk/portal';
import {MatDialog} from '@angular/material/dialog';
import {CobraDialogComponent} from './cobra-dialog.component';
import {CobraDialogConfig} from './cobraDialogConfig';
import {CobraComponent} from "../cobra-component/cobra-component";

/**
 * Service, über den ein CobraDialog geöffnet werden kann.
 */
@Injectable({
  providedIn: 'root'
})
export class CobraDialogService {

  constructor(
    private matDialog: MatDialog
  ) {
  }

  async open<T extends CobraComponent>(component: ComponentType<T>, config?: CobraDialogConfig): Promise<T> {
    const matDialogRef = this.matDialog.open(CobraDialogComponent, {
      data: {data: config?.data, component: component},
      height: config?.height,
      width: config?.width
    });
    await matDialogRef.afterOpened().toPromise();
    return matDialogRef.componentInstance.componentRef?.instance as unknown as T;
  }
}
