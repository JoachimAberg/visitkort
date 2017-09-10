import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitKortComponent } from './visit-kort.component';

describe('VisitKortComponent', () => {
  let component: VisitKortComponent;
  let fixture: ComponentFixture<VisitKortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitKortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitKortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
