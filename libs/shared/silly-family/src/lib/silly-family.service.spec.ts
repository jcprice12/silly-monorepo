import { TestBed } from '@angular/core/testing';

import { SillyFamilyService } from './silly-family.service';

describe('SillyFamilyService', () => {
  let service: SillyFamilyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SillyFamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
