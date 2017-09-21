import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StateService} from './services/state.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [StateService],
  exports: []
})
export class CoreModule { }
