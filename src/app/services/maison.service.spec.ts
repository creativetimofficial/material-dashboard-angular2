import { TestBed } from '@angular/core/testing';

import { MaisonService } from './maison.service';

describe('MaisonService', () => {
  let service: MaisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
