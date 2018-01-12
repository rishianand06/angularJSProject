import { Product } from "./product";
import { Injectable } from "@angular/core";

@Injectable()
export class CartService {

    public cartItems: Array<CartItem>;

    public itemCount: number = 0;
    public totalPrice: number = 0;

    constructor() {
        this.cartItems = new Array<CartItem>();
    }

    public addItem(product: Product, quantity: number = 1): void {

        let cartItem = this.cartItems.find((item) => item.product.id == product.id);
        if (cartItem != undefined) {
            cartItem.quantity += quantity;
        } else {
            this.cartItems.push(new CartItem(product, quantity));
        }

        this.recalculate();
    }

    public updateItem(product: Product, quantity: number): void {

        let cartItem = this.cartItems.find((item) => item.product.id == product.id);
        if (cartItem != undefined) {
            cartItem.quantity = Number(quantity);
            if(quantity <= 0) {
                this.removeItem(product.id);
            }
        }
        this.recalculate();
    }

    public removeItem(pid: number): void {

        let index = this.cartItems.findIndex((item) => item.product.id == pid);
        this.cartItems.splice(index, 1);
        this.recalculate();
    }

    public clear(): void {
        this.itemCount = 0;
        this.totalPrice = 0;
        this.cartItems = [];
    }

    private recalculate(): void {
        this.itemCount = 0;
        this.totalPrice = 0;
        this.cartItems.forEach((item) => {
            this.itemCount += item.quantity;
            this.totalPrice += item.subTotal;
        });
    }
}

export class CartItem {

    constructor(public product: Product, public quantity: number) { }

    public get subTotal() {

        return this.product.price * this.quantity;
    }
}