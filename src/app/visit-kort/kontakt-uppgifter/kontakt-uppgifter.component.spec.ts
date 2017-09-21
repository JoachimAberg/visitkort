import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktUppgifterComponent } from './kontakt-uppgifter.component';

describe('KontaktUppgifterComponent', () => {
  let component: KontaktUppgifterComponent;
  let fixture: ComponentFixture<KontaktUppgifterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaktUppgifterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktUppgifterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
