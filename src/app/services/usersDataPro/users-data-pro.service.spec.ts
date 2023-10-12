import { TestBed } from '@angular/core/testing';

import { UsersDataProService } from './users-data-pro.service';

describe('UsersDataProService', () => {
  let service: UsersDataProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDataProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
