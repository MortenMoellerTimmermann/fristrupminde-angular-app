import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ChartsModule } from "ng2-charts";
import { StatisticsComponent } from "./statistics.component";
import { CreateDataComponent } from "./create-data/create-data.component";
import { DataGraphComponent } from "./data-graph/data-graph.component";

@NgModule({
  declarations: [StatisticsComponent, CreateDataComponent, DataGraphComponent],
  imports: [CommonModule, SharedModule, ChartsModule],
})
export class StatisticsModule {}
