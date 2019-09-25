import { TestBed } from '@angular/core/testing';

import { SerialAuthService } from './serial-auth.service';

describe('SerialAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerialAuthService = TestBed.get(SerialAuthService);
    expect(service).toBeTruthy();
  });
});
