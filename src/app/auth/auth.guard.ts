import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth-service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {}
    canActivate(route: ActivatedRouteSnapshot): boolean {

        const user = this.auth.GetUser()

        if (!user) {
            this.router.navigate(['auth']);
            return false;
        }
        return true;
    }
}