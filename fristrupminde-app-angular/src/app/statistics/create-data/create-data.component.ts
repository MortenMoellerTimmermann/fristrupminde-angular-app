import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { StatisticsService } from "../services/statistics.service";
import ICreateStatisticsData from "../interfaces/ICreateStatisticsData";

@Component({
  selector: "app-create-data",
  templateUrl: "./create-data.component.html",
  styleUrls: ["./create-data.component.scss"],
})
export class CreateDataComponent implements OnInit {
  dataForm: FormGroup;
  subscription: any;

  constructor(
    private formBuilder: FormBuilder,
    private statisticsSerivce: StatisticsService
  ) {
    this.dataForm = this.formBuilder.group({
      milk: 0,
      fat: 0,
    });
  }

  ngOnInit(): void {}

  onSubmit(dataForm: FormGroup): void {
    let ICSD = <ICreateStatisticsData>{};
    ICSD.milk = dataForm.controls["milk"].value;
    this.subscription = this.statisticsSerivce
      .sendStatisticsData(ICSD)
      .subscribe(
        (data) => {
          dataForm.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
