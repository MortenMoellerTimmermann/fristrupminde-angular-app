import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthGuardService } from "./authentication/authguard";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./core/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import "./prototypes.ts";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderInterceptor } from "./core/header-interceptor/header-interceptor.interceptor";
import { AuthenticationInterceptor } from "./core/authentication-interceptor/authentication.interceptor";
import { AuthenticationModule } from "./authentication/authentication.module";
import { TaskContainerModule } from "./task-container/task-container.module";
import { SharedModule } from "src/app/shared/shared.module";
import { HeaderComponent } from "./core/header/header.component";
import { StatisticsModule } from "./statistics/statistics.module";
import { ChartsModule } from "ng2-charts";
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, HeaderComponent],
  imports: [
    ChartsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StatisticsModule,
    AuthenticationModule,
    TaskContainerModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DatePipe,
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
