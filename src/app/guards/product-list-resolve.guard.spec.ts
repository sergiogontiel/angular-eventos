import { TestBed } from '@angular/core/testing';

import { ProductListResolveGuard } from './product-list-resolve.guard';

describe('ProductListResolveGuard', () => {
  let guard: ProductListResolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductListResolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
