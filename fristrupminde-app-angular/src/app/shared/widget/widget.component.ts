import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.scss"],
})
export class WidgetComponent implements OnInit {
  @Input() height: number;
  @Input() width: number;
  @Input() float: string;

  constructor() {}

  ngOnInit(): void {}
}
