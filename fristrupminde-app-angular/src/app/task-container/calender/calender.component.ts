import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import CalenderDate from "./calenderDate";
import ITask from "../../interfaces/ITask";

@Component({
  selector: "app-calender",
  templateUrl: "./calender.component.html",
  styleUrls: ["./calender.component.scss"]
})
export class CalenderComponent implements OnInit {
  @Input() tasks: Array<ITask>;
  @Output() onSelectDateEvent: EventEmitter<Date> = new EventEmitter();
  selectedDate: CalenderDate;
  weeks: Array<Array<CalenderDate>>;
  weeksDates: Array<CalenderDate>;
  currentMonth: number;
  currentYear: number;
  displayedMonth: number;
  displayedMonthString: string;
  displayedYearString: string;
  displayedYear: number;
  monthsString: Array<string>;
  constructor() {}

  ngOnInit() {
    this.setupMonthString();
    this.setupDates();
    this.onSelectDateEvent.emit(new Date());
  }

  setupDates() {
    var currentDay: Date;

    currentDay = new Date();

    this.currentMonth = currentDay.getMonth();
    this.displayedMonth = this.currentMonth;
    this.currentYear = currentDay.getFullYear();
    this.displayedYear = this.currentYear;
    currentDay = new Date(this.currentYear, this.currentMonth, 1);

    //Sets the current date to be selected
    this.selectedDate = new CalenderDate(
      new Date(),
      false,
      this.getAmountOfTasksForDate(new Date())
    );
    this.getDatesForMonth(currentDay);
  }

  preSetupDates(startDate: Date) {
    var toReach;
    var tempDatesArray = new Array();
    var currentDay = new Date(startDate);
    if (startDate.getDay() == 0) {
      toReach = 6;
    } else {
      toReach = startDate.getDay() - 1;
    }
    for (var i = 0; i < toReach; i++) {
      var dateToAdd = new Date(currentDay.setDate(currentDay.getDate() - 1));
      tempDatesArray.push(dateToAdd);
    }
    //The dates are in the wrong order, reverse the array
    for (var i = tempDatesArray.length - 1; i >= 0; i--) {
      this.weeksDates.push(
        new CalenderDate(
          tempDatesArray[i],
          true,
          this.getAmountOfTasksForDate(tempDatesArray[i])
        )
      );
    }
  }

  postSetup(endDate: Date) {
    var currentDay = new Date(endDate);
    while (currentDay.getDay() != 0) {
      var dateToAdd = new Date(currentDay.setDate(currentDay.getDate() + 1));
      this.weeksDates.push(
        new CalenderDate(
          dateToAdd,
          true,
          this.getAmountOfTasksForDate(dateToAdd)
        )
      );
    }
  }

  getDatesForMonth(firstDateInMonth: Date) {
    this.weeks = new Array();
    var currentDay = new Date(firstDateInMonth);
    this.displayedMonthString = this.monthsString[firstDateInMonth.getMonth()];
    if (firstDateInMonth.getFullYear() != this.currentYear) {
      this.displayedYearString = firstDateInMonth.getFullYear().toString();
    } else {
      this.displayedYearString = "";
    }

    //Pre setup
    this.weeksDates = new Array();
    this.preSetupDates(currentDay);

    var dateToAdd;
    while (this.displayedMonth == currentDay.getMonth()) {
      dateToAdd = new Date(currentDay);
      this.weeksDates.push(
        new CalenderDate(
          dateToAdd,
          false,
          this.getAmountOfTasksForDate(dateToAdd)
        )
      );
      if (currentDay.getDay() == 0) {
        this.weeks.push(this.weeksDates);
        this.weeksDates = new Array();
      }
      currentDay.setDate(currentDay.getDate() + 1);
    }
    //If the last day in month was not a sunday (next day is monday), then add the dates to the weeks array
    if (currentDay.getDay() != 1) {
      this.postSetup(dateToAdd);
      this.weeks.push(this.weeksDates);
    }
  }

  getNextMonth() {
    var nextMonth = new Date(this.displayedYear, this.displayedMonth, 1);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    this.displayedMonth = nextMonth.getMonth();
    this.displayedYear = nextMonth.getFullYear();
    this.getDatesForMonth(nextMonth);
  }

  getPreviousMonth() {
    var prevMonth = new Date(this.displayedYear, this.displayedMonth, 1);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    this.displayedMonth = prevMonth.getMonth();
    this.displayedYear = prevMonth.getFullYear();
    this.getDatesForMonth(prevMonth);
  }
  selectDate(selectedDate: CalenderDate) {
    if (selectedDate.otherMonth) {
      if (
        (selectedDate.date.getMonth() < this.displayedMonth &&
          selectedDate.date.getFullYear() > this.displayedYear) ||
        (selectedDate.date.getMonth() > this.displayedMonth &&
          selectedDate.date.getFullYear() == this.displayedYear)
      ) {
        this.getNextMonth();
      } else {
        this.getPreviousMonth();
      }
      this.selectedDate = this.findOtherMonthSelectedDate(selectedDate);
    } else {
      this.selectedDate = selectedDate;
    }
    this.onSelectDateEvent.emit(this.selectedDate.date);
  }

  findOtherMonthSelectedDate(selectedDate: CalenderDate): CalenderDate {
    var weekDates;
    var currentDate: CalenderDate;
    for (var i = 0; i < this.weeks.length; i++) {
      weekDates = this.weeks[i];
      for (var j = 0; j < weekDates.length; j++) {
        currentDate = weekDates[j];
        if (currentDate.date.isSameDateAs(selectedDate.date)) {
          return currentDate;
        }
      }
    }
  }

  checkIfSameDate(calenderDate: CalenderDate): Boolean {
    if (
      this.selectedDate != null &&
      calenderDate.date.getMonth() == this.selectedDate.date.getMonth() &&
      calenderDate.date.getDate() == this.selectedDate.date.getDate()
    ) {
      return true;
    } else {
      return false;
    }
  }

  getAmountOfTasksForDate(date: Date): Array<ITask> {
    var temp: Array<ITask> = new Array();
    this.tasks.forEach(task => {
      let taskDate: Date = new Date(task.dueDate);
      if (date.isSameDateAs(taskDate)) {
        temp.push(task);
      }
    });
    return temp;
  }

  setupMonthString() {
    this.monthsString = new Array<string>();
    this.monthsString.push("Januar");
    this.monthsString.push("Februar");
    this.monthsString.push("Marts");
    this.monthsString.push("April");
    this.monthsString.push("Maj");
    this.monthsString.push("Juni");
    this.monthsString.push("Juli");
    this.monthsString.push("August");
    this.monthsString.push("September");
    this.monthsString.push("Oktober");
    this.monthsString.push("November");
    this.monthsString.push("December");
  }
}
