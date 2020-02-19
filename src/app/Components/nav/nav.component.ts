import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/sherd/auth.service";
import { AlertifyService } from "src/app/sherd/alertify.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    if (this.authService.login(this.model)) {
      this.alertify.success("Logged in successfully");
      this.router.navigate(["/search"]);
    } else {
      this.alertify.error("user name or password incorrect");
    }
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);

  }
}
