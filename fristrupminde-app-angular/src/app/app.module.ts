import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AuthGuardService } from "./authentication/authguard";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./core/navbar/navbar.component";
import { RemarksContainerComponent } from "./remarks-container/remarks-container.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import "./prototypes.ts";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalComponent } from "./core/modal/modal.component";
import { MaterialModuleModule } from "./material-module/material-module.module";
import { YourTasksComponent } from "./task-container/components/your-tasks/your-tasks.component";
import { AvailableTasksComponent } from "./task-container/components/available-tasks/available-tasks.component";
import { CreateTaskModalComponent } from "./task-container/components/create-task-modal/create-task-modal.component";
import { CalenderComponent } from "./task-container/components/calender/calender.component";
import { TaskContainerComponent } from "./task-container/task-container.component";
import { TaskObjectComponent } from "./task-container/components/task-object/task-object.component";
import { LoginEmailComponent } from "./authentication/components/login-email/login-email.component";
import { RegisterComponent } from "./authentication/components/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RemarksContainerComponent,
    ModalComponent,
    YourTasksComponent,
    AvailableTasksComponent,
    CreateTaskModalComponent,
    CalenderComponent,
    TaskContainerComponent,
    TaskObjectComponent,
    LoginEmailComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
