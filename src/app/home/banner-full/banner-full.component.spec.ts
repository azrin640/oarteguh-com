import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFullComponent } from './banner-full.component';

describe('BannerFullComponent', () => {
  let component: BannerFullComponent;
  let fixture: ComponentFixture<BannerFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
