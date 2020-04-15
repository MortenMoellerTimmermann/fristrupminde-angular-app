import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { AuthComponent } from "../authentication/auth";

@Injectable({
  providedIn: "root",
})
export class ApiComponent {
  baseUrl: String;

  constructor(private auth: AuthComponent) {
    this.baseUrl = "https://localhost:5001/api";
  }

  getHeader(): Object {
    var header = {
      headers: new HttpHeaders().set("Authorization", this.auth.getToken()),
    };
    return header;
  }

  login(): string {
    return this.baseUrl + "/login";
  }

  register(): string {
    return this.baseUrl + "/register";
  }

  getUserEmails(): string {
    return this.baseUrl + "/getUserEmails";
  }

  validateToken(): string {
    return this.baseUrl + "/user/validate";
  }

  getAllTasks(): string {
    return this.baseUrl + "/getAllTasks";
  }

  getUserTasks(): string {
    return this.baseUrl + "/user/getTasks";
  }

  createTask(): string {
    return this.baseUrl + "/createTask";
  }
}
