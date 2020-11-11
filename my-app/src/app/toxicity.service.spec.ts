import { TestBed } from '@angular/core/testing';

import { ToxicityService } from './toxicity.service';

describe('ToxicityService', () => {
  let service: ToxicityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToxicityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
