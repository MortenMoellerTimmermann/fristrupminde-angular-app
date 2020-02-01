import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksContainerComponent } from './remarks-container.component';

describe('RemarksContainerComponent', () => {
  let component: RemarksContainerComponent;
  let fixture: ComponentFixture<RemarksContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarksContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
