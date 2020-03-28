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
}
