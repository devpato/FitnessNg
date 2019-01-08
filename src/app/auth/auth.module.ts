import { NgModule } from "@angular/core";
import { SigupComponent } from "./sigup/sigup.component";
import { LoginComponent } from "./login/login.component";
import { AngularFireAuthModule } from "angularfire2/auth";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";


@NgModule({
    declarations: [
        SigupComponent,
        LoginComponent,
    ],
    imports: [
        ReactiveFormsModule,
        AngularFireAuthModule,
        SharedModule,
        AuthRoutingModule
    ],
})
export class AuthModule { }