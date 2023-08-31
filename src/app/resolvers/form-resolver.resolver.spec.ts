import { TestBed } from '@angular/core/testing';

import { FormResolverResolver } from './form-resolver.resolver';

describe('FormResolverResolver', () => {
  let resolver: FormResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FormResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
