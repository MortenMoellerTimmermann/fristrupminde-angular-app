import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskObjectComponent } from "./task-object.component";

describe("TaskComponent", () => {
  let component: TaskObjectComponent;
  let fixture: ComponentFixture<TaskObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskObjectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
