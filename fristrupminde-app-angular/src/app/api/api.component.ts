import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApiComponent {
  baseUrl: String;

  constructor() {
    this.baseUrl = "https://localhost:5001/api";
  }

  getTasks(): string {
    return this.baseUrl + "/getTasks";
  }
}
