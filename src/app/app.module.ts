import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./metrial.module";
import { SigupComponent } from "./auth/sigup/sigup.component";
import { LoginComponent } from "./auth/login/login.component";
import { CurrentTrainingComponent } from "./training/current-training/current-training.component";
import { NewTrainingComponent } from "./training/new-training/new-training.component";
import { PastTrainingComponent } from "./training/past-training/past-training.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { TrainingComponent } from "./training/training/training.component";
import { AppRoutingModule } from "./app.routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StoptrainingComponent } from "./training/stoptraining/stoptraining.component";
import { AuthService } from "./auth/auth.service";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SigupComponent,
    LoginComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    TrainingComponent,
    HeaderComponent,
    SidenavListComponent,
    StoptrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [StoptrainingComponent]
})
export class AppModule { }
