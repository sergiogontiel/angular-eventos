import { TestBed } from '@angular/core/testing';

import { LeaveContactFormGuard } from './leave-contact-form.guard';

describe('LeaveContactFormGuard', () => {
  let guard: LeaveContactFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeaveContactFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
