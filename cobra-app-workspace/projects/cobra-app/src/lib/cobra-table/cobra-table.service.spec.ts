import {TestBed} from '@angular/core/testing';

import {CobraTableService} from './cobra-table.service';

describe('TableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CobraTableService = TestBed.get(CobraTableService);
    expect(service).toBeTruthy();
  });
});
