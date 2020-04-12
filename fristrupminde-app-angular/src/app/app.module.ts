import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AuthGuardService } from "./authentication/authguard";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "angularfire2";
import {
  AngularFirestore,
  AngularFirestoreModule,
} from "angularfire2/firestore";
import { AngularFireAuth } from "angularfire2/auth";
import { environment } from "../environments/environment";

import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./core/navbar/navbar.component";
import { RemarksContainerComponent } from "./remarks-container/remarks-container.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import "./prototypes.ts";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalComponent } from "./core/modal/modal.component";
import { MaterialModuleModule } from "./material-module/material-module.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { TaskContainerModule } from "./task-container/task-container.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RemarksContainerComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TaskContainerModule,
    AuthenticationModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [AngularFireAuth, AngularFirestore, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
