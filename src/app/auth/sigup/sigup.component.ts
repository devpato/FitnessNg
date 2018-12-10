import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { UIService } from "src/app/shared/ui.service";
import { Subscription } from 'rxjs'

@Component({
  selector: "app-sigup",
  templateUrl: "./sigup.component.html",
  styleUrls: ["./sigup.component.css"]
})
export class SigupComponent implements OnInit, OnDestroy {
  maxDate = new Date();
  isLoading = false;
  private loadingSubs: Subscription;
  constructor(private authService: AuthService, private uiService: UIService) { }

  ngOnInit() {
    this.onSignup();
    this.setFullYear();
  }

  ngOnDestroy() {
    this.loadingSubs.unsubscribe();
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    })
  }

  onSignup() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(loding => {
      this.isLoading = loding;
    });
  }

  setFullYear() {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }
}
