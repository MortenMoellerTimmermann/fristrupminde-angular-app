import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import IStatisticsData from "./interfaces/IStatisticsData";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent implements OnInit {
  newDataNotifier: Subject<IStatisticsData> = new Subject();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  addData(ISD: IStatisticsData): void {
    this.newDataNotifier.next(ISD);
  }
}
