import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { AuthenticationService } from "./services/authentication/authentication.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AuthenticationRoutingModule.COMPONENTS],
  imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
