import { TestBed } from '@angular/core/testing';

import { ProductIngredientService } from './product-ingredient.service';

describe('ProductIngredientService', () => {
  let service: ProductIngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductIngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
