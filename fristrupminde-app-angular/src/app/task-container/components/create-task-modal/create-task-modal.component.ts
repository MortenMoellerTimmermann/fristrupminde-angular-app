import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TaskService } from "../../services/tasks/task.service";
import ICreateTask from "../../interfaces/ICreateTask";
import ITask from "src/app/task-container/interfaces/ITask";

@Component({
  selector: "app-create-task-modal",
  templateUrl: "./create-task-modal.component.html",
  styleUrls: ["./create-task-modal.component.scss"],
})
export class CreateTaskModalComponent implements OnInit, OnDestroy {
  @Input() openModal;
  @Output() onCloseModalEvent: EventEmitter<any> = new EventEmitter();
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter();
  taskForm: FormGroup;
  emails: Array<String>;
  subscriptions: Array<any> = new Array();

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

  ngOnInit(): void {
    this.subscriptions.push(
      this.taskService.getUserEmails().subscribe((data) => (this.emails = data))
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubcribe();
    });
  }

  onCloseModal(): void {
    this.onCloseModalEvent.emit();
  }

  convertToITask(icreateTask: ICreateTask, generatedID: string): ITask {
    let itask = <ITask>{};
    itask.id = generatedID;
    itask.title = icreateTask.title;
    itask.description = icreateTask.description;
    itask.dueDate = new Date(icreateTask.dueDate);
    return itask;
  }

  onSubmit(taskForm: FormGroup): void {
    let task = <ICreateTask>{};
    task.title = taskForm.controls["title"].value;
    task.description = taskForm.controls["description"].value;
    task.dueDate = taskForm.controls["duedate"].value;
    task.assignedTo = taskForm.controls["assignedTo"].value;
    this.subscriptions.push(
      this.taskService.createTask(task).subscribe((generatedID) => {
        this.onAddTask.emit(this.convertToITask(task, generatedID));
        taskForm.reset();
        this.onCloseModal();
      })
    );
  }
}
