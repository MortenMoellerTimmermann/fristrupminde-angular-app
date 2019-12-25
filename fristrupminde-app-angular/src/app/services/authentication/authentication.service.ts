import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  signInWithEmail(User) {
    this.afAuth.auth
      .signInWithEmailAndPassword(User.username, User.password)
      .then(() => {
        console.log(auth().currentUser);
        this.router.navigate(["/"]);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }
}
