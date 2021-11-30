import {AfterViewInit, ComponentFactoryResolver, Directive, Input, ViewContainerRef} from '@angular/core';
import {CobraNavbarService, NavbarPosition} from "./cobra-navbar.service";
import {DynamicCobraNavbarItem} from "./cobra-navbar-item/dynamic-cobra-navbar.item";

@Directive({
  selector: '[cobraNavbarItemHost]'
})
export class CobraNavbarItemHostDirective implements AfterViewInit {

  /**
   * Position, an der die Items des Hosts in der Navbar angezeigt werden sollen
   */
  @Input()
  position!: NavbarPosition;

  constructor(public viewContainerRef: ViewContainerRef,
              private navbarService: CobraNavbarService,
              private componentFactoryResolver: ComponentFactoryResolver) { }


  ngAfterViewInit(): void {
    this.navbarService.dynamicNavbarItems.subscribe(value => this.setItems(value.get(this.position)));
  }


  private setItems(items: Map<string, DynamicCobraNavbarItem> | undefined) {
    // => Bereinigen der bereits generierten Inhalte
    this.viewContainerRef.clear();

    // => Validierungen auf Items ausführen
    if(!items || items?.size < 1)
      return;

    // => Items anzeigen
    items.forEach((item, identifier) => {
      const factory = this.componentFactoryResolver.resolveComponentFactory(item.template);
      this.viewContainerRef.createComponent(factory);
    });




  }
}
