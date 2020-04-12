import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { AuthComponent } from "../auth";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import ILoginDTO from "src/app/interfaces/ILoginDTO";

@Component({
  selector: "app-login-email",
  templateUrl: "./login-email.component.html",
  styleUrls: ["./login-email.component.scss"],
})
export class LoginEmailComponent implements OnInit, OnDestroy {
  user: ILoginDTO = <ILoginDTO>{};
  subscription: any;

  constructor(
    private authenticationService: AuthenticationService,
    private auth: AuthComponent,
    private router: Router
  ) {
    this.user.email = "mortenmoellertimmermann@gmail.com";
    this.user.password = "Timmer412#";
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  authenticate() {
    this.subscription = this.authenticationService
      .signInWithEmail(this.user)
      .subscribe((token) => {
        this.auth.setToken(token);
        this.auth.setUser();
        this.router.navigate(["/home"]);
      });
  }

  register() {}
}
