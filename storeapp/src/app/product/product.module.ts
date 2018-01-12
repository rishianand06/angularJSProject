import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';
import { ProductService } from '../model/product.service';
import { ModelModule } from '../model/model.module';
import { CartSummaryComponent } from './cartsummary.component';
import { CartDetailsComponent } from './cartdetails.component';
import { CheckoutComponent } from './checkout.component';

@NgModule({
    declarations:
        [ProductComponent, CartDetailsComponent, CheckoutComponent, CartSummaryComponent],
    imports: [BrowserModule, ModelModule, RouterModule, FormsModule],
    exports: [ProductComponent, CartDetailsComponent, CheckoutComponent]
})
export class ProductModule { }