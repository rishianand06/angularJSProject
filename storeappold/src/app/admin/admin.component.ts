import { Component } from "@angular/core";
import { AuthService } from "../model/auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: "admin.component.html"
})
export class AdminComponent {

    constructor(private router: Router,
        private authService: AuthService) { }

    public logout() {
        this.authService.logout();
        this.router.navigateByUrl("/");
    }
}