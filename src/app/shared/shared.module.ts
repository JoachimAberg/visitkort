import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdCardModule, MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule
  ],
  declarations: [],
  exports: [MdCardModule, MdButtonModule]
})
export class SharedModule { }