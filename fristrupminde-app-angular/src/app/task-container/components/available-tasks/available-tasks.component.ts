import { Component, OnInit, Input } from "@angular/core";
import ITask from "../../interfaces/ITask";

@Component({
  selector: "app-available-tasks",
  templateUrl: "./available-tasks.component.html",
  styleUrls: ["./available-tasks.component.scss"],
})
//Extend??
export class AvailableTasksComponent implements OnInit {
  @Input() date: Date;
  @Input() availableTasks: Array<ITask>;

  constructor() {}

  ngOnInit(): void {}

  getDateString(): string {
    if (this.date !== undefined) {
      return (
        "Ledige opgaver den " + this.date.toLocaleDateString().split(" ")[0]
      );
    } else return "";
  }
}
