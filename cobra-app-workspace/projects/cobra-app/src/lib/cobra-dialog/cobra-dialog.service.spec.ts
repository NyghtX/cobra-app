import {TestBed} from '@angular/core/testing';

import {CobraDialogService} from './cobra-dialog.service';

describe('CobraDialogService', () => {
  let service: CobraDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CobraDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
