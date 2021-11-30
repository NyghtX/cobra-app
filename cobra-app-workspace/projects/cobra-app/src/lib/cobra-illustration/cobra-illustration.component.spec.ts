import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CobraIllustrationComponent} from './cobra-illustration.component';

describe('IllustrationComponent', () => {
  let component: CobraIllustrationComponent;
  let fixture: ComponentFixture<CobraIllustrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CobraIllustrationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
