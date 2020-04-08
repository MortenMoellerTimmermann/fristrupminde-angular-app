import { Component, OnInit, Input } from "@angular/core";
import ITask from "../../interfaces/ITask";
import { iif } from "rxjs";

@Component({
  selector: "app-your-tasks",
  templateUrl: "./your-tasks.component.html",
  styleUrls: ["./your-tasks.component.scss"],
})
export class YourTasksComponent implements OnInit {
  @Input() date: Date;
  @Input() tasks: Array<ITask>;

  constructor() {}

  ngOnInit() {}

  getDateString(): string {
    if (this.date !== undefined) {
      return "Dine opgaver den " + this.date.toLocaleDateString().split(" ")[0];
    } else return "";
  }
}
