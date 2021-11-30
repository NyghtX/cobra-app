import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CobraAppComponent} from './cobra-app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('CobraAppComponent', () => {
  let component: CobraAppComponent;
  let fixture: ComponentFixture<CobraAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CobraAppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
