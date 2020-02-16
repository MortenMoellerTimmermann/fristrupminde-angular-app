import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./authentication/authguard";
import { RegisterComponent } from "./authentication/register/register.component";
import { LoginEmailComponent } from "./authentication/login-email/login-email.component";
import { TaskContainerComponent } from "./task-container/task-container.component";
import { YourTasksComponent } from "./task-container/your-tasks/your-tasks.component";
import { RemarksContainerComponent } from "./remarks-container/remarks-container.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tasks",
        component: TaskContainerComponent,
        children: [
          { path: "", redirectTo: "your-tasks", pathMatch: "full" },
          { path: "your-tasks", component: YourTasksComponent },
          { path: "available-tasks", component: RegisterComponent }
        ]
      },
      { path: "remarks", component: RemarksContainerComponent }
    ]
  },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
