import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AuthGuardService } from "./authentication/authguard";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "angularfire2";
import {
  AngularFirestore,
  AngularFirestoreModule
} from "angularfire2/firestore";
import { AngularFireAuth } from "angularfire2/auth";
import { environment } from "../environments/environment";

import { RegisterComponent } from "./authentication/register/register.component";
import { SignInMethodComponent } from "./authentication/sign-in-method/sign-in-method.component";
import { LoginEmailComponent } from "./authentication/login-email/login-email.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./core/navbar/navbar.component";
import { CalenderComponent } from "./task-container/calender/calender.component";
import { TaskObjectComponent } from "./task-container/task-object/task-object.component";
import { YourTasksComponent } from "./task-container/your-tasks/your-tasks.component";
import { TaskContainerComponent } from "./task-container/task-container.component";
import { RemarksContainerComponent } from "./remarks-container/remarks-container.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AvailableTasksComponent } from "./task-container/available-tasks/available-tasks.component";
import "./prototypes.ts";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SignInMethodComponent,
    LoginEmailComponent,
    HomeComponent,
    NavbarComponent,
    CalenderComponent,
    TaskObjectComponent,
    YourTasksComponent,
    TaskContainerComponent,
    RemarksContainerComponent,
    AvailableTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers: [AngularFireAuth, AngularFirestore, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
