import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StateService} from './services/state.service';
import {MatSnackBarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {InstagramParseService} from './services/instagram-parse.service';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [StateService, InstagramParseService],
  exports: []
})
export class CoreModule { }
