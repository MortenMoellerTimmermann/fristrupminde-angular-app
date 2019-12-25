import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInMethodComponent } from './sign-in-method.component';

describe('SignInMethodComponent', () => {
  let component: SignInMethodComponent;
  let fixture: ComponentFixture<SignInMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
