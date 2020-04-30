import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskContainerRoutingModule } from "./task-container-routing.module";
import { TaskService } from "./services/tasks/task.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [TaskContainerRoutingModule.COMPONENTS],
  imports: [
    CommonModule,
    TaskContainerRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [TaskService],
})
export class TaskContainerModule {}
