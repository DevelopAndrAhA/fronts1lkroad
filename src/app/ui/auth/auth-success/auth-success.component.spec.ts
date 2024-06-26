import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSuccessComponent } from './auth-success.component';

describe('AuthSuccessComponent', () => {
  let component: AuthSuccessComponent;
  let fixture: ComponentFixture<AuthSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthSuccessComponent]
    });
    fixture = TestBed.createComponent(AuthSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
