import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExamplePageComponent } from './dialog-example-page.component';

describe('DialogExamplePageComponent', () => {
  let component: DialogExamplePageComponent;
  let fixture: ComponentFixture<DialogExamplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExamplePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
