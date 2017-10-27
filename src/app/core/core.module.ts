import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StateService} from './services/state.service';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  declarations: [],
  providers: [StateService],
  exports: []
})
export class CoreModule { }
