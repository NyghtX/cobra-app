import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobraAppRouterOutletComponent } from './cobra-app-router-outlet.component';

describe('CobraAppRouterOutletComponent', () => {
  let component: CobraAppRouterOutletComponent;
  let fixture: ComponentFixture<CobraAppRouterOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobraAppRouterOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraAppRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
