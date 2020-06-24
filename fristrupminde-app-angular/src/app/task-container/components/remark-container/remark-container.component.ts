import { Component, OnInit, Input } from "@angular/core";
import IRemark from "../../interfaces/IRemark";

@Component({
  selector: "app-remark-container",
  templateUrl: "./remark-container.component.html",
  styleUrls: ["./remark-container.component.scss"],
})
export class RemarkContainerComponent implements OnInit {
  @Input() remark: IRemark;

  constructor() {}

  ngOnInit(): void {}
}
