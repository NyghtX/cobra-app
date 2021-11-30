import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CobraUploadComponent} from './cobra-upload.component';

describe('CobraUploadComponent', () => {
  let component: CobraUploadComponent;
  let fixture: ComponentFixture<CobraUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CobraUploadComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
