import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import ITask from "../../interfaces/ITask";
import { AuthComponent } from "src/app/authentication/auth";
import { TaskService } from "../../services/tasks/task.service";
import IAssignTask from "../../interfaces/IAssignTask";

@Component({
  selector: "app-available-tasks",
  templateUrl: "./available-tasks.component.html",
  styleUrls: ["./available-tasks.component.scss"],
})
//Extend??
export class AvailableTasksComponent implements OnInit, OnDestroy {
  @Input() date: Date;
  @Input() availableTasks: Array<ITask>;
  @Output() onTakeTask: EventEmitter<ITask> = new EventEmitter();
  subscription: any;

  constructor(private taskService: TaskService, private auth: AuthComponent) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getDateString(): string {
    if (this.date !== undefined) {
      return (
        "Ledige opgaver den " + this.date.toLocaleDateString().split(" ")[0]
      );
    } else return "";
  }

  takeTaskEvent(task: ITask): void {
    //Important step to assign the task
    task.assignedTo = this.auth.getUserEmail();
    let assignTask = <IAssignTask>{};
    assignTask.taskID = task.id;
    this.taskService.assignTaskToUser(assignTask).subscribe((succes) => {
      console.log("succes");
      this.onTakeTask.emit(task);
      (err) => {};
    });
  }
}
