import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ChartsModule } from "ng2-charts";
import { StatisticsComponent } from "./statistics.component";

@NgModule({
  declarations: [StatisticsComponent],
  imports: [CommonModule, SharedModule, ChartsModule],
})
export class StatisticsModule {}
