import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SharedDataAccessSillyFamilyService } from './shared-data-access-silly-family.service';

describe('SillyFamilyService', () => {
  let service: SharedDataAccessSillyFamilyService;
  let getMock: jest.Mock
  let putMock: jest.Mock

  beforeEach(() => {
    getMock = jest.fn()
    putMock = jest.fn()
    TestBed.configureTestingModule({
      providers: [{
        provide: HttpClient,
        useValue: {
          get: getMock,
          put: putMock
        }
      }]
    });
    service = TestBed.inject(SharedDataAccessSillyFamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
