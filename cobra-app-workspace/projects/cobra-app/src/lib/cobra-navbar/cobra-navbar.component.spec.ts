import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CobraNavbarComponent} from './cobra-navbar.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CobraNavbarService} from "./cobra-navbar.service";

describe('CobraNavbarComponent', () => {
  let component: CobraNavbarComponent;
  let fixture: ComponentFixture<CobraNavbarComponent>;

  describe('CobraNavbarComponent - No Items', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [CobraNavbarComponent],
        providers: [{
          provide: CobraNavbarService,
          useValue: {
            getAccessibleItems() {
              return [];
            }
          }
        }],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(CobraNavbarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

  });


});
