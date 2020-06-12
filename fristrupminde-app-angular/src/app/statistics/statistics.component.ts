import { Component, OnInit, OnDestroy } from "@angular/core";
import IStatisticsData from "./interfaces/ICreateStatisticsData";
import { StatisticsService } from "./services/statistics.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent implements OnInit {
  statisticsData: Array<IStatisticsData>;
  newDataNotifier: Subject<IStatisticsData> = new Subject();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  addData(ISD: IStatisticsData): void {
    this.newDataNotifier.next(ISD);
  }
}
