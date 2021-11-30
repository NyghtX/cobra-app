import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenutzerinfoComponent } from './benutzerinfo.component';

describe('BenutzerinfoComponent', () => {
  let component: BenutzerinfoComponent;
  let fixture: ComponentFixture<BenutzerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenutzerinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenutzerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
