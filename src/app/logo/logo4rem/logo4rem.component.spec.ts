import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Logo4remComponent } from './logo4rem.component';

describe('Logo4remComponent', () => {
  let component: Logo4remComponent;
  let fixture: ComponentFixture<Logo4remComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Logo4remComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Logo4remComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
