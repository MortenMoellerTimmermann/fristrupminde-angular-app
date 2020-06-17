import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { TaskService } from "./services/tasks/task.service";
import ITask from "./interfaces/ITask";
import INotifyCalender from "./interfaces/INotifyCalender";
import { AuthComponent } from "../authentication/auth";
import IFinishTask from "./interfaces/IFinishTask";

@Component({
  selector: "app-task-container",
  templateUrl: "./task-container.component.html",
  styleUrls: ["./task-container.component.scss"],
})
export class TaskContainerComponent implements OnInit, OnDestroy {
  selectedDate: Date = new Date();
  tasks: Array<ITask>;
  availableTasks: Array<ITask>;
  subscriptions: Array<any> = new Array<any>();
  currentDateTasks: Array<ITask>;
  currentDateAvailableTasks: Array<ITask>;
  openModal: boolean = false;
  newTaskNotifier: Subject<INotifyCalender> = new Subject();

  taskReady: boolean = false;
  availableTaskReady: boolean = false;

  constructor(private taskService: TaskService, private auth: AuthComponent) {}

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
        (data) => {
          this.tasks = data;
          this.taskReady = true;
          if (this.taskReady && this.availableTaskReady) {
            this.updateTaskView();
          }
        },
        (error) => (this.tasks = new Array<ITask>())
      )
    );
  }

  getAvailableTasks() {
    this.subscriptions.push(
      this.taskService.getAvailableTasks().subscribe(
        (data) => {
          this.availableTasks = data;
          this.availableTaskReady = true;
          if (this.taskReady && this.availableTaskReady) {
            this.updateTaskView();
          }
        },
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
    /* FOR DEMO 
    for (let i = 0; i < 7; i++) {
      let itask = <ITask>{};
      tempList.push(itask);
    } */
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
    this.updateTaskView();
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
    this.updateTaskView();
  }

  updateTaskView() {
    //Finds the tasks for the selected date.
    this.currentDateTasks = this.getTaskForDateFromList(
      this.tasks,
      this.selectedDate
    );
    this.currentDateAvailableTasks = this.getTaskForDateFromList(
      this.availableTasks,
      this.selectedDate
    );
  }

  finishTask(finishTask: IFinishTask): void {
    this.tasks.forEach((task, index) => {
      if (task.id === finishTask.taskID) {
        this.tasks.splice(index, 1);
        this.updateTaskView();
      }
    });
  }

  updateTaskViewEvent(date: Date) {
    this.selectedDate = date;
    this.updateTaskView();
  }

  openCreateTaskModal(): void {
    this.openModal = true;
  }

  onCloseModal(): void {
    this.openModal = false;
  }
}
