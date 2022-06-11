import { TestBed } from '@angular/core/testing';

import { DataRequesterService } from './data-requester.service';

describe('DataRequesterService', () => {
  let service: DataRequesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRequesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
