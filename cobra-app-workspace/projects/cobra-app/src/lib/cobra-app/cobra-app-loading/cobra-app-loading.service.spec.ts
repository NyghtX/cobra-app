import {TestBed} from '@angular/core/testing';
import {CobraAppLoadingService} from './cobra-app-loading.service';
import {COBRA_APP_IS_LOADING, CobraAppLoadingIndicator} from './cobra-app-loading-indicator'
import {CobraAppPartLoadingState} from "./cobra-app-part-loading-state";

describe('CobraAppLoadingService', () => {
  let service: CobraAppLoadingService;

  describe('CobraAppLoadingService - Without Indicators', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(CobraAppLoadingService);
    });

    it('should create service', () => {
      expect(service).toBeTruthy();
    });

    it('should give the correct loading state', () => {
      const state = service.getState();
      expect(state).not.toBeNull()
    })
  });

  describe('CobraAppLoadingService - With Indicators', () => {
    let state1: string | null = "State 1";
    let state2: string | null = "State 2";
    const appLoading1 = {
      getState(): CobraAppPartLoadingState {
        return {
          currentLoadingState: state1
        };
      }
    } as CobraAppLoadingIndicator;
    const appLoading2 = {
      getState(): CobraAppPartLoadingState {
        return {
          currentLoadingState: state2
        };
      }
    } as CobraAppLoadingIndicator;
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: COBRA_APP_IS_LOADING,
            multi: true,
            useValue: appLoading1
          },
          {
            provide: COBRA_APP_IS_LOADING,
            multi: true,
            useValue: appLoading2
          }
        ]
      });
      service = TestBed.inject(CobraAppLoadingService);
    });

    it('should create service', () => {
      expect(service).toBeTruthy();
    });

    it('should give the correct loading state', () => {
      expect(service.ready).toBeFalsy();
      const state = service.getState();
      expect(state).not.toBeNull();
      expect(state.currentLoadingState).not.toBeNull();
      expect(state.currentLoadingState).toEqual("State 1, State 2")
    });

    it('should tell if the application is ready', () => {
      state1 = null;
      state2 = null;
      expect(service.ready).toBeTruthy();
    });
  });


});
