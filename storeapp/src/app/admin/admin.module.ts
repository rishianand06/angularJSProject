import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth.component";
import { CommonModule } from "@angular/common";
import { ModelModule } from "../model/model.module";
import { AuthRouteGuard } from "../guard/auth.guard";


@NgModule({
    declarations: [AdminComponent, AuthComponent],
    imports: [
        ModelModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: "auth", component: AuthComponent },
            { path: "main", component: AdminComponent, canActivate: [AuthRouteGuard] },
            { path: "**", redirectTo: "auth" }
        ])],
    providers: [AuthRouteGuard],
    exports: [AdminComponent, AuthComponent]
})
export class AdminModule {

}