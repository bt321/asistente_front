import { TestBed } from '@angular/core/testing';

import { PasswdService } from './passwd.service';

describe('PasswdService', () => {
  let service: PasswdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
