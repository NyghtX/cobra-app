import {TestBed} from '@angular/core/testing';

import {CobraToolbarService} from './cobra-toolbar.service';

describe('ToolbarService', () => {
  let service: CobraToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CobraToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
