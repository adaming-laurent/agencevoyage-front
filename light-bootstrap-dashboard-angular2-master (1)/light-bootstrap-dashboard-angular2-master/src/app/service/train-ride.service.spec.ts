import { TestBed } from '@angular/core/testing';

import { TrainRideService } from './train-ride.service';

describe('TrainRideService', () => {
  let service: TrainRideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainRideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
