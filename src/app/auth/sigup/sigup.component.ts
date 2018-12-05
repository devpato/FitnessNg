import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-sigup",
  templateUrl: "./sigup.component.html",
  styleUrls: ["./sigup.component.css"]
})
export class SigupComponent implements OnInit {
  maxDate = new Date();
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    })
  }
}
