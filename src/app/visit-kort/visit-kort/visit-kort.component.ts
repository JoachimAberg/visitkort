import {Component, OnInit} from '@angular/core';
import {StateService} from '../../core/services/state.service';
import {MatDialog} from '@angular/material';
import {KontaktUppgifterComponent} from '../kontakt-uppgifter/kontakt-uppgifter.component';

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

  constructor(private stateService: StateService, public dialog: MatDialog) {
    this.state = stateService;
  }

  ngOnInit() {

  }

  toggleSocialMedia(selected) {
    console.log(selected);
    if (this.selectedSocialMedia === selected) {
      this.selectedSocialMedia = '';
    } else {
      this.selectedSocialMedia = selected;
    }
  }

  openKontaktUppgifter() {
  this.visaKontakter=true;
    const dialogRef = this.dialog.open(KontaktUppgifterComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.visaKontakter = false;

    });

  }
}
