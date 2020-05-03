import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./authentication/authguard";
import { TaskContainerComponent } from "./task-container/task-container.component";
import { RemarksContainerComponent } from "./remarks-container/remarks-container.component";
import { HomeComponent } from "./home/home.component";
import { StatisticsComponent } from "./statistics/statistics.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: "statistics", component: StatisticsComponent },
      {
        path: "tasks",
        component: TaskContainerComponent,
        loadChildren: () =>
          import("./task-container/task-container.module").then(
            (m) => m.TaskContainerModule
          ),
      },
      { path: "remarks", component: RemarksContainerComponent },
    ],
  },
  // { path: "**", component: ROUTENOTFOUNDPAGE },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
