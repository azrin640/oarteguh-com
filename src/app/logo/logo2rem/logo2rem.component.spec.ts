import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Logo2remComponent } from './logo2rem.component';

describe('Logo2remComponent', () => {
  let component: Logo2remComponent;
  let fixture: ComponentFixture<Logo2remComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Logo2remComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Logo2remComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
