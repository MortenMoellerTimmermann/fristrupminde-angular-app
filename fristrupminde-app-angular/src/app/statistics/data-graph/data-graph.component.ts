import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import IStatisticsData from "../interfaces/IStatisticsData";
import { Subject } from "rxjs";
import { StatisticsService } from "../services/statistics.service";

@Component({
  selector: "app-data-graph",
  templateUrl: "./data-graph.component.html",
  styleUrls: ["./data-graph.component.scss"],
})
export class DataGraphComponent implements OnInit, OnDestroy {
  @Input() statisticsData: Array<IStatisticsData>;
  @Input() newDataSubscription: Subject<IStatisticsData>;
  subsribtions: Array<any> = new Array();

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.getStatisticsData();

    this.subsribtions.push(
      this.newDataSubscription.subscribe((notification) => {
        this.updateGraphData(notification);
      })
    );
  }

  ngOnDestroy(): void {
    this.subsribtions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  getStatisticsData(): void {
    this.subsribtions.push(
      this.statisticsService.getStatisticsData().subscribe(
        (data) => {
          this.statisticsData = data;
          console.log(data);
        },
        (error) => {
          this.statisticsData = new Array();
        }
      )
    );
  }

  updateGraphData(newData: IStatisticsData): void {
    this.statisticsData.push(newData);
  }

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: "Crude oil prices", order: 2 },
    {
      data: [85, 32, 78, 25, 77, 25],
      label: "Crude oil prices 2",
      type: "line",
      order: 1,
      backgroundColor: "#aaa",
      borderColor: "#aaa",
      fill: false,
    },
  ];

  lineChartLabels: Label[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ];

  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

  lineChartColors: Color[] = [
    {
      borderColor: "white",
      backgroundColor: "#376dbd",
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = "bar";
}
