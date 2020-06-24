import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskContainerRoutingModule } from "./task-container-routing.module";
import { TaskService } from "./services/tasks/task.service";
import { SharedModule } from "src/app/shared/shared.module";
import { TaskDetailsModalComponent } from './components/task-details-modal/task-details-modal.component';
import { CreateRemarksModalComponent } from './components/create-remarks-modal/create-remarks-modal.component';
import { RemarkContainerComponent } from './components/remark-container/remark-container.component';

@NgModule({
  declarations: [TaskContainerRoutingModule.COMPONENTS, TaskDetailsModalComponent, CreateRemarksModalComponent, RemarkContainerComponent],
  imports: [CommonModule, TaskContainerRoutingModule, SharedModule],
  providers: [TaskService],
})
export class TaskContainerModule {}
