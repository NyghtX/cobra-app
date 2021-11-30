import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CobraAppLoadingComponent} from './cobra-app-loading.component';
import {CobraAppLoadingService} from "./cobra-app-loading.service";
import {CobraAppLoadingIndicator} from "./cobra-app-loading-indicator";
import {CobraAppPartLoadingState} from "./cobra-app-part-loading-state";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('CobraAppLoadingComponent', () => {
  let component: CobraAppLoadingComponent;
  let fixture: ComponentFixture<CobraAppLoadingComponent>;
  let loadingState: string | null = "State 1, State 2";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CobraAppLoadingComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{
        provide: CobraAppLoadingService,
        useValue: {
          getState(): CobraAppPartLoadingState {
            return {
              currentLoadingState: loadingState
            };
          }
        } as CobraAppLoadingIndicator
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobraAppLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show correct text', () => {
    const text = fixture.nativeElement.querySelector('.loading-content-text');
    expect(text.textContent.trim()).toEqual('State 1, State 2');
  });

  it('should show that the loading is done', () => {
    loadingState = null;
    fixture.detectChanges()
    const text = fixture.nativeElement.querySelector('.loading-content-text');
    expect(text.textContent.trim()).toEqual('Fertig - Es kann losgehen!');
  });
});
