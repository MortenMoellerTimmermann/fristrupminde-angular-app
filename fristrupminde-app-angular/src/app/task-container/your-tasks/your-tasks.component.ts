import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-your-tasks",
  templateUrl: "./your-tasks.component.html",
  styleUrls: ["./your-tasks.component.scss"]
})
export class YourTasksComponent implements OnInit {
  @Input() dateString: string;

  constructor() {}

  ngOnInit() {}
}
