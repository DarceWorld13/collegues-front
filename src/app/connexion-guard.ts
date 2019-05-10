import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { UserServiceService } from './services/user-service.service';



@Injectable({
providedIn: 'root'
    })
export class ConnexionGuard implements CanActivate{

    constructor(private router: Router, private userService: UserServiceService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree {
        return this.userService.isLoggedIn() || this.router.parseUrl('/connect');
    }

}
