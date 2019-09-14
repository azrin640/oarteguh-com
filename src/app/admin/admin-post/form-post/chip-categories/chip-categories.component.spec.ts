import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipCategoriesComponent } from './chip-categories.component';

describe('ChipCategoriesComponent', () => {
  let component: ChipCategoriesComponent;
  let fixture: ComponentFixture<ChipCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
