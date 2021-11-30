import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CobraFormComponent} from './cobra-form.component';

describe('CobraFormComponent', () => {
  let component: CobraFormComponent;
  let fixture: ComponentFixture<CobraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CobraFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
