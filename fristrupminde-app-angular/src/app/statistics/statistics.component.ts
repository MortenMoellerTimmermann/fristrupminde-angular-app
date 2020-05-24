import { Component, OnInit, OnDestroy } from "@angular/core";
import IStatisticsData from "./interfaces/IStatisticsData";
import { StatisticsService } from "./services/statistics.service";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent implements OnInit, OnDestroy {
  subscribtion: any;
  statisticsData: Array<IStatisticsData>;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.getStatisticsData();
  }

  ngOnDestroy(): void {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }
  }

  getStatisticsData(): void {
    this.subscribtion = this.statisticsService.getStatisticsData().subscribe(
      (data) => {
        this.statisticsData = data;
      },
      (error) => {
        this.statisticsData = new Array();
      }
    );
  }

  addData(ISD: IStatisticsData): void {
    this.statisticsData.push(ISD);
  }
}
