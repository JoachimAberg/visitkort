import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitKortSocialMediaLinkComponent } from './social-media-link.component';

describe('VisitKortSocialMediaLinkComponent', () => {
  let component: VisitKortSocialMediaLinkComponent;
  let fixture: ComponentFixture<VisitKortSocialMediaLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitKortSocialMediaLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitKortSocialMediaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
