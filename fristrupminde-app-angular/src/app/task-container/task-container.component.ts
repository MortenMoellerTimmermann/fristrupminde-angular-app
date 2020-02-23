import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { TaskService } from "../services/tasks/task.service";
import ITask from "../interfaces/ITask";

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
  tasks: Array<ITask>;

  constructor(router: Router, private taskService: TaskService) {
    if (router.url.includes("your-tasks")) {
      this.currentPath = taskPaths.your_tasks;
    } else if (router.url.includes("available-tasks")) {
      this.currentPath = taskPaths.available_tasks;
    }
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(data => (this.tasks = data));
  }

  dateSelected(date: Date) {
    this.selectedDate = date;
    var splitted = date.toLocaleString().split(" ");
    this.selectedDateString = "den " + splitted[0];
  }

  dateStringPrefix(): string {
    if (this.currentPath === taskPaths.your_tasks) {
      return "Dine opgaver";
    } else if (this.currentPath === taskPaths.available_tasks) {
      return "Ledige opgaver";
    }
  }

  changeRoute(path: taskPaths) {
    this.currentPath = path;
  }
}

enum taskPaths {
  your_tasks,
  available_tasks
}
