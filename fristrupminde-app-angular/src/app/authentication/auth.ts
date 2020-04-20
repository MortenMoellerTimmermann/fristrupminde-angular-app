import { Injectable } from "@angular/core";
import IUser from "./interfaces/IUser";
import { AuthenticationService } from "./services/authentication/authentication.service";

@Injectable({
  providedIn: "root",
})
export class AuthComponent {
  constructor() {}

  user: IUser;

  logout() {
    window.localStorage.removeItem("jwt_token");
    this.user = null;
  }

  isLoggedIn(): boolean {
    if (window.localStorage.getItem("jwt_token") !== null) {
      return true;
    }
    return false;
  }

  setToken(token: string): void {
    localStorage.setItem("jwt_token", token);
  }

  setUser() {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      this.readToken(token);
    }
  }

  readToken(token) {
    try {
      const payloadEncoded = token.split(".")[1];
      const payload = JSON.parse(window.atob(payloadEncoded));
      this.user = {
        email: payload.email,
        isAdmin: payload.isAdmin === "True",
        isSystem: payload.isSystem === "True",
      };
    } catch (_) {}
  }

  getToken(): string {
    let token = localStorage.getItem("jwt_token");
    if (token !== null) {
      return token;
    }
    return "";
  }

  getUserEmail(): string {
    return this.user ? this.user.email : "";
  }
}
