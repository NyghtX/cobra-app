import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CobraToolbarComponent} from './cobra-toolbar.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ToolbarComponent', () => {
  let component: CobraToolbarComponent;
  let fixture: ComponentFixture<CobraToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CobraToolbarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
