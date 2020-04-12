import ITask from "../interfaces/ITask";

export default class CalenderDate {
  date: Date;
  otherMonth: Boolean;
  tasksForDate: Array<ITask>;
  constructor(date: Date, otherMonth: Boolean, tasksForDate: Array<ITask>) {
    this.date = date;
    this.otherMonth = otherMonth;
    this.tasksForDate = tasksForDate;
  }

  getDate(): string {
    return this.date.getDate().toString();
  }

  addNewTask(itask: ITask): void {
    this.tasksForDate.push(itask);
  }

  getDateObject(): Date {
    return this.date;
  }

  getAmountOfTasks(): number {
    return this.tasksForDate.length;
  }

  getTasks(): Array<ITask> {
    return this.tasksForDate;
  }

  writeAmountOfTasksDots(): string {
    let index: number = 0;
    let output: string = "";
    this.tasksForDate.forEach((task) => {
      if (index < 3) {
        output += " . ";
      }
      index += 1;
    });
    return output;
  }
}
