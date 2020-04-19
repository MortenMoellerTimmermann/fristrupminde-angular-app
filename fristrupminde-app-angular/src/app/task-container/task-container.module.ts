import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskContainerRoutingModule } from "./task-container-routing.module";
import { TaskService } from "./services/tasks/task.service";
import { MaterialModuleModule } from "../material-module/material-module.module";
import { ModalComponent } from "../core/modal/modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TaskContainerRoutingModule.COMPONENTS, ModalComponent],
  imports: [
    CommonModule,
    TaskContainerRoutingModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TaskService],
})
export class TaskContainerModule {}
