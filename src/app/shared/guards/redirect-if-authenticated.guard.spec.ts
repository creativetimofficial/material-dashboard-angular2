import { TestBed } from '@angular/core/testing';

import { RedirectIfAuthenticatedGuard } from './redirect-if-authenticated.guard';

describe('RedirectIfAuthenticatedGuard', () => {
  let guard: RedirectIfAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectIfAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
