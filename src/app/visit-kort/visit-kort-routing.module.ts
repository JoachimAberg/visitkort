import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {VisitKortComponent} from './visit-kort/visit-kort.component';

const visitkortRoutes: Routes = [
  { path: '',  component: VisitKortComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(visitkortRoutes)
  ],
  declarations: []
})
export class VisitKortRoutingModule { }
