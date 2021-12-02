import { TestBed } from '@angular/core/testing';

import { CobraAppService } from './cobra-app.service';

describe('CobraAppService', () => {
  let service: CobraAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CobraAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
