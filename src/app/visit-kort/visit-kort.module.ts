import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitKortComponent } from './visit-kort/visit-kort.component';
import {SharedModule} from '../shared/shared.module';
import { KontaktUppgifterComponent } from './kontakt-uppgifter/kontakt-uppgifter.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [VisitKortComponent, KontaktUppgifterComponent],
  exports: [VisitKortComponent, KontaktUppgifterComponent]
})
export class VisitKortModule { }
