import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Logo2remLightComponent } from './logo2rem-light.component';

describe('Logo2remLightComponent', () => {
  let component: Logo2remLightComponent;
  let fixture: ComponentFixture<Logo2remLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Logo2remLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Logo2remLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
