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
  @Output() onFinishTask: EventEmitter<IFinishTask> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  finishTask(): void {
    let finishTaskObj = <IFinishTask>{};
    finishTaskObj.taskID = this.task.id;
    this.onFinishTask.emit(finishTaskObj);
  }
}
