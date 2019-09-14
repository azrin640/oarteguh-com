import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorAvatarComponent } from './visitor-avatar.component';

describe('VisitorAvatarComponent', () => {
  let component: VisitorAvatarComponent;
  let fixture: ComponentFixture<VisitorAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
