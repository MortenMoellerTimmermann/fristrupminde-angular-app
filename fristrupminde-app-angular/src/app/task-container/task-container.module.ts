import { NgModule } from "@angular/core";
import { TaskContainerComponent } from "./task-container.component";
import { YourTasksComponent } from "./components/your-tasks/your-tasks.component";
import { CreateTaskModalComponent } from "./components/create-task-modal/create-task-modal.component";
import { TaskObjectComponent } from "./components/task-object/task-object.component";
import { CalenderComponent } from "./components/calender/calender.component";
import { AvailableTasksComponent } from "./components/available-tasks/available-tasks.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TaskContainerComponent,
    YourTasksComponent,
    CreateTaskModalComponent,
    TaskObjectComponent,
    CalenderComponent,
    AvailableTasksComponent,
  ],
  imports: [CommonModule],
  exports: [
    TaskContainerComponent,
    YourTasksComponent,
    CreateTaskModalComponent,
    TaskObjectComponent,
    CalenderComponent,
    AvailableTasksComponent,
  ],
})
export class TaskContainerModule {}
