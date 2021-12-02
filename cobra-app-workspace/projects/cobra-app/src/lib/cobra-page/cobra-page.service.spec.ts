import { TestBed } from '@angular/core/testing';

import { CobraPageService } from './cobra-page.service';

describe('CobraPageService', () => {
  let service: CobraPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CobraPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
