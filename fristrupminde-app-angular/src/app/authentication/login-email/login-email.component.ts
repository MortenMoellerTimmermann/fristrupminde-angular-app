import { Component, OnInit, Input } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Component({
  selector: "app-login-email",
  templateUrl: "./login-email.component.html",
  styleUrls: ["./login-email.component.scss"]
})
export class LoginEmailComponent implements OnInit {
  public user = {
    username: "",
    password: ""
  };

  constructor(
    public AuthenticationService: AuthenticationService,
    private afs: AngularFirestore
  ) {}

  ngOnInit() {}

  authenticate() {
    console.log(this.user);
    this.AuthenticationService.signInWithEmail(this.user);
  }
  register() {
    console.log("goodav da");
  }
}
