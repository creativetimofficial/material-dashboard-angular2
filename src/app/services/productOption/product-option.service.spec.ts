import { TestBed } from '@angular/core/testing';

import { ProductOptionService } from './product-option.service';

describe('ProductOptionService', () => {
  let service: ProductOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
