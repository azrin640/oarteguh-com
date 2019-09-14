import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHandphoneComponent } from './form-handphone.component';

describe('FormHandphoneComponent', () => {
  let component: FormHandphoneComponent;
  let fixture: ComponentFixture<FormHandphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHandphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHandphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
