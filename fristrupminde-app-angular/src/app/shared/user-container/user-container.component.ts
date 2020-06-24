import { Component, OnInit, Input } from "@angular/core";
import IUser from "src/app/authentication/interfaces/IUser";

@Component({
  selector: "app-user-container",
  templateUrl: "./user-container.component.html",
  styleUrls: ["./user-container.component.scss"],
})
export class UserContainerComponent implements OnInit {
  @Input() user: IUser;

  constructor() {}

  ngOnInit(): void {}
}
