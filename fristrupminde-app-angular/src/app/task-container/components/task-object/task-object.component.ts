import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import ITask from "src/app/task-container/interfaces/ITask";
import IFinishTask from "../../interfaces/IFinishTask";

@Component({
  selector: "app-task-object",
  templateUrl: "./task-object.component.html",
  styleUrls: ["./task-object.component.scss"],
})
export class TaskObjectComponent implements OnInit {
  @Input() task: ITask;
  @Output() onFinishTask: EventEmitter<ITask> = new EventEmitter();
  detailsModalOpen: boolean = false;
  remarksModalOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  finishTask(): void {
    this.onFinishTask.emit(this.task);
  }

  openDetailsModal(): void {
    this.detailsModalOpen = true;
  }

  closeDetailsModal(): void {
    this.detailsModalOpen = false;
  }

  openRemarksModal(): void {
    this.remarksModalOpen = true;
  }

  closeRemarksModal(): void {
    this.remarksModalOpen = false;
  }
}
