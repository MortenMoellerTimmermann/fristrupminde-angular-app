import { Component, OnInit, Input } from "@angular/core";
import ITask from "src/app/task-container/interfaces/ITask";

@Component({
  selector: "app-task-object",
  templateUrl: "./task-object.component.html",
  styleUrls: ["./task-object.component.scss"],
})
export class TaskObjectComponent implements OnInit {
  @Input() task: ITask;
  constructor() {}

  ngOnInit() {}
}
