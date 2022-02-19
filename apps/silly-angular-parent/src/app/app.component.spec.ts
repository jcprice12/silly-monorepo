import { TestBed } from '@angular/core/testing';
import { SharedDataAccessSillyFamilyService } from '@silly-monorepo/shared/data-access-silly-family';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let addFamilyMemberMock: jest.Mock
  let retrieveFamilyFromApiMock: jest.Mock
  beforeEach(async () => {
    retrieveFamilyFromApiMock = jest.fn()
    addFamilyMemberMock = jest.fn()
    await TestBed.configureTestingModule({
      providers: [{
        provide: SharedDataAccessSillyFamilyService,
        useValue: {
          addFamilyMember: addFamilyMemberMock,
          retrieveFamilyFromApi: retrieveFamilyFromApiMock
        }
      }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
