import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { MatIconModule, MatButtonModule, MatSelectModule, MatInputModule } from '@angular/material';
import { NgmEditorComponent } from './ngm-editor.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatButtonModule, 
    MatIconModule, 
    MatSelectModule,
    MatInputModule
  ],
  declarations: [NgmEditorComponent],
  exports: [NgmEditorComponent]
})
export class NgmEditorModule {
}
