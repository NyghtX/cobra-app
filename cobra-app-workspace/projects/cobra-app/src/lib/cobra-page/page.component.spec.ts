import {ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';

import {PageComponent} from './page.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageComponent],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct page title', () => {
    component.who = {
      pageTitle: "Title"
    };
    fixture.detectChanges()
    const title = fixture.nativeElement.querySelector('.cobra-page-title');
    expect(title.textContent).toContain("Title");
  });


});
