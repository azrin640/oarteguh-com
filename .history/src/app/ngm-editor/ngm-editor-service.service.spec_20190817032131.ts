import { TestBed } from '@angular/core/testing';

import { NgmEditorServiceService } from './ngm-editor-service.service';

describe('NgmEditorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgmEditorServiceService = TestBed.get(NgmEditorServiceService);
    expect(service).toBeTruthy();
  });
});
