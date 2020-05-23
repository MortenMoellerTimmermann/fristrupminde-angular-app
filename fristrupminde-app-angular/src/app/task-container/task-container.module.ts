import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskContainerRoutingModule } from "./task-container-routing.module";
import { TaskService } from "./services/tasks/task.service";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [TaskContainerRoutingModule.COMPONENTS],
  imports: [CommonModule, TaskContainerRoutingModule, SharedModule],
  providers: [TaskService],
})
export class TaskContainerModule {}
