import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-available-tasks",
  templateUrl: "./available-tasks.component.html",
  styleUrls: ["./available-tasks.component.scss"]
})
//Extend??
export class AvailableTasksComponent implements OnInit {
  @Input() date: Date;

  constructor() {}

  ngOnInit(): void {}
}
