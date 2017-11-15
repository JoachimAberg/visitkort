import {Component, ElementRef, HostListener} from '@angular/core';
import {StateService} from './core/services/state.service';
import {MatSnackBar} from '@angular/material';
import {KonamiSnackBarComponent} from './konami-snack-bar.component';
import {InstagramParseService} from './core/services/instagram-parse.service';

@Component({
  selector: 'vk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  konamiCode: number[] = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  konamiCodePosition = 0;

  state: StateService;

  constructor(public snackBar: MatSnackBar, ){

  }

  @HostListener('window:keyup', ['$event']) onKey(event) {
    const key = event.keyCode;
    const requiredKey = this.konamiCode[this.konamiCodePosition];
    if (key === requiredKey) {

      // move to the next key in the konami code sequence
      this.konamiCodePosition++;

      // if the last key is reached, activate cheats
      if (this.konamiCodePosition === this.konamiCode.length) {
        this.snackBar.openFromComponent(KonamiSnackBarComponent, {duration: 2000});
        this.konamiCodePosition = 0;
      }
    } else {
      this.konamiCodePosition = 0;
    }
  }



}
