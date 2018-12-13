import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthData } from "../models/auth-data.model";
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth'
import { TrainingService } from "../training/training.service";
import { UIService } from "../shared/ui.service";

@Injectable()
export class AuthService {
    private isAuthenticated = false;
    authChange = new Subject<boolean>();

    constructor(private route: Router,
        private afAuth: AngularFireAuth,
        private trainingService: TrainingService,
        private uiService: UIService) { }

    registerUser(authData: AuthData) {
        this.uiService.loadingStateChanged.next(true);
        this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password).then(() => {
            this.uiService.loadingStateChanged.next(false);
        }).catch(error => {
            this.uiService.showSnackbar(error.message, null, 3000);
            this.uiService.loadingStateChanged.next(false);
            this.isAuthenticated = false;
        })
    }

    login(authData: AuthData) {
        this.uiService.loadingStateChanged.next(true);
        this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(() => {
            this.uiService.loadingStateChanged.next(false);
        }).catch(error => {
            this.uiService.showSnackbar(error.message, null, 3000);
            this.uiService.loadingStateChanged.next(false);
            this.isAuthenticated = false;
        })
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    isAuth(): boolean {
        return this.isAuthenticated;
    }

    isAuthSuccessful() {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.route.navigate(['/training']);
    }

    initAuthListener() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.isAuthSuccessful();
            } else {
                this.trainingService.cancelSubscriptions();
                this.authChange.next(false);
                this.route.navigate(['/login']);
                this.isAuthenticated = false;
            }
        })
    }
}