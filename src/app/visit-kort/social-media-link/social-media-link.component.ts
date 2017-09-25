import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SocialMediaLink} from './social-media-link.model';

@Component({
  selector: 'vk-social-media-link',
  templateUrl: './social-media-link.component.html',
  styleUrls: ['./social-media-link.component.scss']
})
export class VisitKortSocialMediaLinkComponent implements OnInit, OnChanges {


  @Input('faIkon') faIkon: string;

  socialMediaLinks: Map<string, SocialMediaLink>;
  url: string;
  displayName: string;

  constructor() {
    this.socialMediaLinks = new Map();
    this.socialMediaLinks.set('facebook-official', {url: 'https://www.facebook.com/joachim.aberg/', displayName: 'Joachim Åberg'});
    this.socialMediaLinks.set('instagram', {url: 'https://www.facebook.com/joachim.aberg/', displayName: 'joachim.aberg'});
    this.socialMediaLinks.set('linkedin-square', {url: 'https://www.linkedin.com/in/joachim-%C3%A5berg-2b19aa42/', displayName: 'Joachim Åberg'});
    this.socialMediaLinks.set('github-square', {url: 'https://github.com/JoachimAberg//', displayName: 'JoachimAberg'});
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
   if (changes.faIkon.currentValue !== '') {
     this.url = this.socialMediaLinks.get(changes.faIkon.currentValue).url;
     this.displayName = this.socialMediaLinks.get(changes.faIkon.currentValue).displayName;
   }
  }

}
