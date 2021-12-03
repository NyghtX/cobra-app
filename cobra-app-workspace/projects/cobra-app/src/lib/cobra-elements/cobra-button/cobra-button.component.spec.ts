import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobraButtonComponent } from './cobra-button.component';

describe('CobraButtonComponent', () => {
  let component: CobraButtonComponent;
  let fixture: ComponentFixture<CobraButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobraButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
