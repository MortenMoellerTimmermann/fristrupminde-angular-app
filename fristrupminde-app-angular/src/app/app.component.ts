import { Component, OnInit } from "@angular/core";
import { AuthComponent } from "./authentication//auth";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "fristupminde-app-angular";

  constructor(private auth: AuthComponent) {}

  ngOnInit() {
    this.auth.setUser();
  }
}
