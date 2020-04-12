import { NgModule } from "@angular/core";
import { LoginEmailComponent } from "./components/login-email/login-email.component";
import { RegisterComponent } from "./components/register/register.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [LoginEmailComponent, RegisterComponent],
  imports: [CommonModule],
  exports: [LoginEmailComponent, RegisterComponent],
})
export class AuthenticationModule {}
