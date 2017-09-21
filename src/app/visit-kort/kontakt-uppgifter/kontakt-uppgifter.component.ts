import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {StateService} from '../../core/services/state.service';

@Component({
  selector: 'vk-kontakt-uppgifter',
  templateUrl: './kontakt-uppgifter.component.html',
  styleUrls: ['./kontakt-uppgifter.component.scss']
})
export class KontaktUppgifterComponent implements OnInit {

  visa = false;
  public state: StateService;
  constructor(private stateService: StateService, private _el: ElementRef) {
    this.state = stateService;
  }

  ngOnInit() {
    this.state.visaAdressTabbObservable.subscribe((visaBool) => {
      this.visa = visaBool;
    });
  }

  @HostListener('document: click', ['$event']) click(event) {
    if (!this._el.nativeElement.contains(event.target)) {
      this.state.doljAdressTabb(event);
    }
  }

}
