import { TestBed } from '@angular/core/testing';

import { VisitorServiceService } from './visitor-service.service';

describe('VisitorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitorServiceService = TestBed.get(VisitorServiceService);
    expect(service).toBeTruthy();
  });
});
