import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipTagsComponent } from './chip-tags.component';

describe('ChipTagsComponent', () => {
  let component: ChipTagsComponent;
  let fixture: ComponentFixture<ChipTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
