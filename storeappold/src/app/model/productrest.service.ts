
import { Injectable } from "@angular/core";

import { Product } from "./product";
import { IProductService } from "./iproduct.service";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductRestService implements IProductService {

    private products: Array<Product>;
    private baseUrl: string = "http://localhost:3500/products";

    constructor(private http: Http) {
        this.products = new Array<Product>();

        let ourheaders: Headers = new Headers({
            "Accept": "application/json"
        });

        let requestOptions: RequestOptions = new RequestOptions({
            headers: ourheaders
        });

        let observable: Observable<Response> = this.http.get(this.baseUrl, requestOptions);

        observable.subscribe(
            (response) => {
                this.products = response.json();
            }
        );
    }

    addProduct(product: Product): void {

    }
    updateProduct(updateProduct: Product): void {

    }

    deleteProduct(pid: number): void {

    }

    getProductById(pid: number): Product {

        let product: Product = this.products.find((product) => {
            return product.id == pid;
        });
        return product;
    }

    getProducts(category: string = null): Array<Product> {
        return this.products.filter((product) => (category == null || product.category == category));
    }

    getCategories(): Array<String> {

        let categories = this.products.map((product) => product.category)
            .filter((cat, index, arr) => arr.indexOf(cat) == index)
            .sort();
        return categories;
    }
}
