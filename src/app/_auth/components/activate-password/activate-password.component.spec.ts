import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatePasswordComponent } from './activate-password.component';

describe('ActivatePasswordComponent', () => {
  let component: ActivatePasswordComponent;
  let fixture: ComponentFixture<ActivatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
