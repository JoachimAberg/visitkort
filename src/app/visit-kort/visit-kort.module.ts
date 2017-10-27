import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VisitKortComponent} from './visit-kort/visit-kort.component';
import {SharedModule} from '../shared/shared.module';
import {KontaktUppgifterComponent} from './kontakt-uppgifter/kontakt-uppgifter.component';
import { VisitKortSocialMediaLinkComponent } from './social-media-link/social-media-link.component';
import {VisitKortRoutingModule} from './visit-kort-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VisitKortRoutingModule
  ],
  declarations: [VisitKortComponent, KontaktUppgifterComponent, VisitKortSocialMediaLinkComponent],
  exports: [],
  entryComponents: [KontaktUppgifterComponent]
})
export class VisitKortModule { }
