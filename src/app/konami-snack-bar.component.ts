import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vk-konami-snack-bar',
  templateUrl: './konami-snack-bar.component.html',
  styleUrls: ['./konami-snack-bar.component.css']
})
export class KonamiSnackBarComponent implements OnInit {
  static levelCount = 0;
  currentLevel: number;
  constructor() {
    KonamiSnackBarComponent.levelCount++;
    if (KonamiSnackBarComponent.levelCount === 5) {
      KonamiSnackBarComponent.levelCount = 0;
    }
    this.currentLevel = KonamiSnackBarComponent.levelCount;
 }

  ngOnInit() {
  }

}
