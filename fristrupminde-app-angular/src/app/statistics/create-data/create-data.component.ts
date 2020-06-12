import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { StatisticsService } from "../services/statistics.service";
import ICreateStatisticsData from "../interfaces/ICreateStatisticsData";

@Component({
  selector: "app-create-data",
  templateUrl: "./create-data.component.html",
  styleUrls: ["./create-data.component.scss"],
})
export class CreateDataComponent implements OnInit, OnDestroy {
  @Output() onAddCreateData: EventEmitter<
    ICreateStatisticsData
  > = new EventEmitter();
  dataForm: FormGroup;
  subscription: any;

  constructor(
    private formBuilder: FormBuilder,
    private statisticsSerivce: StatisticsService
  ) {
    this.dataForm = this.formBuilder.group({
      date: "",
      milk: "",
      fat: "",
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit(dataForm: FormGroup): void {
    let ISD = <ICreateStatisticsData>{};
    ISD.date = dataForm.controls["date"].value;
    ISD.milk = dataForm.controls["milk"].value;
    ISD.fat = dataForm.controls["fat"].value;
    this.subscription = this.statisticsSerivce
      .sendStatisticsData(ISD)
      .subscribe(
        (generatedID) => {
          dataForm.reset();
          window.alert("Sended data to backend");
          this.onAddCreateData.emit(ISD);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
