import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

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
import { HeaderInterceptor } from "./core/header-interceptor/header-interceptor.interceptor";
import { AuthenticationInterceptor } from "./core/authentication-interceptor/authentication.interceptor";
import { AuthenticationModule } from "./authentication/authentication.module";
import { TaskContainerModule } from "./task-container/task-container.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RemarksContainerComponent,
    //   ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    AuthenticationModule,
    TaskContainerModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
