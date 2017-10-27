import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: '', loadChildren: 'app/visit-kort/visit-kort.module#VisitKortModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
