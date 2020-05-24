import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { StatisticsService } from "../services/statistics.service";
import IStatisticsData from "../interfaces/IStatisticsData";

@Component({
  selector: "app-create-data",
  templateUrl: "./create-data.component.html",
  styleUrls: ["./create-data.component.scss"],
})
export class CreateDataComponent implements OnInit, OnDestroy {
  @Output() onAddCreateData: EventEmitter<IStatisticsData> = new EventEmitter();
  dataForm: FormGroup;
  subscription: any;

  constructor(
    private formBuilder: FormBuilder,
    private statisticsSerivce: StatisticsService
  ) {
    this.dataForm = this.formBuilder.group({
      date: Date,
      milk: Number,
      fat: Number,
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit(dataForm: FormGroup): void {
    let ISD = <IStatisticsData>{};
    ISD.milk = dataForm.controls["milk"].value;
    this.subscription = this.statisticsSerivce
      .sendStatisticsData(ISD)
      .subscribe(
        (data) => {
          dataForm.reset();
          this.onAddCreateData.emit(ISD);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
