import { Component } from "@angular/core";
import { Order } from "../model/order";
import { OrderService } from "../model/order.service";

@Component({
    selector: 'app-checkout',
    templateUrl: 'checkout.component.html'
})
export class CheckoutComponent {

    public order: Order = new Order();

    public orderSent: boolean = true;

    constructor(private orderService: OrderService) { }

    public submitOrder(): void {

        this.orderService.submitOrder(this.order);
        this.orderSent = false;
    }
}