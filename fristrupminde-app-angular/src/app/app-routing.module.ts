import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./authentication/authguard";
import { RegisterComponent } from "./authentication/register/register.component";
import { LoginEmailComponent } from "./authentication/login-email/login-email.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuardService] },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
