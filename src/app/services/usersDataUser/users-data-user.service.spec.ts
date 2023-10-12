import { TestBed } from '@angular/core/testing';

import { UsersDataUserService } from './users-data-user.service';

describe('UsersDataUserService', () => {
  let service: UsersDataUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDataUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
