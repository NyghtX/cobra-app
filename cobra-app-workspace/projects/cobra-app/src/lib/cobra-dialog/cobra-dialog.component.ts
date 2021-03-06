import {AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InternalCobraDialogConfig} from './internalCobraDialogConfig';
import {CobraDialogContentDirective} from './cobra-dialog-content.directive';
import {CobraComponent} from "../cobra-component/cobra-component";
import {CobraComponentMode} from "../cobra-component/cobraComponentMode";
import {CobraComponentComponent} from "../cobra-component/cobra-component.component";

@Component({
  selector: 'cobra-dialog',
  templateUrl: './cobra-dialog.component.html',
  styleUrls: ['./cobra-dialog.component.scss']
})
export class CobraDialogComponent implements AfterViewInit {

  /**
   * Template in which the content will be rendered
   */
  @ViewChild(CobraDialogContentDirective, {static: false}) cobraDialogContent?: CobraDialogContentDirective;

  /**
   * CobraComponent, that will be displayed as dialog
   */
  @ViewChild(CobraComponentComponent) cobraComponent?: CobraComponentComponent;



  /**
   * Generated CobraComponent that will be injected into the dialog
   */
  public componentRef?: ComponentRef<CobraComponent>;


  constructor(
    public dialogRef: MatDialogRef<CobraDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public config: InternalCobraDialogConfig,
    private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.config.component);
      this.componentRef = this.cobraDialogContent!.viewContainerRef.createComponent<CobraComponent>(componentFactory);
      this.componentRef.instance.mode = CobraComponentMode.Dialog;
      this.cobraComponent!.instance = this.componentRef.instance;
    });
  }

}
