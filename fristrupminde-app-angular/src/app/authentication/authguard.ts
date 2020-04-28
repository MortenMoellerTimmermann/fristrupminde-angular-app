import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthComponent } from "./auth";
import { AuthenticationService } from "./services/authentication/authentication.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthComponent,
    private authService: AuthenticationService
  ) {}

  canActivate(): boolean {
    return true; //CHANGE
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
