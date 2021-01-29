import { TestBed } from '@angular/core/testing';

import { RiverCruiseService } from './river-cruise.service';

describe('RiverCruiseService', () => {
  let service: RiverCruiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiverCruiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
