import {Component, ElementRef} from '@angular/core';
import {StateService} from './core/services/state.service';

@Component({
  selector: 'vk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  state: StateService;

  constructor(private stateService: StateService, private _el: ElementRef) {
    this.state = stateService;
  }

}
