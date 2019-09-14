import { TestBed } from '@angular/core/testing';

import { NgmEditorService } from './ngm-editor-service.service';

describe('NgmEditorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgmEditorService = TestBed.get(NgmEditorService);
    expect(service).toBeTruthy();
  });
});
