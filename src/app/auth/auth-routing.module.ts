import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigupComponent } from "./sigup/sigup.component";
import { LoginComponent } from "./login/login.component";


const routes: Routes = [
    { path: "signup", component: SigupComponent },
    { path: "login", component: LoginComponent },
]


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }


