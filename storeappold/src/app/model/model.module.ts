import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { IProductService } from "./iproduct.service";
import { ProductService } from "./product.service";
import { CartService } from "./cart.service";
import { OrderService } from "./order.service";
import { ProductRestService } from "./productrest.service";
import { OrderRestService } from "./orderrest.service";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpModule],
    providers: [
        //  { provide: 'IProductService', useClass: ProductService },
        { provide: 'IProductService', useClass: ProductRestService },
        CartService,
        { provide: OrderService, useClass: OrderRestService },
        AuthService
    ]
})
export class ModelModule { }