import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { TaskService } from "./services/tasks/task.service";
import ITask from "./interfaces/ITask";
import CalenderDate from "./models/calenderDate";
import { AuthComponent } from "../authentication/auth";

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
  availableTasks: Array<ITask>;
  subscriptions: Array<any> = new Array<any>();
  currentDateTasks: Array<ITask>;
  currentDateAvailableTasks: Array<ITask>;
  openModal: boolean = false;
  notifyCalenderObservable: Subject<ITask> = new Subject();

  constructor(
    router: Router,
    private taskService: TaskService,
    private auth: AuthComponent
  ) {
    if (router.url.includes("your-tasks")) {
      this.currentPath = taskPaths.your_tasks;
    } else if (router.url.includes("available-tasks")) {
      this.currentPath = taskPaths.available_tasks;
    }
  }

  ngOnInit() {
    this.getTasks();
    this.getAvailableTasks();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  getTasks() {
    this.subscriptions.push(
      this.taskService.getUserTasks().subscribe(
        (data) => (this.tasks = data),
        (error) => (this.tasks = new Array<ITask>())
      )
    );
  }

  getAvailableTasks() {
    this.subscriptions.push(
      this.taskService.getAvailableTasks().subscribe(
        (data) => (this.availableTasks = data),
        (error) => (this.availableTasks = new Array<ITask>())
      )
    );
  }

  assignTaskToUser(itask: ITask): void {
    //TODO remove task from availble list

    this.tasks.push(itask);
    this.notifyCalenderObservable.next(itask);
  }
  addNewTask(itask: ITask): void {
    if (itask.assignedTo === this.auth.getUserEmail()) {
      this.tasks.push(itask);
      this.notifyCalenderObservable.next(itask);
    }
  }

  dateSelected(date: CalenderDate) {
    this.currentDateTasks = date.getTasks();
    this.currentDateAvailableTasks = date.getAvailableTasks();
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
