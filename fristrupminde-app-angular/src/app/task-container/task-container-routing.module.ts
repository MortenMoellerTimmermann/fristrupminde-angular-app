import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AvailableTasksComponent } from "./components/available-tasks/available-tasks.component";
import { CalenderComponent } from "./components/calender/calender.component";
import { CreateTaskModalComponent } from "./components/create-task-modal/create-task-modal.component";
import { TaskObjectComponent } from "./components/task-object/task-object.component";
import { YourTasksComponent } from "./components/your-tasks/your-tasks.component";
import { TaskContainerComponent } from "./task-container.component";
import { AvailableTaskObjectComponent } from "./components/available-task-object/available-task-object.component";

const routes: Routes = [
  {
    path: "home/tasks",
    redirectTo: "home/tasks/your-tasks",
    pathMatch: "full",
  },
  { path: "your-tasks", component: YourTasksComponent },
  { path: "available-tasks", component: AvailableTasksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskContainerRoutingModule {
  static COMPONENTS = [
    TaskContainerComponent,
    AvailableTasksComponent,
    CalenderComponent,
    CreateTaskModalComponent,
    TaskObjectComponent,
    YourTasksComponent,
    AvailableTaskObjectComponent,
  ];
}
