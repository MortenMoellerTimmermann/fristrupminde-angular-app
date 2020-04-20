import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTaskObjectComponent } from './available-task-object.component';

describe('AvailableTaskObjectComponent', () => {
  let component: AvailableTaskObjectComponent;
  let fixture: ComponentFixture<AvailableTaskObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableTaskObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableTaskObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
