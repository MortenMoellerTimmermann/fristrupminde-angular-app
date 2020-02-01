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
import { ElModule } from "element-angular";
import "element-angular/theme/index.css";

import { RegisterComponent } from "./authentication/register/register.component";
import { SignInMethodComponent } from "./authentication/sign-in-method/sign-in-method.component";
import { LoginEmailComponent } from "./authentication/login-email/login-email.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./core/navbar/navbar.component";
import { CalenderComponent } from "./core/calender/calender.component";
import { TaskObjectComponent } from "./task-container/task-object/task-object.component";
import { YourTasksComponent } from "./task-container/your-tasks/your-tasks.component";
import { TaskContainerComponent } from "./task-container/task-container.component";
import { RemarksContainerComponent } from "./remarks-container/remarks-container.component";

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
    RemarksContainerComponent
  ],
  imports: [
    BrowserModule,
    ElModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AngularFireAuth, AngularFirestore, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
