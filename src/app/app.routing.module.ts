import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SigupComponent } from "./auth/sigup/sigup.component";
import { LoginComponent } from "./auth/login/login.component";
import { TrainingComponent } from "./training/training/training.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "signup", component: SigupComponent },
  { path: "login", component: LoginComponent },
  { path: "training", component: TrainingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
