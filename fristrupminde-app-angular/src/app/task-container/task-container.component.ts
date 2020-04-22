import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { TaskService } from "./services/tasks/task.service";
import ITask from "./interfaces/ITask";
import INotifyCalender from "./interfaces/INotifyCalender";
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
  selectedDateCalender: CalenderDate;
  tasks: Array<ITask>;
  availableTasks: Array<ITask>;
  subscriptions: Array<any> = new Array<any>();
  currentDateTasks: Array<ITask>;
  currentDateAvailableTasks: Array<ITask>;
  openModal: boolean = false;
  newTaskNotifier: Subject<INotifyCalender> = new Subject();

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

  getTaskForDateFromList(list: Array<ITask>, date: Date): Array<ITask> {
    let tempList = new Array<ITask>();
    list.forEach((task) => {
      if (date.isSameDateAs(new Date(task.dueDate))) {
        tempList.push(task);
      }
    });
    return tempList;
  }

  assignTaskToUser(itask: ITask): void {
    this.availableTasks.forEach((tasks, index) => {
      if (tasks === itask) {
        this.availableTasks.splice(index, 1);
      }
    });
    this.tasks.push(itask);
    let notifyObj = <INotifyCalender>{};
    notifyObj.date = itask.dueDate;
    notifyObj.value = 1;
    this.newTaskNotifier.next(notifyObj);
    this.updateTaskView(this.selectedDateCalender);
  }

  addNewTask(itask: ITask): void {
    if (itask.assignedTo === this.auth.getUserEmail()) {
      this.tasks.push(itask);
      let notifyObj = <INotifyCalender>{};
      notifyObj.date = itask.dueDate;
      notifyObj.value = 1;
      this.newTaskNotifier.next(notifyObj);
    } else if (itask.assignedTo === "" || itask.assignedTo === undefined) {
      this.availableTasks.push(itask);
    }
    //
    this.updateTaskView(this.selectedDateCalender);
  }

  updateTaskView(date: CalenderDate) {
    //Finds the tasks for the selected date.
    this.currentDateTasks = this.getTaskForDateFromList(
      this.tasks,
      date.getDateObject()
    );
    this.currentDateAvailableTasks = this.getTaskForDateFromList(
      this.availableTasks,
      date.getDateObject()
    );
    this.selectedDate = date.getDateObject();
    this.selectedDateCalender = date;
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
