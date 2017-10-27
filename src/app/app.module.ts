import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {VisitKortModule} from './visit-kort/visit-kort.module';
import {AppRoutingModule} from './app-routing.module';
import { KonamiSnackBarComponent } from './konami-snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    KonamiSnackBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [KonamiSnackBarComponent]
})
export class AppModule { }
