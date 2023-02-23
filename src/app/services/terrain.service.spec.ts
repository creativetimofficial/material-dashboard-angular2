import { TestBed } from '@angular/core/testing';

import { TerrainService } from './terrain.service';

describe('TerrainService', () => {
  let service: TerrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
