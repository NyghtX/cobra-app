import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CobraComponentComponent} from './cobra-component.component';
import {MatCardModule} from "@angular/material/card";

describe('CobraComponentComponent', () => {
  let component: CobraComponentComponent;
  let fixture: ComponentFixture<CobraComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobraComponentComponent ],
      imports: [MatCardModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
