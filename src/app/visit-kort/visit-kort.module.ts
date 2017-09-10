import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitKortComponent } from './visit-kort/visit-kort.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [VisitKortComponent],
  exports: [VisitKortComponent]
})
export class VisitKortModule { }
