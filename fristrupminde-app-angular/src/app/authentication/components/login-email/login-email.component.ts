import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { AuthComponent } from "../../auth";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import ILoginDTO from "src/app/authentication/interfaces/ILoginDTO";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-login-email",
  templateUrl: "./login-email.component.html",
  styleUrls: ["./login-email.component.scss"],
})
export class LoginEmailComponent implements OnInit, OnDestroy {
  taskForm: FormGroup;
  subscription: any;

  constructor(
    private authenticationService: AuthenticationService,
    private auth: AuthComponent,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.taskForm = this.formBuilder.group({
      email: "mortenmoellertimmermann@gmail.com",
      password: "Timmer412#",
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  authenticate(taskForm: FormGroup) {
    let user = <ILoginDTO>{};
    user.email = taskForm.controls["email"].value;
    user.password = taskForm.controls["password"].value;
    this.subscription = this.authenticationService
      .signInWithEmail(user)
      .subscribe((token) => {
        taskForm.reset();
        this.auth.setToken(token);
        this.auth.setUser();
        this.router.navigate(["/home"]);
      });
  }

  register() {
    this.router.navigate(["/register"]);
  }
}
