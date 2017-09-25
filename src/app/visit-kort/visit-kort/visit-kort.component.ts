import { Component, OnInit } from '@angular/core';
import {StateService} from '../../core/services/state.service';

@Component({
  selector: 'vk-visit-kort',
  templateUrl: './visit-kort.component.html',
  styleUrls: ['./visit-kort.component.scss']
})
export class VisitKortComponent implements OnInit {

  scale = false;
  state: StateService;
  visaKontakter = false;
  selectedSocialMedia = '';

  constructor(private stateService: StateService) {
    this.state = stateService;
  }

  ngOnInit() {

    this.state.visaAdressTabbObservable.subscribe((visaBool) => {
      this.visaKontakter = visaBool;
    });
  }
  toggleSocialMedia(selected) {
    console.log(selected)
    if (this.selectedSocialMedia === selected) {
      this.selectedSocialMedia = '';
    } else {
      this.selectedSocialMedia = selected;
    }
  }
}
