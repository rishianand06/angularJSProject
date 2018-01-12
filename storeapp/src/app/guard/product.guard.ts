import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { ProductComponent } from "../product/product.component";
import { Router } from "@angular/router";
import { CanActivate } from "@angular/router";

@Injectable()
export class ProductRouteGuard implements CanActivate {

    private firstNavigation = true;

    constructor(private router: Router) { }

    canActivate(activatedroutesnapshot: ActivatedRouteSnapshot,
        routerStateSnapshot: RouterStateSnapshot): boolean {

        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (activatedroutesnapshot.component != ProductComponent) {

                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}