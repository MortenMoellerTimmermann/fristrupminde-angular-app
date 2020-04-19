import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginEmailComponent } from "./components/login-email/login-email.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
  { path: "login", component: LoginEmailComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {
  static COMPONENTS = [LoginEmailComponent, RegisterComponent];
}
