import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { ProductComponent } from "../product/product.component";
import { Router } from "@angular/router";
import { CanActivate } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Injectable()
export class AuthRouteGuard implements CanActivate {

    private firstNavigation = true;

    constructor(private router: Router,
        private authService: AuthService) { }

    canActivate(activatedroutesnapshot: ActivatedRouteSnapshot,
        routerStateSnapshot: RouterStateSnapshot): boolean {

            if(!this.authService.authenticated) 
                this.router.navigateByUrl("/admin/auth");
        return true;
    }
}