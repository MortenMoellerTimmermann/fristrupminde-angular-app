export default class CalenderDate {
  date: Date;
  otherMonth: Boolean;
  constructor(date: Date, otherMonth: Boolean) {
    this.date = date;
    this.otherMonth = otherMonth;
  }

  getDate(): string {
    return this.date.getDate().toString();
  }
}
