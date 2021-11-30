import {TestBed} from '@angular/core/testing';

import {CobraNavbarService} from './cobra-navbar.service';
import {CobraNavbarMenu} from "./cobra-navbar-item/cobra-navbar-menu";
import {CobraNavbarLink} from "./cobra-navbar-item/cobra-navbar-link";
import {CobraNavbarItemGuard} from "./cobra-navbar-item/cobra-navbar-item-guard";
import {DynamicCobraNavbarItem} from "./cobra-navbar-item/dynamic-cobra-navbar.item";

describe('CobraNavbarService', () => {
  let service: CobraNavbarService;

  describe('CobraNavbarService - No Items', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(CobraNavbarService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should give an empty array of navbar items', () => {
      expect(service.getAccessibleItems().length).toEqual(0);
    });

  });

  describe('CobraNavbarService - With Items', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(CobraNavbarService);
      service.addNavbarItem(new CobraNavbarMenu("Testmenü", "service1", [
        new CobraNavbarLink("Item1", "/link/to", "service1"),
        new CobraNavbarLink("Item2", "/link/to2", "service1")
      ]));
      service.addNavbarItem(new CobraNavbarLink("Link1", "/link1/to", "service1"));
      service.addNavbarItem(new CobraNavbarLink("Link1", "/link1/to", "service1", new MockNavbarItemGuard()));
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should give all navbar items', () => {
      let items = service.getAccessibleItems();
      console.log(items)
      expect(items.length).toEqual(2);
      let item1 = items[0];
      let subItems = (item1 as CobraNavbarMenu).items;
      expect(item1.label).toEqual("Testmenü");
      expect(item1.type).toEqual('menu');
      expect(subItems).toBeDefined();
      expect(subItems!.length).toEqual(2);
      let subItem1 = subItems![0];
      expect(subItem1).toBeDefined();
      expect((subItem1 as CobraNavbarLink).to).toEqual("/link/to");
      expect(subItem1.label).toEqual("Item1");
      expect(subItem1.type).toEqual("link");

    });

  });

  describe('CobraNavbarService - With Duplicating Item Labels', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(CobraNavbarService);

      service.addNavbarItem(new CobraNavbarMenu("Testmenü", "service1", [
        new CobraNavbarLink("Item1", "/link/to", "service1"),
        new CobraNavbarLink("Item2", "/link/to2", "service1")
      ]));

      service.addNavbarItem(new CobraNavbarMenu("Testmenü", "service2", [
        new CobraNavbarLink("Item3", "/link/to", "service2"),
        new CobraNavbarLink("Item4", "/link/to2", "service2")
      ]));

      service.addNavbarItem(new CobraNavbarMenu("Testmenü2", "service3", [
        new CobraNavbarLink("Item3", "/link/to", "service3"),
        new CobraNavbarLink("Item4", "/link/to2", "service3")
      ]));


    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should give all navbar items', () => {
      const items = service.getAccessibleItems();
      console.log(items)
      expect(items.length).toEqual(2);
    });

  });

  describe('CobraNavbarService - Dynnamic Navbar Items', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(CobraNavbarService);

    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should add dynamic navbar items and call subject', () => {
      const nextSpy = jest.spyOn(service.dynamicNavbarItems, "next");
      service.setDynamicNavbarItemFor("Left", "Ident1", new DynamicCobraNavbarItem(TestType));
      expect(nextSpy).toHaveBeenCalledTimes(1);
    });


    it('should get items on initial subscribe', () => {
      service.setDynamicNavbarItemFor("Left", "Ident1", new DynamicCobraNavbarItem(TestType));

      service.dynamicNavbarItems.subscribe(value => {
        expect(value.size).toEqual(1);
      });
    });

  });

});

class MockNavbarItemGuard implements CobraNavbarItemGuard {
  canAccess(): boolean | Promise<boolean> {
    return false;
  }

}

class TestType {

}
