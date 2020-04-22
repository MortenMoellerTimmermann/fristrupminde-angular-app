export default class CalenderDate {
  date: Date;
  otherMonth: Boolean;
  amountOfTasksForDate: number;

  constructor(date: Date, otherMonth: Boolean, amountOfTasksForDate: number) {
    this.date = date;
    this.otherMonth = otherMonth;
    this.amountOfTasksForDate = amountOfTasksForDate;
  }

  getDate(): string {
    return this.date.getDate().toString();
  }

  getDateObject(): Date {
    return this.date;
  }

  updateAmountOfTasks(value: number): void {
    this.amountOfTasksForDate += value;
  }

  getAmountOfTasks(): number {
    return this.amountOfTasksForDate;
  }

  writeAmountOfTasksDots(): string {
    let output: string = "";
    for (let i = 0; i < this.amountOfTasksForDate; i++) {
      if (i < 3) {
        output += " . ";
      }
    }
    return output;
  }
}
