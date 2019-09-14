import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmEditorComponent } from './ngm-editor.component';

describe('NgmEditorComponent', () => {
  let component: NgmEditorComponent;
  let fixture: ComponentFixture<NgmEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
