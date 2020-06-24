import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { DatePipe } from "@angular/common";
import ITask from "../../interfaces/ITask";
import { TaskService } from "../../services/tasks/task.service";
import IDetailsTaskOutput from "../../interfaces/IDetailsTaskOutput";
import IDetailsTask from "../../interfaces/IDetailsTask";

@Component({
  selector: "app-task-details-modal",
  templateUrl: "./task-details-modal.component.html",
  styleUrls: ["./task-details-modal.component.scss"],
})
export class TaskDetailsModalComponent implements OnChanges, OnDestroy {
  @Input() openModal: boolean;
  @Input() task: ITask;
  @Output() onCloseModalEvent: EventEmitter<any> = new EventEmitter();

  subscription: any;
  taskDetails: IDetailsTask;

  constructor(private datepipe: DatePipe, private taskService: TaskService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.openModal.currentValue) {
      this.getTaskDetails();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getTaskDetails(): void {
    let detailsTaskOutput = <IDetailsTaskOutput>{};
    detailsTaskOutput.taskID = this.task.id;
    this.subscription = this.taskService
      .detailsTask(detailsTaskOutput)
      .subscribe(
        (data) => {
          this.taskDetails = data;
        },
        (err) => {}
      );
  }

  onCloseModal(): void {
    this.onCloseModalEvent.emit();
  }
}
