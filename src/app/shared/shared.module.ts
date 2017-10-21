import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatDialogModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ]
})
export class SharedModule { }
