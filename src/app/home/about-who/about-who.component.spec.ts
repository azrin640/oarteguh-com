import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWhoComponent } from './about-who.component';

describe('AboutWhoComponent', () => {
  let component: AboutWhoComponent;
  let fixture: ComponentFixture<AboutWhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
