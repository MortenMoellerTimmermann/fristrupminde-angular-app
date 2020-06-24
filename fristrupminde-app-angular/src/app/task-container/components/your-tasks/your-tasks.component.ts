import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import ITask from "../../interfaces/ITask";
import { iif } from "rxjs";
import { TaskService } from "../../services/tasks/task.service";
import IFinishTask from "../../interfaces/IFinishTask";

@Component({
  selector: "app-your-tasks",
  templateUrl: "./your-tasks.component.html",
  styleUrls: ["./your-tasks.component.scss"],
})
export class YourTasksComponent implements OnInit, OnDestroy {
  @Input() date: Date;
  @Input() tasks: Array<ITask>;
  @Output() openModal: EventEmitter<any> = new EventEmitter();
  @Output() onFinishTaskSucceeded: EventEmitter<ITask> = new EventEmitter();

  subscription: any;

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  finishTask(iTask: ITask): void {
    let finishTask = <IFinishTask>{};
    finishTask.taskID = iTask.id;
    this.subscription = this.taskService.finishTask(finishTask).subscribe(
      (data) => {
        window.alert("Opgave fuldført");
        this.onFinishTaskSucceeded.emit(iTask);
      },
      (err) => {}
    );
  }

  openCreateTaskModal(): void {
    this.openModal.emit();
  }

  getDateString(): string {
    if (this.date !== undefined) {
      return "Dine opgaver den " + this.date.toLocaleDateString().split(" ")[0];
    } else return "";
  }
}
