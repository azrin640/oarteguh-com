import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWhatComponent } from './about-what.component';

describe('AboutWhatComponent', () => {
  let component: AboutWhatComponent;
  let fixture: ComponentFixture<AboutWhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
