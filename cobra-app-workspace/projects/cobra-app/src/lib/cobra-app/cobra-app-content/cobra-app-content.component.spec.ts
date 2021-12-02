import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobraAppContentComponent } from './cobra-app-content.component';

describe('CobraAppContentComponent', () => {
  let component: CobraAppContentComponent;
  let fixture: ComponentFixture<CobraAppContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobraAppContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraAppContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
