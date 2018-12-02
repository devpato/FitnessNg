import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-sigup",
  templateUrl: "./sigup.component.html",
  styleUrls: ["./sigup.component.css"]
})
export class SigupComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
