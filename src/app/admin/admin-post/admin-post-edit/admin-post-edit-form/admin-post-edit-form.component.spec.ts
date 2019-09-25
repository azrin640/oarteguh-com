import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostEditFormComponent } from './admin-post-edit-form.component';

describe('AdminPostEditFormComponent', () => {
  let component: AdminPostEditFormComponent;
  let fixture: ComponentFixture<AdminPostEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
