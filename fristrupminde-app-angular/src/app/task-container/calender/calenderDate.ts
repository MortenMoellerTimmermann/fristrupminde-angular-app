import ITask from "../../interfaces/ITask";

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

  getAmountOfTasks(): number {
    return this.tasksForDate.length;
  }

  writeAmountOfTasksDots(): string {
    let index: number = 0;
    let output: string = "";
    this.tasksForDate.forEach(task => {
      if (index <= 3) {
        output += " . ";
      }
    });
    return output;
  }
}
