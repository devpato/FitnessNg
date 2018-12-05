import { User } from "../models/user.model";
import { AuthData } from "../models/auth-data.model";
import { Subject } from 'rxjs/Subject';

export class AuthService {
    private user: User;
    authChange = new Subject<boolean>();

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authChange.next(true);
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authChange.next(true);
    }

    logout(authData: AuthData) {
        this.user = null;
        this.authChange.next(false);
    }

    getUser() {
        return { ...this.user }
    }

    isAuth() {
        return this.user !== null;
    }
}