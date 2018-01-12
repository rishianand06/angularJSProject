import { Order } from "./order";
import { Injectable } from "@angular/core";
import { CartService } from "./cart.service";

@Injectable()
export class OrderService {

    constructor(private cartService: CartService) { }

    public submitOrder(order: Order) {

        console.log(JSON.stringify(order));
        console.log(JSON.stringify(this.cartService.cartItems));
        this.cartService.clear();
    }
}