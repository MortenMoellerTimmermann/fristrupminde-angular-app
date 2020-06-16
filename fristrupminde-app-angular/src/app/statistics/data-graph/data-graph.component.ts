import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import { Subject } from "rxjs";
import { DatePipe } from "@angular/common";
import { StatisticsService } from "../services/statistics.service";
import IStatisticsData from "../interfaces/IStatisticsData";

@Component({
  selector: "app-data-graph",
  templateUrl: "./data-graph.component.html",
  styleUrls: ["./data-graph.component.scss"],
})
export class DataGraphComponent implements OnInit, OnDestroy {
  @Input() newDataSubscription: Subject<IStatisticsData>;
  statisticsData: Array<IStatisticsData>;
  subsribtions: Array<any> = new Array();

  constructor(
    private statisticsService: StatisticsService,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getStatisticsData();

    this.subsribtions.push(
      this.newDataSubscription.subscribe((notification) => {
        this.addNewDataPoint(notification);
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
          this.initGraphData();
        },
        (error) => {}
      )
    );
  }

  checkIfNeedsSorting(newData: IStatisticsData): boolean {
    //Always sorted pre to new data
    let labelString =
      this.lineChartLabels[this.lineChartLabels.length - 1] + "";
    let splitted = labelString.split(" ");
    let latestDate: Date = new Date(
      Number(splitted[2]),
      Number(splitted[1]) - 1,
      Number(splitted[0])
    );
    let newDate: Date = new Date(newData.dateForData);
    //If the new date is smaller (before) the latests date, then the result is wrong and
    //the dataset needs sorting
    return latestDate > newDate;
  }

  addNewDataPoint(newData: IStatisticsData): void {
    this.statisticsData.push(newData);
    if (this.checkIfNeedsSorting(newData)) {
      //Sorts the array before updating the graph
      this.statisticsData.sort(function (a, b) {
        var c = new Date(a.dateForData);
        var d = new Date(b.dateForData);
        return c.getTime() - d.getTime();
      });
      this.initGraphData();
    } else {
      this.updateGraphData(newData);
    }
  }

  updateGraphData(newData: IStatisticsData): void {
    this.lineChartLabels.push(
      this.datepipe.transform(new Date(newData.dateForData), "dd MM yyyy")
    );
    this.lineChartData[0].data.push(newData.milkLiter);
    this.lineChartData[1].data.push(newData.fatPercentage);
  }

  initGraphData(): void {
    //Resetting data. Only needed if sorted.
    this.lineChartData[0].data = new Array();
    this.lineChartData[1].data = new Array();
    this.lineChartLabels = new Array();

    this.statisticsData.forEach((data) => {
      this.lineChartLabels.push(
        this.datepipe.transform(new Date(data.dateForData), "dd MM yyyy")
      );
      this.lineChartData[0].data.push(data.milkLiter);
      this.lineChartData[1].data.push(data.fatPercentage);
    });
  }

  lineChartData: ChartDataSets[] = [
    { data: [], label: "Mælk Liter", order: 2, yAxisID: "A" },
    {
      data: [],
      label: "Fedt %",
      type: "line",
      yAxisID: "B",
      order: 1,
      backgroundColor: "#aaa",
      borderColor: "#aaa",
      fill: false,
    },
  ];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          id: "A",
          type: "linear",
          position: "left",
          ticks: {
            beginAtZero: true,
          },
        },
        {
          id: "B",
          type: "linear",
          position: "right",
          ticks: {
            max: 10,
            min: 0,
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
