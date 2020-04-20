import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import ITask from "../../interfaces/ITask";

@Component({
  selector: "app-available-task-object",
  templateUrl: "./available-task-object.component.html",
  styleUrls: ["./available-task-object.component.scss"],
})
export class AvailableTaskObjectComponent implements OnInit {
  @Input() task: ITask;
  @Output() onTakeTask: EventEmitter<ITask> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  takeTask(): void {
    this.onTakeTask.emit(this.task);
  }
}
