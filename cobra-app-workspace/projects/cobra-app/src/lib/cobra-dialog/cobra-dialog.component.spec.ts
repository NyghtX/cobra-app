import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CobraDialogComponent} from './cobra-dialog.component';

describe('CobraDialogComponent', () => {
  let component: CobraDialogComponent;
  let fixture: ComponentFixture<CobraDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CobraDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
