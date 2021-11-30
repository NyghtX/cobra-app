import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[cobraDialogContent]'
})
export class CobraDialogContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
