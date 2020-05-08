import { Component, OnInit } from "@angular/core";
import { AuthComponent } from "src/app/authentication/auth";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthComponent) {}

  ngOnInit(): void {}

  getUserEmail(): string {
    return this.auth.getUserEmail() == ""
      ? "Testuser username"
      : this.auth.getUserEmail();
  }
}
