import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarkContainerComponent } from './remark-container.component';

describe('RemarkContainerComponent', () => {
  let component: RemarkContainerComponent;
  let fixture: ComponentFixture<RemarkContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarkContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
