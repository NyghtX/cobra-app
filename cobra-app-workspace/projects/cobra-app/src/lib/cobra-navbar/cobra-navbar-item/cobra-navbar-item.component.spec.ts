import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobraNavbarItemComponent } from './cobra-navbar-item.component';

describe('CobraNavbarItemComponent', () => {
  let component: CobraNavbarItemComponent;
  let fixture: ComponentFixture<CobraNavbarItemComponent>;

  describe('CobraNavbarItemComponent - No Items', () => {

  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobraNavbarItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraNavbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
