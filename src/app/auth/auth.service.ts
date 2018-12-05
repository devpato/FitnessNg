import { Injectable } from "@angular/core"; 3
import { Router } from "@angular/router";
import { User } from "../models/user.model";
import { AuthData } from "../models/auth-data.model";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    private user: User;
    authChange = new Subject<boolean>();

    constructor(private route: Router) { }

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authChange.next(true);
        this.route.navigate(['/training']);
        this.isAuthSuccessful();
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.isAuthSuccessful();
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.route.navigate(['/login']);
    }

    getUser() {
        return { ...this.user }
    }

    isAuth() {
        return this.user !== null;
    }

    isAuthSuccessful() {
        this.authChange.next(true);
        this.route.navigate(['/training']);
    }
}