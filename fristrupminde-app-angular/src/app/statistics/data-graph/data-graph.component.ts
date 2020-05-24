import { Component, OnInit, Input } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import { StatisticsService } from "../services/statistics.service";
import IStatisticsData from "../interfaces/IStatisticsData";

@Component({
  selector: "app-data-graph",
  templateUrl: "./data-graph.component.html",
  styleUrls: ["./data-graph.component.scss"],
})
export class DataGraphComponent implements OnInit {
  @Input() statisticsData: Array<IStatisticsData>;

  constructor(private statisticsSerivice: StatisticsService) {}

  ngOnInit(): void {}

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
