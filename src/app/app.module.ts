import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./metrial.module";
import { SigupComponent } from './auth/sigup/sigup.component';
import { LoginComponent } from './auth/login/login.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
@NgModule({
  declarations: [AppComponent, SigupComponent, LoginComponent, CurrentTrainingComponent, NewTrainingComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
