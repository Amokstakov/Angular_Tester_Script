import { TestBed } from '@angular/core/testing';

import { GetBeerService } from './get-beer.service';

describe('GetBeerService', () => {
  let service: GetBeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
