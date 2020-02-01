import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  activeLink: String;

  constructor(private router: Router) {
    if (router.url.includes("tasks")) {
      this.activeLink = "tasks";
    } else if (router.url.includes("remarks")) {
      this.activeLink = "remarks";
    } else {
      this.activeLink = "home";
    }
  }

  ngOnInit() {}

  clickLink(link: String) {
    //if you just want to toggle the class; change toggle variable.
    this.activeLink = link;
  }
}
