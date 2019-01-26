import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { UIService } from "src/app/shared/ui.service";
import { Subscription, Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers/app.reducer';

@Component({
  selector: "app-sigup",
  templateUrl: "./sigup.component.html",
  styleUrls: ["./sigup.component.css"]
})
export class SigupComponent implements OnInit, OnDestroy {
  maxDate = new Date();
  //isLoading$ = false;
  isLoading$: Observable<boolean>;
  private loadingSubs: Subscription;
  constructor(
    private authService: AuthService,
    private uiService: UIService,
    private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.onSignup();
    this.setFullYear();
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    })
  }

  onSignup() {
    // this.loadingSubs = this.uiService.loadingStateChanged.subscribe(loding => {
    //   this.isLoading = loding;
    // });
    this.isLoading$ = this.store.pipe(select(fromRoot.getIsLoading));
  }

  setFullYear() {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
  }
}
