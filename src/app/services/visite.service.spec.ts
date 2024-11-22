import { TestBed } from '@angular/core/testing';

import { VisiteService } from './visite.service';

describe('VisiteService', () => {
  let service: VisiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
