import { NgModule } from "@angular/core";
import { LoginEmailComponent } from "./components/login-email/login-email.component";
import { RegisterComponent } from "./components/register/register.component";

@NgModule({
  declarations: [LoginEmailComponent, RegisterComponent],
  imports: [],
  exports: [LoginEmailComponent, RegisterComponent],
})
export class AuthenticationModule {}
