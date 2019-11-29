import { TestBed } from '@angular/core/testing';

import { UserseviseService } from './usersevise.service';

describe('UserseviseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserseviseService = TestBed.get(UserseviseService);
    expect(service).toBeTruthy();
  });
});
