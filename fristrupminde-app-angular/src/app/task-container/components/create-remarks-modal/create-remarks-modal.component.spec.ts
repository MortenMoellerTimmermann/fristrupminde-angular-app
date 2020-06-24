import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRemarksModalComponent } from './create-remarks-modal.component';

describe('CreateRemarksModalComponent', () => {
  let component: CreateRemarksModalComponent;
  let fixture: ComponentFixture<CreateRemarksModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRemarksModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRemarksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
