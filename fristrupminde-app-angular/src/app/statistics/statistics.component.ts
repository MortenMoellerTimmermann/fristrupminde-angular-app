import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: "Crude oil prices" },
    { data: [85, 32, 78, 25, 77, 25], label: "Crude oil prices 2" },
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
