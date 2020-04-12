import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiComponent {
  baseUrl: String;

  constructor() {
    this.baseUrl = "https://localhost:5001/api";
  }

  login(): string {
    return this.baseUrl + "/login";
  }

  getTasks(): string {
    return this.baseUrl + "/getTasks";
  }

  postTasks(): string {
    return this.baseUrl + "/postTask";
  }
}
