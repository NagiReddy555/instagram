import { TestBed } from '@angular/core/testing';

import { GetdatafromdbService } from './getdatafromdb.service';

describe('GetdatafromdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetdatafromdbService = TestBed.get(GetdatafromdbService);
    expect(service).toBeTruthy();
  });
});
