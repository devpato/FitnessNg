import { NgModule } from "@angular/core";
import { SigupComponent } from "./sigup/sigup.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../metrial.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireAuthModule } from "angularfire2/auth";


@NgModule({
    declarations: [
        SigupComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        AngularFireAuthModule],
    exports: []
})
export class AuthModule { }