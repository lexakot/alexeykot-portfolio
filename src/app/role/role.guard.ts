import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from '../auth/auth-service';

@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {}
    canActivate(route: ActivatedRouteSnapshot): boolean {

        const user = this.auth.GetUser()

        if (!route.data.roles.includes(user.role)) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}