import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TaskService } from "../../services/tasks/task.service";
import ITask from "../../interfaces//ITask";

@Component({
  selector: "app-create-task-modal",
  templateUrl: "./create-task-modal.component.html",
  styleUrls: ["./create-task-modal.component.scss"],
})
export class CreateTaskModalComponent implements OnInit {
  @Input() openModal;
  @Output() onCloseModalEvent: EventEmitter<any> = new EventEmitter();
  task: ITask;
  taskForm: FormGroup;
  options: Array<String>;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {
    this.taskForm = this.formBuilder.group({
      title: "",
      description: "",
      duedate: "",
      assignedTo: "",
    });
  }

  ngOnInit(): void {}

  onCloseModal(): void {
    this.onCloseModalEvent.emit();
  }

  onSubmit(taskForm: FormGroup): void {
    console.log(taskForm);
    taskForm.reset();
    //this.onCloseModal();
  }
}
