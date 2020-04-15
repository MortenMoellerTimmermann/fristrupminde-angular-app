import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { TaskService } from "./services/tasks/task.service";
import ITask from "./interfaces/ITask";
import CalenderDate from "./models/calenderDate";

@Component({
  selector: "app-task-container",
  templateUrl: "./task-container.component.html",
  styleUrls: ["./task-container.component.scss"],
})
export class TaskContainerComponent implements OnInit, OnDestroy {
  currentPath: taskPaths;
  taskPaths = taskPaths;
  selectedDate: Date;
  selectedDateString: string = "";
  tasks: Array<ITask>;
  taskSubscription: any;
  currentDateTasks: Array<ITask>;
  openModal: boolean = false;
  notifyCalenderObservable: Subject<ITask> = new Subject();

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

  ngOnDestroy() {
    this.taskSubscription.unsubscribe();
  }

  getTasks() {
    this.taskSubscription = this.taskService.getUserTasks().subscribe(
      (data) => (this.tasks = data),
      (error) => (this.tasks = Array<ITask>())
    );
  }

  addNewTask(itask: ITask): void {
    this.tasks.push(itask);
    this.notifyCalenderObservable.next(itask);
  }

  dateSelected(date: CalenderDate) {
    this.currentDateTasks = date.getTasks();
    this.selectedDate = date.getDateObject();
  }

  changeRoute(path: taskPaths) {
    this.currentPath = path;
  }

  openCreateTaskModal(): void {
    this.openModal = true;
  }

  onCloseModal(): void {
    this.openModal = false;
  }
}

enum taskPaths {
  your_tasks,
  available_tasks,
}
