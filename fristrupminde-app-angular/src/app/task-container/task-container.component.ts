import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-task-container",
  templateUrl: "./task-container.component.html",
  styleUrls: ["./task-container.component.scss"]
})
export class TaskContainerComponent implements OnInit {
  currentPath: taskPaths;
  taskPaths = taskPaths;
  selectedDate: Date;
  selectedDateString: string;

  constructor(router: Router) {
    if (router.url.includes("your-tasks")) {
      this.currentPath = taskPaths.your_tasks;
    } else if (router.url.includes("available-tasks")) {
      this.currentPath = taskPaths.available_tasks;
    }
  }

  ngOnInit() {}

  dateSelected(date: Date) {
    this.selectedDate = date;
    var splitted = date.toLocaleString().split(" ");
    this.selectedDateString = "den " + splitted[0];
  }
}

enum taskPaths {
  your_tasks,
  available_tasks
}
