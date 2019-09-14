import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSerialComponent } from './admin-serial.component';

describe('AdminSerialComponent', () => {
  let component: AdminSerialComponent;
  let fixture: ComponentFixture<AdminSerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
