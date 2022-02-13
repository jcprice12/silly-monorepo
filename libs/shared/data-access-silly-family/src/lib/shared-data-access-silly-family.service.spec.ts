import { TestBed } from '@angular/core/testing';

import { SharedDataAccessSillyFamilyService } from './shared-data-access-silly-family.service';

describe('SillyFamilyService', () => {
  let service: SharedDataAccessSillyFamilyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDataAccessSillyFamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
