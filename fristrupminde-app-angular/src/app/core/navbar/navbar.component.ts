import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthComponent } from "src/app/authentication/auth";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  activeLink: string;

  constructor(private router: Router, private auth: AuthComponent) {
    if (router.url.includes("tasks")) {
      this.activeLink = "tasks";
    } else if (router.url.includes("remarks")) {
      this.activeLink = "remarks";
    } else {
      this.activeLink = "home";
    }
  }

  ngOnInit() {}

  clickLink(link: string) {
    //if you just want to toggle the class; change toggle variable.
    this.activeLink = link;
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }

  getUserEmail(): string {
    console.log(this.auth.user);
    return this.auth.user.email;
  }
}
