import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CobraElementsContainerComponent} from './cobra-elements-container.component';

describe('CobraElementsContainerComponent', () => {
  let component: CobraElementsContainerComponent;
  let fixture: ComponentFixture<CobraElementsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CobraElementsContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraElementsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
