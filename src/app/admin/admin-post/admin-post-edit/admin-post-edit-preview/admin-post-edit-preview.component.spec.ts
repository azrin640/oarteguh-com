import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostEditPreviewComponent } from './admin-post-edit-preview.component';

describe('AdminPostEditPreviewComponent', () => {
  let component: AdminPostEditPreviewComponent;
  let fixture: ComponentFixture<AdminPostEditPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostEditPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostEditPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
