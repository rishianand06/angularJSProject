import { Order } from "./order";
import { Injectable } from "@angular/core";
import { CartService } from "./cart.service";

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class OrderRestService {

    private baseUrl: string = "http://localhost:3500/orders";

    constructor(private http: Http,
        private cartService: CartService) { }

    public submitOrder(order: Order) {

        order.items = this.cartService.cartItems;
        let ourheaders: Headers = new Headers({
            "Content-Type": "application/json"
        });

        let requestOptions: RequestOptions = new RequestOptions({
            headers: ourheaders
        });

        let observable: Observable<Response> =
            this.http.post(this.baseUrl, order, requestOptions);

        observable.subscribe((response) => {
            if (response.status == 201) {
                console.log(response.json());
                this.cartService.clear();
            }
        });
    }
}