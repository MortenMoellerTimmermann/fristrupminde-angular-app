import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { AuthComponent } from "../../auth";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import IRegisterDTO from "src/app/authentication/interfaces/IRegisterDTO";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
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
      confirmPassword: "Timmer412#",
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  register(taskForm: FormGroup) {
    if (
      taskForm.controls["password"].value ===
      taskForm.controls["confirmPassword"].value
    ) {
      let user = <IRegisterDTO>{};
      user.email = taskForm.controls["email"].value;
      user.password = taskForm.controls["password"].value;
      this.subscription = this.authenticationService
        .register(user)
        .subscribe((token) => {
          taskForm.reset();
          this.auth.setToken(token);
          this.auth.setUser();
          this.router.navigate(["/home"]);
        });
    } else {
      console.log("Passwords do not match");
    }
  }

  login() {
    this.router.navigate(["/login"]);
  }
}
