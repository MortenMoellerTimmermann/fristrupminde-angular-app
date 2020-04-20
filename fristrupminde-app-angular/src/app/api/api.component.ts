import { Injectable } from "@angular/core";
import { AuthComponent } from "../authentication/auth";

@Injectable({
  providedIn: "root",
})
export class ApiComponent {
  baseUrl: String;

  constructor(private auth: AuthComponent) {
    this.baseUrl = "https://localhost:5001/api";
  }

  login(): string {
    return this.baseUrl + "/user/login";
  }

  register(): string {
    return this.baseUrl + "/user/register";
  }

  getUserEmails(): string {
    return this.baseUrl + "/user/emails";
  }

  validateToken(): string {
    return this.baseUrl + "/user/validate";
  }

  getAllTasks(): string {
    return this.baseUrl + "/task/getAll";
  }

  getUserTasks(): string {
    return this.baseUrl + "/task/user/getTasks";
  }

  getAvailableTasks(): string {
    return this.baseUrl + "/task/getAvailable";
  }

  createTask(): string {
    return this.baseUrl + "/task/create";
  }
}
