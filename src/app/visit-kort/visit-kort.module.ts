import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VisitKortComponent} from './visit-kort/visit-kort.component';
import {SharedModule} from '../shared/shared.module';
import {KontaktUppgifterComponent} from './kontakt-uppgifter/kontakt-uppgifter.component';
import { VisitKortSocialMediaLinkComponent } from './social-media-link/social-media-link.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [VisitKortComponent, KontaktUppgifterComponent, VisitKortSocialMediaLinkComponent],
  exports: [KontaktUppgifterComponent, VisitKortComponent]
})
export class VisitKortModule { }
