import { Component, OnInit } from "@angular/core";
import ITask from "../interfaces/ITask";
import { TaskService } from "../services/tasks/task.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  Tasks: ITask[];
  selectedDate: Date;
  selectedDateString: string;

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  getTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.Tasks = data;
      console.log(this.Tasks);
    });
  }

  addTask() {
    let newTask: ITask = { description: "hej hej", title: "goddav" };
    this.taskService.addTask(newTask).subscribe();
  }

  deleteTask(task) {
    console.log("hej");
    this.taskService.deleteTask(task);
    this.getTasks();
  }

  dateSelected(date: Date) {
    this.selectedDate = date;
    var splitted = date.toLocaleString().split(" ");
    this.selectedDateString = "den " + splitted[0];
  }
}
